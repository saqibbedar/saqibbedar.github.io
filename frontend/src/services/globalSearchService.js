/**
 * Fetches blogs from JSON file
 * @returns {Promise<Array>} Array of blogs
 */
const fetchBlogs = async () => {
  try {
    const response = await fetch("/src/assets/json/blogs.json");
    if (!response.ok) {
      throw new Error("Failed to fetch certificates");
    }
    const data = await response.json();
    // console.log("Debug services/globalSearchService: fetchCertificates: ", data);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches projects from JSON file
 * @returns {Promise<Array>} Array of projects
 */
const fetchProjects = async () => {
  try {
    const response = await fetch("/src/assets/json/projects.json");
    if (!response.ok) {
      throw new Error("Failed to fetch certificates");
    }
    const data = await response.json();
    // console.log("Debug services/globalSearchService: fetchCertificates: ", data);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches certificates from JSON file
 * @returns {Promise<Array>} Array of certificates
 */
const fetchCertificates = async () => {
  try {
    const response = await fetch("/src/assets/json/certificates.json");
    if (!response.ok) {
      throw new Error("Failed to fetch certificates");
    }
    const data = await response.json();
    // console.log("Debug services/globalSearchService: fetchCertificates: ", data);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches all search data in parallel
 * @returns {Promise<Object>} Object containing all search data
 */
const fetchAllSearchData = async () => {
  try {
    const [blogs, projects, certificates] = await Promise.all([
      fetchBlogs(),
      fetchProjects(),
      fetchCertificates(),
    ]);

    return {
      blogs,
      projects,
      certificates,
    };
  } catch (error) {
    console.error(
      "Error fetching all search data at services/globalSearchService: fetchAllSearchData(): ",
      error
    );
  }
};

/**
 * Performs global search across all search data
 * @param {string} searchQuery Search Query
 * @returns {Promise<Object>} Search results from all sources
 */
export const globalSearchService = async (searchQuery) => {
  if (!searchQuery || searchQuery.trim() === "") {
    return {
      blogs: [],
      projects: [],
      certificates: [],
    };
  }

  try {
    const { blogs, projects, certificates } = await fetchAllSearchData();

    const lowerCaseKeyword = searchQuery.toLowerCase();

    // Filter projects
    const filteredProjects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(lowerCaseKeyword) ||
        (project.description &&
          project.description.toLowerCase().includes(lowerCaseKeyword)) ||
        (project.tags && project.tags.toLowerCase().includes(lowerCaseKeyword))
    );

    // Filter certificates
    const filteredCertificates = certificates.filter(
      (certificate) =>
        certificate.title.toLowerCase().includes(lowerCaseKeyword) ||
        certificate.description.toLowerCase().includes(lowerCaseKeyword) ||
        certificate.providerName.toLowerCase().includes(lowerCaseKeyword) ||
        (certificate.tags &&
          certificate.tags.toLowerCase().includes(lowerCaseKeyword))
    );

    // Filter blog posts
    const filteredBlogs = blogs.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseKeyword) ||
        post.description.toLowerCase().includes(lowerCaseKeyword) ||
        post.category.toLowerCase().includes(lowerCaseKeyword)
    );

    return {
      blogs: filteredBlogs,
      projects: filteredProjects,
      certificates: filteredCertificates,
    };
  } catch (error) {
    console.error(
      "Error performing global search at services/globalSearchService: performGlobalSearch: ",
      error
    );
    throw error;
  }
};
