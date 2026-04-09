import {
  fetchProjectsService,
  fetchCertificatesService,
  fetchCoursesService,
  fetchServicesService,
  fetchEducationService,
  fetchBootcampsEventsService,
  fetchPolicyDocService,
  fetchTermsDocService,
  fetchSitemapService,
} from "@/services/fetch";

/**
 * Fetches all search data in parallel
 * @returns {Promise<Object>} Object containing all search data
 */
export const fetchAllSearchData = async () => {
  try {
    const [
      projects,
      certificates,
      courses,
      services,
      education,
      bootcamps,
      policy,
      terms,
      sitemap,
    ] = await Promise.all([
      fetchProjectsService(),
      fetchCertificatesService(),
      fetchCoursesService(),
      fetchServicesService(),
      fetchEducationService(),
      fetchBootcampsEventsService(),
      fetchPolicyDocService(),
      fetchTermsDocService(),
      fetchSitemapService(),
    ]);

    return {
      projects: Array.isArray(projects) ? projects : [],
      certificates: Array.isArray(certificates) ? certificates : [],
      courses: Array.isArray(courses) ? courses : [],
      services: Array.isArray(services) ? services : [],
      education: Array.isArray(education) ? education : [],
      bootcamps: Array.isArray(bootcamps) ? bootcamps : [],
      policy: policy || "",
      terms: terms || "",
      sitemap: sitemap || {
        sitemapData: [],
        externalLinks: [],
        dynamicRoutes: [],
      },
    };
  } catch (error) {
    console.error("Error fetching all search data:", error);
    return {
      projects: [],
      certificates: [],
      courses: [],
      services: [],
      education: [],
      bootcamps: [],
      policy: "",
      terms: "",
      sitemap: { sitemapData: [], externalLinks: [], dynamicRoutes: [] },
    };
  }
};
