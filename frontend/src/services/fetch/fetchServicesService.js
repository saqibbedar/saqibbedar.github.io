import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:services";

export const fetchServicesService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/services.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }
    return response.json();
  });
