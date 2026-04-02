import { fetchAllSearchData } from "./fetchService";
import { getFromCache, clearCache } from './cacheService';
import { getIndex, searchIndex, clearIndex } from './indexService';

/**
 * Traditional search method as fallback
 * @param {string} keyword Search Keyword
 * @param {Object} data Data to search through
 * @returns {Object} Search results
 */
export const performTraditionalSearch = (keyword, data) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    
    // Filter projects
    const filteredProjects = Array.isArray(data.projects) 
      ? data.projects.filter(project => {
          if (!project) return false;
          
          const name = project.name ? project.name.toLowerCase() : '';
          const description = project.description ? project.description.toLowerCase() : '';
          const tags = project.tags ? project.tags.toLowerCase() : '';
          
          return name.includes(lowerCaseKeyword) || 
                 description.includes(lowerCaseKeyword) || 
                 tags.includes(lowerCaseKeyword);
        })
      : [];
    
    // Filter certificates
    const filteredCertificates = Array.isArray(data.certificates) 
      ? data.certificates.filter(certificate => {
          if (!certificate) return false;
          
          const title = certificate.title ? certificate.title.toLowerCase() : '';
          const description = certificate.description ? certificate.description.toLowerCase() : '';
          const providerName = certificate.providerName ? certificate.providerName.toLowerCase() : '';
          const tags = certificate.tags ? certificate.tags.toLowerCase() : '';
          
          return title.includes(lowerCaseKeyword) || 
                 description.includes(lowerCaseKeyword) || 
                 providerName.includes(lowerCaseKeyword) || 
                 tags.includes(lowerCaseKeyword);
        })
      : [];
    
    // Filter blogs
    const filteredBlogs = Array.isArray(data.blogs) 
      ? data.blogs.filter(blog => {
          if (!blog) return false;
          
          const title = blog.title ? blog.title.toLowerCase() : '';
          const description = blog.description ? blog.description.toLowerCase() : '';
          const category = blog.category ? blog.category.toLowerCase() : '';
          const content = blog.content ? blog.content.toLowerCase() : '';
          
          return title.includes(lowerCaseKeyword) || 
                 description.includes(lowerCaseKeyword) || 
                 category.includes(lowerCaseKeyword) ||
                 content.includes(lowerCaseKeyword);
        })
      : [];
    
    return {
      projects: filteredProjects,
      certificates: filteredCertificates,
      blogs: filteredBlogs
    };
}; 

/**
 * Performs global search across all search data
 * @param {string} keyword Search Keyword
 * @returns {Promise<Object>} Search results from all sources
 */
export const performSearch = async (keyword) => {
    if (!keyword || keyword.trim() === "") {
      return {
        blogs: [],
        projects: [],
        certificates: []
      };
    }
  
    try {
      // Get data from cache or fetch it
      const data = await getFromCache(fetchAllSearchData);
      
      // Get or build the search index
      const index = getIndex(data);
      
      // Search using the index
      const results = searchIndex(keyword, index);
      
      // If we got very few results, try traditional search as fallback
      const totalResults = 
        results.projects.length + 
        results.blogs.length +
        results.certificates.length;
      
      if (totalResults < 3) {
        console.log("Few index results, trying traditional search as fallback");
        return performTraditionalSearch(keyword, data);
      }
      
      return results;
    } catch (error) {
      console.error("Error performing search:", error);
      return {
        blogs: [],
        projects: [],
        certificates: []
      };
    }
  };
  
  /**
   * Preloads search data and builds the index
   * @returns {Promise<void>}
   */
  export const preloadSearchData = async () => {
    try {
      const data = await getFromCache(fetchAllSearchData);
      getIndex(data); // Build the index
      console.log("Search data and index preloaded");
    } catch (error) {
      console.error("Error preloading search data:", error);
    }
  };
  
  /**
   * Clears all search caches
   */
  export const clearSearchData = () => {
    clearCache();
    clearIndex();
    console.log("All search data cleared");
  };
  
  /**
   * Main search service function to expose
   * @param {string} query Search query
   * @returns {Promise<Object>} Search results
   */
  export const globalSearchService = async (query) => {
    return performSearch(query);
  };