/**
 * Common English stop words that add little value to search
 */
const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "in",
  "on",
  "at",
  "to",
  "for",
  "with",
  "by",
  "about",
  "like",
  "through",
  "over",
  "before",
  "after",
  "between",
  "under",
  "during",
  "since",
  "without",
  "of",
  "from",
]);

/**
 * Checks if a word is a stop word
 * @param {string} word - Word to check
 * @returns {boolean} Whether the word is a stop word
 */
export const isStopWord = (word) => {
  return STOP_WORDS.has(word.toLowerCase());
};

/**
 * Filters stop words from an array of words
 * @param {Array<string>} words - Words to filter
 * @returns {Array<string>} Filtered words
 */
export const removeStopWords = (words) => {
  return words.filter((word) => !isStopWord(word) && word.length > 1);
};

/**
 * Splits text into words and removes stop words
 * @param {string} text - Text to process
 * @returns {Array<string>} Array of meaningful words
 */
export const extractSearchTerms = (text) => {
  if (!text) return [];

  // Split on non-word characters and filter out stop words
  const words = text
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 1);
  return removeStopWords(words);
};
