const MEMORY_CACHE = new Map();
const DEFAULT_CACHE_DURATION = 15 * 60 * 1000;
const CACHE_NAMESPACE_VERSION = "v2";

/**
 * Creates a stable key for cache entries from request attributes.
 * @param {string} key Raw cache key.
 * @returns {string} Cache key safe for memory and localStorage.
 */
const normalizeKey = (key) => `sb-cache:${CACHE_NAMESPACE_VERSION}:${key}`;

/**
 * Reads a cache entry from memory or localStorage if still fresh.
 * Preconditions:
 * - key must be a non-empty string.
 * - maxAge must be a positive number in milliseconds.
 * Postconditions:
 * - returns cached value when not expired.
 * - returns null when key is absent or expired.
 * @param {string} key Cache key.
 * @param {number} maxAge Cache validity in milliseconds.
 * @returns {any|null} Cached payload or null.
 */
export const getCachedValue = (key, maxAge = DEFAULT_CACHE_DURATION) => {
  if (!key || typeof key !== "string") return null;

  const cacheKey = normalizeKey(key);
  const now = Date.now();

  const memoryEntry = MEMORY_CACHE.get(cacheKey);
  if (memoryEntry && now - memoryEntry.timestamp < maxAge) {
    return memoryEntry.value;
  }

  try {
    const rawValue = localStorage.getItem(cacheKey);
    if (!rawValue) return null;

    const parsed = JSON.parse(rawValue);
    if (!parsed?.timestamp || now - parsed.timestamp >= maxAge) {
      localStorage.removeItem(cacheKey);
      return null;
    }

    MEMORY_CACHE.set(cacheKey, parsed);
    return parsed.value;
  } catch (error) {
    console.warn(`Cache read failed for ${cacheKey}:`, error);
    return null;
  }
};

/**
 * Persists a value in memory and localStorage cache.
 * Preconditions:
 * - key must be a non-empty string.
 * - value can be any JSON-serializable payload.
 * Postconditions:
 * - value is available via getCachedValue until expiration.
 * @param {string} key Cache key.
 * @param {any} value Payload to cache.
 * @returns {any} Same value for fluent usage.
 */
export const setCachedValue = (key, value) => {
  if (!key || typeof key !== "string") return value;

  const cacheKey = normalizeKey(key);
  const entry = { value, timestamp: Date.now() };

  MEMORY_CACHE.set(cacheKey, entry);

  try {
    localStorage.setItem(cacheKey, JSON.stringify(entry));
  } catch (error) {
    console.warn(`Cache write failed for ${cacheKey}:`, error);
  }

  return value;
};

/**
 * Fetches data with centralized stale-aware caching.
 * Preconditions:
 * - key must be stable for the same logical data.
 * - fetcher must return a Promise.
 * Postconditions:
 * - returns cached data when available and fresh.
 * - otherwise fetches, caches, and returns latest data.
 * @param {string} key Cache key.
 * @param {Function} fetcher Async function that loads data.
 * @param {number} maxAge Cache validity in milliseconds.
 * @returns {Promise<any>} Data payload.
 */
export const fetchWithCache = async (
  key,
  fetcher,
  maxAge = DEFAULT_CACHE_DURATION
) => {
  const cached = getCachedValue(key, maxAge);
  if (cached !== null) {
    return cached;
  }

  const fresh = await fetcher();
  return setCachedValue(key, fresh);
};

/**
 * Clears one cache record or every managed cache key.
 * @param {string=} key Optional single cache key.
 * @returns {void}
 */
export const clearCachedValue = (key) => {
  if (key && typeof key === "string") {
    const cacheKey = normalizeKey(key);
    MEMORY_CACHE.delete(cacheKey);
    localStorage.removeItem(cacheKey);
    return;
  }

  const keys = Array.from(MEMORY_CACHE.keys());
  keys.forEach((cacheKey) => {
    MEMORY_CACHE.delete(cacheKey);
    localStorage.removeItem(cacheKey);
  });
};
