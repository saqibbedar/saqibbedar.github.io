import { createContext, use, useState } from "react";
import { globalSearchService } from "@/services/services";

// 1. Create the Context
export const GlobalSearchContext = createContext(null);

// 2. Create custom hook for using the context
export const useGlobalSearch = () => {
    const context = use(GlobalSearchContext);
    if (!context) {
        throw new Error("useGlobalSearch must be used within GlobalSearchProvider");
    }
    return context;
}

// 3. Create Provider
export function GlobalSearchProvider({ children }) {
    
  // 4. Required states
  const [searchResults, setSearchResults] = useState({
    blogs: [],
    projects: [],
    certificates: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 5. Perform Global Search
  const searchGlobally = async (query) => {
    // return if empty search
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
      setError("An error occurred while searching");
      console.error("Search error: ", error);
    } finally {
      setLoading(false);
    }
  }
  
  // 6. Clear search results
  const clearSearch = () => {
    setSearchResults({
      blogs: [],
      projects: [],
      certificates: []
    });
    setSearchQuery("");
  }

  // 7. Check if we have any results
  const hasResults =
    searchResults.blogs.length > 0 ||
    searchResults.projects.length > 0 ||
    searchResults.certificates.length > 0;

  return (
    // 6. pass SearchGlobally function and searchResults state to consumer
    <GlobalSearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        searchGlobally,
        clearSearch,
        hasResults,
        loading,
        error
      }}>
      {children}
    </GlobalSearchContext.Provider>
  )
}
