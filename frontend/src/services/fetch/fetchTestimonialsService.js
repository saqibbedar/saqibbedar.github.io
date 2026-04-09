import { fetchWithCache } from "./cacheService";
import testimonialsFallback from "./testimonialsFallback";

const CACHE_KEY = "data:testimonials";

export const fetchTestimonialsService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    try {
      const response = await fetch("/data/json/testimonials.json");

      if (!response.ok) {
        throw new Error(`Failed to fetch testimonials: ${response.status}`);
      }

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error(
          `Unexpected testimonials response type: ${contentType || "unknown"}`
        );
      }

      const testimonials = await response.json();
      console.log(
        "testimonials loaded:",
        Array.isArray(testimonials) ? testimonials.length : 0
      );
      return Array.isArray(testimonials) ? testimonials : testimonialsFallback;
    } catch (error) {
      console.warn("Falling back to bundled testimonials:", error);
      return testimonialsFallback;
    }
  });
