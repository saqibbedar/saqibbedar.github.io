import { createContext, use, useState, useEffect } from "react";
import {
  globalSearchService,
  preloadSearchData,
  clearSearchCache,
} from "../services/search";

// 1. Create the Context
export const GlobalSearchContext = createContext(null);

// 2. Create custom hook for using the context
export const useGlobalSearch = () => {
  const context = use(GlobalSearchContext);
  if (!context) {
    throw new Error("useGlobalSearch must be used within GlobalSearchProvider");
  }
  return context;
};

// 3. Create Provider
export function GlobalSearchProvider({ children }) {
  // 4. Required states
  const [searchResults, setSearchResults] = useState({
    blogs: [],
    projects: [],
    certificates: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Preload search data when component mounts
  useEffect(() => {
    preloadSearchData().catch((err) => {
      console.error("Error preloading search data:", err);
    });
  }, []);

  // 5. Perform Global Search
  const searchGlobally = async (query) => {
    // Return if empty search
    if (!query || query.trim() === "") {
      clearSearch();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSearchQuery(query);

      // Call the service to perform the search
      const results = await globalSearchService(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setError("An error occurred while searching");
    } finally {
      setLoading(false);
    }
  };

  // 6. Clear search results
  const clearSearch = () => {
    setSearchResults({
      blogs: [],
      projects: [],
      certificates: [],
    });
    setSearchQuery("");
    setError(null);
  };

  // 7. Calculate total results
  const totalResults =
    (searchResults.blogs?.length || 0) +
    (searchResults.projects?.length || 0) +
    (searchResults.certificates?.length || 0);

  return (
    <GlobalSearchContext.Provider
      value={{
        searchGlobally,
        searchResults,
        loading,
        error,
        searchQuery,
        clearSearch,
        totalResults,
        hasResults: totalResults > 0,
      }}
    >
      {children}
    </GlobalSearchContext.Provider>
  );
}
