import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:courses";

export const fetchCoursesService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/courses.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.status}`);
    }
    return response.json();
  });
