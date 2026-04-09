import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:faqs";

export const fetchFaqsService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/faqs.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch FAQs: ${response.status}`);
    }
    return response.json();
  });
