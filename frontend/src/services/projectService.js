import { fetchProjectsService } from './fetch/index';

/**
 * Fetches projects data
 * @returns {Promise<Array>} Array of projects
 */
const fetchProjects = async () => {
  try {
    return await fetchProjectsService();
  } catch (error) {
    console.error("Error in fetchProjects:", error);
    throw error;
  }
};

/**
 * Filters projects by tag
 * @param {Array} projectsData - Array of project objects
 * @param {string} tag - Tag to filter by
 * @returns {Array} Filtered projects
 */
const getProjectsService = (projectsData, tag) => {
  // Check if projectsData exists and is an array
  if (!projectsData || !Array.isArray(projectsData)) {
    return [];
  }

  const selectedTag = tag.toLowerCase();
  return projectsData.filter((project) => {
    if (selectedTag === "all") return true;
    const projectTagsArray = project.tags.toLowerCase().split(" ");
    return projectTagsArray.includes(selectedTag);
  });
};

/**
 * Gets a project by ID
 * @param {Array} projectsData - Array of project objects
 * @param {number|string} id - Project ID to find
 * @returns {Object|undefined} Found project or undefined
 */
const getProjectByIdService = (projectsData, id) => {
  return projectsData.find((project) => project._id === Number(id));
};

export { fetchProjects, getProjectsService, getProjectByIdService };