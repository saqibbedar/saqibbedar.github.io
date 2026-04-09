import { fetchAllSearchData } from "./fetchService";
import { getFromCache, clearCache } from "./cacheService";
import { getIndex, searchIndex, clearIndex } from "./indexService";

/**
 * Traditional search method as fallback
 * @param {string} keyword Search Keyword
 * @param {Object} data Data to search through
 * @returns {Object} Search results
 */
export const performTraditionalSearch = (keyword, data) => {
  const lowerCaseKeyword = keyword.toLowerCase();

  const includesKeyword = (text) =>
    String(text || "")
      .toLowerCase()
      .includes(lowerCaseKeyword);

  // Filter projects
  const filteredProjects = Array.isArray(data.projects)
    ? data.projects.filter((project) => {
        if (!project) return false;

        const tags = Array.isArray(project.tags)
          ? project.tags.join(" ").toLowerCase()
          : project.tags
          ? project.tags.toLowerCase()
          : "";

        return (
          includesKeyword(project.title) ||
          includesKeyword(project.shortDescription) ||
          includesKeyword(project.fullDescription) ||
          includesKeyword(project.category) ||
          tags.includes(lowerCaseKeyword)
        );
      })
    : [];

  // Filter certificates
  const filteredCertificates = Array.isArray(data.certificates)
    ? data.certificates.filter((certificate) => {
        if (!certificate) return false;

        const tags = String(certificate.tags || "").toLowerCase();

        return (
          includesKeyword(certificate.title) ||
          includesKeyword(certificate.description) ||
          includesKeyword(certificate.providerName) ||
          tags.includes(lowerCaseKeyword)
        );
      })
    : [];

  const filteredCourses = Array.isArray(data.courses)
    ? data.courses.filter(
        (course) =>
          includesKeyword(course?.title) ||
          includesKeyword(course?.shortDescription) ||
          includesKeyword(course?.fullDescription) ||
          includesKeyword((course?.tags || []).join(" "))
      )
    : [];

  const filteredServices = Array.isArray(data.services)
    ? data.services.filter(
        (service) =>
          includesKeyword(service?.title) ||
          includesKeyword(service?.shortDescription) ||
          includesKeyword(service?.fullDescription) ||
          includesKeyword(service?.category)
      )
    : [];

  const filteredEducation = Array.isArray(data.education)
    ? data.education.filter(
        (edu) =>
          includesKeyword(edu?.degreeType) ||
          includesKeyword(edu?.organization) ||
          includesKeyword(edu?.description)
      )
    : [];

  const filteredBootcamps = Array.isArray(data.bootcamps)
    ? data.bootcamps.filter(
        (event) =>
          includesKeyword(event?.title) ||
          includesKeyword(event?.subtitle) ||
          includesKeyword(event?.description) ||
          includesKeyword((event?.topics || []).join(" ")) ||
          includesKeyword((event?.tags || []).join(" "))
      )
    : [];

  const docRecords = [
    {
      id: "policy",
      title: "Privacy Policy",
      content: data.policy,
      path: "/privacy-policy",
    },
    {
      id: "terms",
      title: "Terms & Conditions",
      content: data.terms,
      path: "/terms-conditions",
    },
    {
      id: "sitemap",
      title: "Sitemap",
      content: JSON.stringify(data.sitemap || {}),
      path: "/sitemap",
    },
  ];

  const filteredDocs = docRecords.filter(
    (doc) => includesKeyword(doc.title) || includesKeyword(doc.content)
  );

  return {
    projects: filteredProjects,
    certificates: filteredCertificates,
    courses: filteredCourses,
    services: filteredServices,
    education: filteredEducation,
    bootcamps: filteredBootcamps,
    docs: filteredDocs,
  };
};

/**
 * Performs global search across all search data
 * @param {string} keyword Search Keyword
 * @returns {Promise<Object>} Search results from all sources
 */
export const performSearch = async (keyword) => {
  if (!keyword || keyword.trim() === "") {
    return {
      projects: [],
      certificates: [],
      courses: [],
      services: [],
      education: [],
      bootcamps: [],
      docs: [],
    };
  }

  try {
    const data = await getFromCache(fetchAllSearchData);
    const index = getIndex(data);
    const results = searchIndex(keyword, index);

    const totalResults =
      results.projects.length +
      results.certificates.length +
      results.courses.length +
      results.services.length +
      results.education.length +
      results.bootcamps.length +
      results.docs.length;

    if (totalResults < 3) {
      return performTraditionalSearch(keyword, data);
    }

    return results;
  } catch (error) {
    console.error("Error performing search:", error);
    return {
      projects: [],
      certificates: [],
      courses: [],
      services: [],
      education: [],
      bootcamps: [],
      docs: [],
    };
  }
};

/**
 * Preloads search data and builds the index
 * @returns {Promise<void>}
 */
export const preloadSearchData = async () => {
  try {
    const data = await getFromCache(fetchAllSearchData);
    getIndex(data); // Build the index
    console.log("Search data and index preloaded");
  } catch (error) {
    console.error("Error preloading search data:", error);
  }
};

/**
 * Clears all search caches
 */
export const clearSearchData = () => {
  clearCache();
  clearIndex();
  console.log("All search data cleared");
};

/**
 * Main search service function to expose
 * @param {string} query Search query
 * @returns {Promise<Object>} Search results
 */
export const globalSearchService = async (query) => {
  return performSearch(query);
};
