import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:education";

export const fetchEducationService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/education.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch education: ${response.status}`);
    }
    return response.json();
  });
