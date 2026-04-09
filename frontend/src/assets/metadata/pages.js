import author from "@/assets/common/author";

const SITE_URL = "https://saqibbedar.github.io";

const withDefaults = (meta = {}) => ({
  author: author.name,
  type: "website",
  ...meta,
});

export const pagesMetadata = new Map([
  [
    "home",
    withDefaults({
      title: `${author.name} | Home`,
      description: `${author.name}'s portfolio, projects, blog posts, and services.`,
      keywords: [
        author.name,
        "portfolio",
        "projects",
        "blog",
        "services",
        "react",
      ],
      url: `${SITE_URL}`,
    }),
  ],
  [
    "about",
    withDefaults({
      title: `${author.name} | About`,
      description: `Learn more about ${author.name}, background, journey, and technical experience.`,
      keywords: [author.name, "about", "developer", "experience", "journey"],
      url: `${SITE_URL}/about`,
    }),
  ],
  [
    "projects",
    withDefaults({
      title: `${author.name} | Projects`,
      description: `Explore featured projects, open-source work, and technical builds by ${author.name}.`,
      keywords: [
        author.name,
        "projects",
        "open source",
        "portfolio",
        "engineering",
      ],
      url: `${SITE_URL}/projects`,
    }),
  ],
  [
    "courses",
    withDefaults({
      title: `${author.name} | Courses`,
      description: `Courses, tutorials, and structured learning content curated by ${author.name}.`,
      keywords: [author.name, "courses", "tutorials", "learning", "education"],
      url: `${SITE_URL}/courses`,
    }),
  ],
  [
    "services",
    withDefaults({
      title: `${author.name} | Services`,
      description: `Professional services including development, consultation, collaboration, and teaching.`,
      keywords: [
        author.name,
        "services",
        "consultation",
        "development",
        "collaboration",
      ],
      url: `${SITE_URL}/services`,
    }),
  ],
  [
    "contact",
    withDefaults({
      title: `${author.name} | Contact`,
      description: `Get in touch with ${author.name} for opportunities, collaboration, and project inquiries.`,
      keywords: [author.name, "contact", "hire", "collaboration", "inquiry"],
      url: `${SITE_URL}/contact`,
    }),
  ],
  [
    "blogs",
    withDefaults({
      title: `${author.name} | Blogs`,
      description: `Notes, technical references, and documentation-style posts from ${author.name}.`,
      keywords: [
        author.name,
        "blog",
        "developer notes",
        "documentation",
        "seo",
      ],
      url: `${SITE_URL}/blogs`,
    }),
  ],
  [
    "sitemap",
    withDefaults({
      title: `${author.name} | Sitemap`,
      description: `Complete website navigation map for ${author.name}'s portfolio.`,
      keywords: [author.name, "sitemap", "navigation", "pages"],
      url: `${SITE_URL}/sitemap`,
    }),
  ],
  [
    "policy",
    withDefaults({
      title: `Privacy Policy | ${author.name}`,
      description:
        "How information is collected, used, and protected while using this website.",
      keywords: [
        "privacy policy",
        "data protection",
        author.name,
        "website policy",
        "legal",
      ],
      type: "article",
      url: `${SITE_URL}/privacy-policy`,
    }),
  ],
  [
    "terms",
    withDefaults({
      title: `Terms & Conditions | ${author.name}`,
      description:
        "The rules and usage guidelines for this website and published content.",
      keywords: [
        "terms and conditions",
        "legal",
        author.name,
        "website terms",
        "usage policy",
      ],
      type: "article",
      url: `${SITE_URL}/terms-conditions`,
    }),
  ],
  [
    "error404",
    withDefaults({
      title: `404 - Page Not Found | ${author.name}`,
      description: "The requested page could not be found.",
      keywords: ["404", "not found", author.name],
      url: `${SITE_URL}/404`,
    }),
  ],
  [
    "search",
    ({ query = "" } = {}) =>
      withDefaults({
        title: query
          ? `${author.name} | Search Results for '${query}'`
          : `${author.name} | Search`,
        description: query
          ? `Search results for '${query}' across projects, courses, services, and docs.`
          : "Search across projects, courses, services, and docs.",
        keywords: [
          author.name,
          "search",
          query,
          "projects",
          "courses",
          "services",
          "docs",
        ],
        url: query
          ? `${SITE_URL}/search/${encodeURIComponent(query)}`
          : `${SITE_URL}/search`,
      }),
  ],
]);

export const getPageMeta = (key, params) => {
  const entry = pagesMetadata.get(key);

  if (typeof entry === "function") {
    return entry(params);
  }

  if (entry) {
    return entry;
  }

  return withDefaults({
    title: `${author.name}`,
    description: author.description,
    keywords: [author.name, "portfolio"],
    url: SITE_URL,
  });
};
