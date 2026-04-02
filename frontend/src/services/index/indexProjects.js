import { fetchProjectsService } from '../fetch/fetchProjectsService';

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
  
