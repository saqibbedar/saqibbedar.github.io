import { fetchBlogsService, fetchProjectsService, fetchCertificatesService } from "../fetch/index";
  
/**
 * Fetches all search data in parallel
 * @returns {Promise<Object>} Object containing all search data
 */
export const fetchAllSearchData = async () => {
  try {
    const [blogs, projects, certificates] = await Promise.all([
      fetchBlogsService(),
      fetchProjectsService(),
      fetchCertificatesService(),
    ]);

    return {
      blogs: blogs || [],
      projects: projects || [],
      certificates: certificates || [],
    };
  } catch (error) {
    console.error("Error fetching all search data:", error);
    return {
      blogs: [],
      projects: [],
      certificates: [],
    };
  }
};
