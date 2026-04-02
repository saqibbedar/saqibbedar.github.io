/**
 * Fetches blogs from JSON file
 * @returns {Promise<Array>} Array of blogs
 */
export const fetchBlogsService = async () => {
  try {
    const response = await fetch("src/assets/json/blogs.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    return [];
  }
};
