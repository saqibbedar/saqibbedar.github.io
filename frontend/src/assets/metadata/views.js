import author from "@/assets/common/author";

const SITE_URL = "https://saqibbedar.github.io";

const withDefaults = (meta = {}) => ({
  author: author.name,
  type: "article",
  ...meta,
});

export const viewsMetadata = new Map([
  [
    "blog",
    ({ post } = {}) =>
      withDefaults({
        title: `${post?.title || "Blog"} | ${author.name}`,
        description:
          post?.summary ||
          `Technical notes and documentation by ${author.name}.`,
        keywords: [
          post?.title,
          post?.category,
          author.name,
          "blog",
          "markdown",
          "documentation",
        ].filter(Boolean),
        url: `${SITE_URL}/blogs/${post?.slug || ""}`,
      }),
  ],
  [
    "project",
    ({ project } = {}) =>
      withDefaults({
        title: `${project?.title || "Project"} | ${author.name}`,
        description:
          project?.shortDescription ||
          project?.fullDescription ||
          `Project details from ${author.name}'s portfolio.`,
        keywords: [
          project?.title,
          project?.category,
          ...(Array.isArray(project?.tags) ? project.tags : []),
          ...(Array.isArray(project?.metadata?.topics)
            ? project.metadata.topics
            : []),
          author.name,
          "project",
        ].filter(Boolean),
        url: `${SITE_URL}/projects/${project?.slug || project?._id || ""}`,
      }),
  ],
  [
    "course",
    ({ course } = {}) =>
      withDefaults({
        title: `${course?.title || "Course"} | ${author.name}`,
        description:
          course?.shortDescription ||
          course?.fullDescription ||
          `Course details and learning resources by ${author.name}.`,
        keywords: [
          course?.title,
          course?.metadata?.level,
          ...(Array.isArray(course?.tags) ? course.tags : []),
          author.name,
          "course",
          "learning",
        ].filter(Boolean),
        url: `${SITE_URL}/courses/${course?.slug || course?._id || ""}`,
      }),
  ],
]);

export const getViewMeta = (key, params) => {
  const entry = viewsMetadata.get(key);

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
