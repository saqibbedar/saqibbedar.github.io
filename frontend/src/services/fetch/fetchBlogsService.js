import { fetchWithCache } from "./cacheService";

// Bump cache key when blog schema changes (e.g., priority field)
const CACHE_KEY = "data:v2:blogs";

export const fetchBlogsService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/blogs.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    return response.json();
  });
