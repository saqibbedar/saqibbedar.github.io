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
    projects: data.projects || [],
    certificates: data.certificates || [],
    courses: data.courses || [],
    services: data.services || [],
    education: data.education || [],
    bootcamps: data.bootcamps || [],
    docs: [
      {
        id: "policy",
        title: "Privacy Policy",
        content: data.policy || "",
        path: "/privacy-policy",
      },
      {
        id: "terms",
        title: "Terms & Conditions",
        content: data.terms || "",
        path: "/terms-conditions",
      },
      {
        id: "sitemap",
        title: "Sitemap",
        content: JSON.stringify(data.sitemap || {}),
        path: "/sitemap",
      },
    ],
  };

  const ensureTerm = (term) => {
    if (!index.terms.has(term)) {
      index.terms.set(term, {
        projects: [],
        certificates: [],
        courses: [],
        services: [],
        education: [],
        bootcamps: [],
        docs: [],
      });
    }
  };

  const addTerms = (content, bucketName, rowIndex) => {
    const terms = extractSearchTerms(content);
    terms.forEach((term) => {
      ensureTerm(term);
      if (!index.terms.get(term)[bucketName].includes(rowIndex)) {
        index.terms.get(term)[bucketName].push(rowIndex);
      }
    });
  };

  // 1. Index projects
  if (Array.isArray(data.projects)) {
    data.projects.forEach((project, i) => {
      if (!project) return;

      // 1.1 Extract searchable content
      const tags = Array.isArray(project.tags)
        ? project.tags.join(" ")
        : project.tags;
      const languages = Array.isArray(project?.metadata?.languages)
        ? project.metadata.languages.map((language) => language?.name).join(" ")
        : "";
      const contributors = Array.isArray(project.contributors)
        ? project.contributors
            .map((contributor) =>
              [contributor?.name, contributor?.login, contributor?.role]
                .filter(Boolean)
                .join(" ")
            )
            .join(" ")
        : "";
      const content = [
        project.title,
        project.shortDescription,
        project.fullDescription,
        project.category,
        tags,
        project.slug,
        project.owner?.login,
        project.owner?.name,
        contributors,
        languages,
        project.metadata?.language,
        project.metadata?.license?.name,
        Array.isArray(project?.metadata?.topics)
          ? project.metadata.topics.join(" ")
          : project.metadata?.topics,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      // 1.2 Get meaningful search terms
      addTerms(content, "projects", i);
    });
  }

  // 2. Index Certificates
  if (Array.isArray(data.certificates)) {
    data.certificates.forEach((cer, i) => {
      if (!cer) return;

      // 3.1 Extract searchable content
      const content = [cer.title, cer.description, cer.providerName, cer.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      // 3.2 Get meaningful search terms
      addTerms(content, "certificates", i);
    });
  }

  if (Array.isArray(data.courses)) {
    data.courses.forEach((course, i) => {
      if (!course) return;
      const content = [
        course.title,
        course.shortDescription,
        course.fullDescription,
        (course.tags || []).join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      addTerms(content, "courses", i);
    });
  }

  if (Array.isArray(data.services)) {
    data.services.forEach((service, i) => {
      if (!service) return;
      const content = [
        service.title,
        service.shortDescription,
        service.fullDescription,
        service.category,
        (service.features || []).join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      addTerms(content, "services", i);
    });
  }

  if (Array.isArray(data.education)) {
    data.education.forEach((edu, i) => {
      if (!edu) return;
      const content = [edu.degreeType, edu.organization, edu.description]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      addTerms(content, "education", i);
    });
  }

  if (Array.isArray(data.bootcamps)) {
    data.bootcamps.forEach((event, i) => {
      if (!event) return;
      const content = [
        event.title,
        event.subtitle,
        event.description,
        (event.topics || []).join(" "),
        (event.tags || []).join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      addTerms(content, "bootcamps", i);
    });
  }

  index.docs.forEach((doc, i) => {
    addTerms(`${doc.title} ${doc.content}`, "docs", i);
  });

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
  const terms = extractSearchTerms(query);

  if (terms.length === 0) {
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

  const projectIndices = new Set();
  const certificateIndices = new Set();
  const courseIndices = new Set();
  const serviceIndices = new Set();
  const educationIndices = new Set();
  const bootcampIndices = new Set();
  const docIndices = new Set();

  const collectMatches = (matches) => {
    matches.projects.forEach((i) => projectIndices.add(i));
    matches.certificates.forEach((i) => certificateIndices.add(i));
    matches.courses.forEach((i) => courseIndices.add(i));
    matches.services.forEach((i) => serviceIndices.add(i));
    matches.education.forEach((i) => educationIndices.add(i));
    matches.bootcamps.forEach((i) => bootcampIndices.add(i));
    matches.docs.forEach((i) => docIndices.add(i));
  };

  terms.forEach((term) => {
    if (index.terms.has(term)) {
      collectMatches(index.terms.get(term));
    }
  });

  const hasNoResults =
    projectIndices.size === 0 &&
    certificateIndices.size === 0 &&
    courseIndices.size === 0 &&
    serviceIndices.size === 0 &&
    educationIndices.size === 0 &&
    bootcampIndices.size === 0 &&
    docIndices.size === 0;

  if (hasNoResults) {
    index.terms.forEach((matches, indexTerm) => {
      if (terms.some((term) => indexTerm.includes(term))) {
        collectMatches(matches);
      }
    });
  }

  return {
    projects: Array.from(projectIndices)
      .map((i) => index.projects[i])
      .filter(Boolean),
    certificates: Array.from(certificateIndices)
      .map((i) => index.certificates[i])
      .filter(Boolean),
    courses: Array.from(courseIndices)
      .map((i) => index.courses[i])
      .filter(Boolean),
    services: Array.from(serviceIndices)
      .map((i) => index.services[i])
      .filter(Boolean),
    education: Array.from(educationIndices)
      .map((i) => index.education[i])
      .filter(Boolean),
    bootcamps: Array.from(bootcampIndices)
      .map((i) => index.bootcamps[i])
      .filter(Boolean),
    docs: Array.from(docIndices)
      .map((i) => index.docs[i])
      .filter(Boolean),
  };
};
