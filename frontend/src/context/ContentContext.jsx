import { useEffect, useMemo, useState } from "react";
import {
  fetchProjectsService,
  fetchCertificatesService,
  fetchCoursesService,
  fetchServicesService,
  fetchEducationService,
  fetchBootcampsEventsService,
  fetchTestimonialsService,
  fetchSitemapService,
  fetchPolicyDocService,
  fetchTermsDocService,
  fetchBlogsService,
  fetchBlogDocService,
  fetchFaqsService,
} from "@/services/fetch";
import { ContentContext } from "./contentContextState";

export function ContentProvider({ children }) {
  const [content, setContent] = useState({
    projects: [],
    certificates: [],
    courses: [],
    services: [],
    education: [],
    bootcampsAndEvents: [],
    testimonials: [],
    sitemap: { sitemapData: [], externalLinks: [], dynamicRoutes: [] },
    policyDoc: "",
    termsDoc: "",
    blogs: [],
    faqs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const unwrap = (result, fallback) =>
      result.status === "fulfilled" && result.value !== undefined
        ? result.value
        : fallback;

    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const [
          projects,
          certificates,
          courses,
          services,
          education,
          bootcampsAndEvents,
          testimonials,
          sitemap,
          policyDoc,
          termsDoc,
          blogs,
          faqs,
        ] = await Promise.allSettled([
          fetchProjectsService(),
          fetchCertificatesService(),
          fetchCoursesService(),
          fetchServicesService(),
          fetchEducationService(),
          fetchBootcampsEventsService(),
          fetchTestimonialsService(),
          fetchSitemapService(),
          fetchPolicyDocService(),
          fetchTermsDocService(),
          fetchBlogsService(),
          fetchFaqsService(),
        ]);

        const rawBlogs = Array.isArray(unwrap(blogs, []))
          ? unwrap(blogs, [])
          : [];
        const blogDocs = await Promise.allSettled(
          rawBlogs.map((blog) => fetchBlogDocService(blog.doc))
        );

        const hydratedBlogs = rawBlogs.map((blog, index) => ({
          ...blog,
          markdown:
            blogDocs[index]?.status === "fulfilled"
              ? blogDocs[index].value
              : "",
        }));

        if (!isMounted) return;

        setContent({
          projects: Array.isArray(unwrap(projects, []))
            ? unwrap(projects, [])
            : [],
          certificates: Array.isArray(unwrap(certificates, []))
            ? unwrap(certificates, [])
            : [],
          courses: Array.isArray(unwrap(courses, []))
            ? unwrap(courses, [])
            : [],
          services: Array.isArray(unwrap(services, []))
            ? unwrap(services, [])
            : [],
          education: Array.isArray(unwrap(education, []))
            ? unwrap(education, [])
            : [],
          bootcampsAndEvents: Array.isArray(unwrap(bootcampsAndEvents, []))
            ? unwrap(bootcampsAndEvents, [])
            : [],
          testimonials: Array.isArray(unwrap(testimonials, []))
            ? unwrap(testimonials, [])
            : [],
          sitemap: unwrap(sitemap, null) || {
            sitemapData: [],
            externalLinks: [],
            dynamicRoutes: [],
          },
          policyDoc: unwrap(policyDoc, "") || "",
          termsDoc: unwrap(termsDoc, "") || "",
          blogs: hydratedBlogs,
          faqs: Array.isArray(unwrap(faqs, [])) ? unwrap(faqs, []) : [],
        });

        const failedSources = [
          projects,
          certificates,
          courses,
          services,
          education,
          bootcampsAndEvents,
          testimonials,
          sitemap,
          policyDoc,
          termsDoc,
          blogs,
          faqs,
        ].filter((result) => result.status === "rejected");

        const failedBlogDocs = blogDocs.filter(
          (result) => result.status === "rejected"
        );

        if (failedSources.length > 0 || failedBlogDocs.length > 0) {
          setError(
            `Some content sources failed to load (${failedSources.length + failedBlogDocs.length}). Partial content is shown.`
          );
        }
      } catch (loadError) {
        if (!isMounted) return;
        setError(loadError?.message || "Failed to load content");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(
    () => ({
      ...content,
      loading,
      error,
    }),
    [content, loading, error]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
