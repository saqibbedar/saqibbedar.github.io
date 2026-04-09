import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "doc:source-code";

export const fetchSourceCodeDocService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/blogs/source-code.md");
    if (!response.ok) {
      throw new Error(`Failed to fetch source code doc: ${response.status}`);
    }
    return response.text();
  });
