import { fetchWithCache } from "./cacheService";

const CACHE_KEY = "data:bootcamps-events";

export const fetchBootcampsEventsService = async () =>
  fetchWithCache(CACHE_KEY, async () => {
    const response = await fetch("/data/json/bootcamps-events.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch bootcamps/events: ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data)) return [];

    return data.map((event) => ({
      ...event,
      type: event?.type || "event",
      mode: event?.mode || "on-site",
      role: event?.role || "Speaker",
      title: event?.title || "Untitled Event",
      subtitle: event?.subtitle || "",
      date: event?.date || "",
      time: event?.time || "",
      venue: event?.venue || "",
      organizedBy: event?.organizedBy || "",
      description: event?.description || "",
      topics: Array.isArray(event?.topics) ? event.topics : [],
      images: Array.isArray(event?.images) ? event.images : [],
      resources: Array.isArray(event?.resources) ? event.resources : [],
      tags: Array.isArray(event?.tags) ? event.tags : [],
    }));
  });
