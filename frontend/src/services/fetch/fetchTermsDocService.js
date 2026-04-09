import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "doc:terms";

export const fetchTermsDocService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/docs/terms.md");
    if (!response.ok) {
      throw new Error(`Failed to fetch terms doc: ${response.status}`);
    }
    return response.text();
  });
