import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:certificates";

export const fetchCertificatesService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/certificates.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch certificates: ${response.status}`);
    }
    return response.json();
  });
