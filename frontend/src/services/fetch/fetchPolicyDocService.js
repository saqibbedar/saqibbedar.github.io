import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "doc:policy";

export const fetchPolicyDocService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/docs/policy.md");
    if (!response.ok) {
      throw new Error(`Failed to fetch policy doc: ${response.status}`);
    }
    return response.text();
  });
