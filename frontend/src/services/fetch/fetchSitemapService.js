import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:sitemap";

export const fetchSitemapService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/sitemap.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status}`);
    }
    return response.json();
  });
