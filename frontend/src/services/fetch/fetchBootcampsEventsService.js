import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:bootcamps-events";

export const fetchBootcampsEventsService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/bootcamps-events.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch bootcamps/events: ${response.status}`);
    }
    return response.json();
  });
