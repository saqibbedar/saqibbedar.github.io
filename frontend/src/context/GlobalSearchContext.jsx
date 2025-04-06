import { createContext, useContext, useState } from "react";
import { certificates, projects } from "../assets/assets";

// 1. Create the Context
export const GlobalSearchContext = createContext(null);

// 2. Create custom hook for using the context
export const useGlobalSearch = () => {
    const context = useContext(GlobalSearchContext);
    if (!context) {
        throw new Error("useGlobalSearch must be used within GlobalSearchProvider");
    }
    return context;
}

// 3. Create Provider
export function GlobalSearchProvider({ children }) {
    
  const [searchResults, setSearchResults] = useState({
    certificates: [],
    projects: []
  });

  const searchGlobally = (keyword) => {
    // lower keyword
    const lowerCaseKeyword = keyword.toLowerCase();

    // filter Certificates
    const filterCertificates = certificates.filter((certificate) =>
      certificate.title.toLowerCase().includes(lowerCaseKeyword) ||
      certificate.description.toLowerCase().includes(lowerCaseKeyword) ||
      certificate.providerName.toLowerCase().includes(lowerCaseKeyword) ||
      certificate.tags.toLowerCase().includes(lowerCaseKeyword)
    );

    // filter Projects
    const filterProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(lowerCaseKeyword) ||
      project.description.toLowerCase().includes(lowerCaseKeyword) ||
      project.category.toLowerCase().includes(lowerCaseKeyword)
    );
      
    setSearchResults({
      certificates: filterCertificates,
      projects: filterProjects
    });
      
  };

  return (
    <GlobalSearchContext.Provider value={{searchGlobally, searchResults}}>
      {children}
    </GlobalSearchContext.Provider>
  )
}
