import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:blogs";

export const fetchBlogsService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/blogs.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    return response.json();
  });
