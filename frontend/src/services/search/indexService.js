import { extractSearchTerms } from "@/utils/index";

/**
 * Search index for faster lookups
 */
let index = null;

/**
 * Builds a search index from the data
 * @param {Object} data The data to index
 * @returns {Object} The search index
 */
export const generateIndex = (data) => {
  console.log("Generating search index...");

  const index = {
    terms: new Map(),
    blogs: data.blogs || [],
    projects: data.projects || [],
    certificates: data.certificates || [],
  };

  // 1. Index projects
  if (Array.isArray(data.projects)) {
    data.projects.forEach((project, i) => {
      if (!project) return;

      // 1.1 Extract searchable content
      const content = [project.name, project.description, project.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      // 1.2 Get meaningful search terms
      const terms = extractSearchTerms(content);

      // 1.3 Add terms to index
      terms.forEach((term) => {
        if (!index.terms.has(term)) {
          index.terms.set(term, { blogs: [], projects: [], certificates: [] });
        }
        if (!index.terms.get(term).projects.includes(i)) {
          index.terms.get(term).projects.push(i);
        }
      });
    });
  }

  // 2. Index Blogs
  if (Array.isArray(data.blogs)) {
    data.blogs.forEach((blog, i) => {
      if (!blog) return;

      // 2.1 Extract searchable content
      const content = [
        blog.title,
        blog.description,
        blog.category,
        blog.content,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      // 2.2 Get meaningful search terms
      const terms = extractSearchTerms(content);

      // 2.3 Add terms to index
      terms.forEach((term) => {
        if (!index.terms.has(term)) {
          index.terms.set(term, { blogs: [], projects: [], certificates: [] });
        }
        // Fixed syntax error here - was accessing term.blogs instead of term
        if (!index.terms.get(term).blogs.includes(i)) {
          index.terms.get(term).blogs.push(i); // Fixed syntax
        }
      });
    });
  }

  // 3. Index Certificates
  if (Array.isArray(data.certificates)) {
    data.certificates.forEach((cer, i) => {
      if (!cer) return;

      // 3.1 Extract searchable content
      const content = [cer.title, cer.description, cer.providerName, cer.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      // 3.2 Get meaningful search terms
      const terms = extractSearchTerms(content);

      // 3.3 Add terms to index
      terms.forEach((term) => {
        if (!index.terms.has(term)) {
          index.terms.set(term, { blogs: [], projects: [], certificates: [] });
        }
        // Fixed syntax error here - was accessing term.certificates instead of term
        if (!index.terms.get(term).certificates.includes(i)) {
          index.terms.get(term).certificates.push(i); // Fixed syntax
        }
      });
    });
  }

  console.log(`Index generated with ${index.terms.size} terms`);
  return index;
};

/**
 * Gets the search index, building it if necessary
 * @param {Object} data The data to index
 * @returns {Object} The search index
 */
export const getIndex = (data) => {
  if (!index) {
    index = generateIndex(data);
  }
  return index;
};

/**
 * Clears the search index
 */
export const clearIndex = () => {
  index = null;
  console.log("Search index cleared");
};

/**
 * Searches the index for matches
 * @param {string} query Search query
 * @param {Object} index Search index
 * @returns {Object} Search results
 */
export const searchIndex = (query, index) => {
  // Extract search terms from query
  const terms = extractSearchTerms(query);

  if (terms.length === 0) {
    return { projects: [], certificates: [], blogs: [] };
  }

  // Track matched indices
  const projectIndices = new Set();
  const certificateIndices = new Set();
  const blogIndices = new Set();

  // Look for exact matches first
  terms.forEach((term) => {
    if (index.terms.has(term)) {
      const matches = index.terms.get(term);
      matches.projects.forEach((i) => projectIndices.add(i));
      matches.certificates.forEach((i) => certificateIndices.add(i));
      matches.blogs.forEach((i) => blogIndices.add(i));
    }
  });

  // If we don't have enough results, try partial matches
  if (
    projectIndices.size === 0 &&
    certificateIndices.size === 0 &&
    blogIndices.size === 0
  ) {
    index.terms.forEach((matches, indexTerm) => {
      // Check if any search term is part of this index term
      const hasMatch = terms.some((term) => indexTerm.includes(term));
      if (hasMatch) {
        matches.projects.forEach((i) => projectIndices.add(i));
        matches.certificates.forEach((i) => certificateIndices.add(i));
        matches.blogs.forEach((i) => blogIndices.add(i));
      }
    });
  }

  // Convert indices to actual items
  return {
    projects: Array.from(projectIndices)
      .map((i) => index.projects[i])
      .filter(Boolean),
    certificates: Array.from(certificateIndices)
      .map((i) => index.certificates[i])
      .filter(Boolean),
    blogs: Array.from(blogIndices)
      .map((i) => index.blogs[i])
      .filter(Boolean),
  };
};
