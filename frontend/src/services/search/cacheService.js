/**
 * Cache for search data
 */
let dataCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Gets data from cache or fetches fresh data if cache is stale
 * @param {Function} fetchFn - Function to fetch fresh data
 * @returns {Promise<Object>} Search data
 */
export const getFromCache = async (fetchFn) => {
  const now = Date.now();

  if (dataCache && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) {
    console.log("Using cached search data");
    return dataCache;
  }

  console.log("Fetching fresh search data");

  try {
    const data = await fetchFn();
    dataCache = data;
    cacheTimestamp = now;
    return data;
  } catch (error) {
    console.error("Error fetching data for cache:", error);
    if (dataCache) {
      console.warn("Using stale cache due to fetch error");
      return dataCache;
    }
    throw error;
  }
};

/**
 * Clears the search data cache
 */
export const clearCache = () => {
  dataCache = null;
  cacheTimestamp = null;
  console.log("Search cache cleared");
};
