import { useRef } from "react";

/**
 * Custom hook to manage scroll functionality for search results sections
 *
 * This hook provides:
 * 1. Separate refs for certificates and projects sections
 * 2. Smooth scrolling functionality for horizontal navigation
 * 3. Reusable scroll logic across components
 *
 * @returns {Object} Object containing refs and scroll function
 */
export const useScrollRefs = () => {
  // Create separate refs for independent scrolling of each section
  const certificatesScrollRef = useRef(null);
  const projectsScrollRef = useRef(null);

  /**
   * Handles horizontal scrolling for search result sections
   *
   * @param {string} direction - Direction to scroll ('left' or 'right')
   * @param {React.RefObject} ref - Reference to the scrollable container
   */
  const scroll = (direction, ref) => {
    if (ref.current) {
      // Get current scroll position and container width
      const { scrollLeft, clientWidth } = ref.current;

      // Calculate new scroll position based on direction
      // Scrolls one container width at a time
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth // Scroll left
          : scrollLeft + clientWidth; // Scroll right

      // Perform smooth scroll animation
      ref.current.scrollTo({
        left: scrollTo,
        behavior: "smooth", // Enable smooth scrolling animation
      });
    }
  };

  // Return refs and scroll function for use in components
  return {
    certificatesScrollRef, // For certificates section scrolling
    projectsScrollRef, // For projects section scrolling
    scroll, // Shared scroll functionality
  };
};
