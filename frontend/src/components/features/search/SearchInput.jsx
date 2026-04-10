import { useState, useRef, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { IoSearch, IoArrowUp, IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { CategoryTab } from "@/components/ui";
import { useContent } from "@/context";

// Result Card Component - Clean, minimal design
const ResultCard = ({ item, type }) => {
  const isClickable = type === "project" || type === "course" || type === "doc";
  const linkPath =
    type === "project"
      ? `/projects/${item.slug || item._id}`
      : type === "course"
        ? `/courses/${item._id || item.slug}`
        : type === "doc"
          ? item.path
          : null;

  const externalUrl =
    type === "certificate" ? item.credentialUrl : item.platformUrl || null;

  const CardContent = () => (
    <div className="flex items-start gap-3">
      {/* Thumbnail */}
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt=""
          className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
        />
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-fg-primary group-hover:text-fg-secondary transition-colors line-clamp-1">
          {item.title || item.name || item.degreeType}
        </h3>
        <p className="text-sm text-fg-muted mt-0.5 line-clamp-2">
          {item.shortDescription || item.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-2 mt-2 text-xs text-fg-muted">
          <span className="capitalize">{type}</span>
          {item.category && (
            <>
              <span>·</span>
              <span>{item.category}</span>
            </>
          )}
          {item.organization && (
            <>
              <span>·</span>
              <span>{item.organization}</span>
            </>
          )}
          {item.providerName && (
            <>
              <span>·</span>
              <span>{item.providerName}</span>
            </>
          )}
        </div>
      </div>

      {/* Arrow indicator */}
      {(isClickable || externalUrl) && (
        <FaArrowRight className="w-3 h-3 text-fg-muted group-hover:text-fg-secondary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
      )}
    </div>
  );

  if (isClickable) {
    return (
      <Link
        to={linkPath}
        className="group block py-4 px-4 -mx-4 hover:bg-bg-card rounded-xl transition-colors"
      >
        <CardContent />
      </Link>
    );
  }

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-4 px-4 -mx-4 hover:bg-bg-card rounded-xl transition-colors"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="py-4 px-4 -mx-4">
      <CardContent />
    </div>
  );
};

// Result Section Component - Minimal header
const ResultSection = ({ title, items, type }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 px-4 -mx-4">
        <h2 className="text-sm font-medium text-fg-muted uppercase tracking-wider">
          {title}
        </h2>
        <span className="text-xs text-fg-muted">{items.length}</span>
      </div>
      <div className="divide-y divide-border">
        {items.map((item, index) => (
          <ResultCard key={item._id || index} item={item} type={type} />
        ))}
      </div>
    </div>
  );
};

const SearchInput = ({ initialQuery = "" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFocused, setIsFocused] = useState(false);
  const {
    projects: projectData,
    courses: courseData,
    services: serviceData,
    certificates: certificateData,
    education: educationData,
    bootcampsAndEvents: bootcampData,
    policyDoc,
    termsDoc,
    sitemap,
    blogs,
  } = useContent();

  // Initialize query from URL
  useEffect(() => {
    const urlQuery = searchParams.get("q") || initialQuery;
    setQuery(urlQuery);
  }, [searchParams, initialQuery]);

  // Simple search function - searches across all content
  const searchResults = useMemo(() => {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return null;

    const searchInText = (text) =>
      text && text.toLowerCase().includes(searchTerm);
    const searchInArray = (arr) =>
      arr &&
      arr.some((item) =>
        searchInText(typeof item === "string" ? item : item.name)
      );
    const searchInProjectContributors = (contributors) =>
      Array.isArray(contributors) &&
      contributors.some(
        (contributor) =>
          searchInText(contributor?.name) ||
          searchInText(contributor?.login) ||
          searchInText(contributor?.role)
      );

    // Search Projects
    const projectResults = projectData.filter(
      (p) =>
        searchInText(p.title) ||
        searchInText(p.shortDescription) ||
        searchInText(p.fullDescription) ||
        searchInArray(p.tags) ||
        searchInText(p.category) ||
        searchInText(p.slug) ||
        searchInText(p.owner?.login) ||
        searchInText(p.owner?.name) ||
        searchInProjectContributors(p.contributors) ||
        searchInArray(p.metadata?.languages) ||
        searchInText(p.metadata?.language) ||
        searchInText(p.metadata?.license?.name) ||
        searchInArray(p.metadata?.topics)
    );

    // Search Courses
    const courseResults = courseData.filter(
      (c) =>
        searchInText(c.title) ||
        searchInText(c.shortDescription) ||
        searchInText(c.fullDescription) ||
        searchInArray(c.tags)
    );

    // Search Services
    const serviceResults = serviceData.filter(
      (s) =>
        searchInText(s.title) ||
        searchInText(s.shortDescription) ||
        searchInText(s.fullDescription) ||
        searchInText(s.category)
    );

    // Search Certificates
    const certificateResults = certificateData.filter(
      (c) =>
        searchInText(c.title) ||
        searchInText(c.description) ||
        searchInText(c.providerName) ||
        searchInText(c.tags)
    );

    // Search Education
    const educationResults = educationData.filter(
      (e) =>
        searchInText(e.degreeType) ||
        searchInText(e.organization) ||
        searchInText(e.description)
    );

    // Search Bootcamps & Events
    const bootcampResults = bootcampData.filter(
      (b) =>
        searchInText(b.title) ||
        searchInText(b.subtitle) ||
        searchInText(b.description) ||
        searchInArray(b.topics) ||
        searchInArray(b.tags)
    );

    const docs = [
      {
        _id: "policy",
        title: "Privacy Policy",
        path: "/privacy-policy",
        description: "Privacy and data handling details",
        category: "Legal",
        content: policyDoc,
      },
      {
        _id: "terms",
        title: "Terms & Conditions",
        path: "/terms-conditions",
        description: "Website usage terms",
        category: "Legal",
        content: termsDoc,
      },
      {
        _id: "sitemap",
        title: "Sitemap",
        path: "/sitemap",
        description: "Complete site navigation",
        category: "Utility",
        content: JSON.stringify(sitemap || {}),
      },
      ...blogs.map((post) => ({
        _id: post._id || post.slug,
        title: post.title,
        path: `/blogs/${post.slug}`,
        description: post.summary,
        category: post.category || "Blog",
        content: post.markdown || "",
      })),
    ].filter(
      (doc) =>
        searchInText(doc.title) ||
        searchInText(doc.description) ||
        searchInText(doc.content)
    );

    return {
      projects: projectResults,
      courses: courseResults,
      services: serviceResults,
      certificates: certificateResults,
      education: educationResults,
      bootcamps: bootcampResults,
      docs,
    };
  }, [
    query,
    projectData,
    courseData,
    serviceData,
    certificateData,
    educationData,
    bootcampData,
    policyDoc,
    termsDoc,
    sitemap,
    blogs,
  ]);

  // Calculate counts for category tabs
  const categoryCounts = useMemo(() => {
    if (!searchResults) return {};
    return {
      All: Object.values(searchResults).reduce((a, b) => a + b.length, 0),
      Projects: searchResults.projects.length,
      Courses: searchResults.courses.length,
      Services: searchResults.services.length,
      Certificates: searchResults.certificates.length,
      Education: searchResults.education.length,
      Events: searchResults.bootcamps.length,
      Docs: searchResults.docs.length,
    };
  }, [searchResults]);

  const hasResults = searchResults && categoryCounts.All > 0;

  // Handle Search Submission
  const handleSearch = (e) => {
    e?.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ q: query });
  };

  // Clear search
  const handleClear = () => {
    setQuery("");
    setSearchParams({});
    inputRef.current?.focus();
  };

  // Filter results based on active category
  const getFilteredResults = () => {
    if (!searchResults) return null;
    if (activeCategory === "All") return searchResults;

    const categoryMap = {
      Projects: { projects: searchResults.projects },
      Courses: { courses: searchResults.courses },
      Services: { services: searchResults.services },
      Certificates: { certificates: searchResults.certificates },
      Education: { education: searchResults.education },
      Events: { bootcamps: searchResults.bootcamps },
      Docs: { docs: searchResults.docs },
    };

    return categoryMap[activeCategory] || searchResults;
  };

  const filteredResults = getFilteredResults();

  const categories = [
    { name: "All" },
    { name: "Projects" },
    { name: "Courses" },
    { name: "Services" },
    { name: "Certificates" },
    { name: "Education" },
    { name: "Events" },
    { name: "Docs" },
  ];

  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-fg-primary mb-2">
            Search
          </h1>
          <p className="text-fg-secondary">
            Find projects, courses, services, and more across the entire
            website.
          </p>
        </div>

        {/* Category Tabs */}
        {query.trim() && (
          <div className="flex items-center gap-2 py-6 overflow-x-auto hide-scrollbar sticky top-[55px] md:top-[72px] bg-bg-primary z-40 shadow-[shadow:#000000_0px_-20px_20px_4px]">
            {categories.map((cat) => (
              <CategoryTab
                key={cat.name}
                category={cat.name}
                isActive={activeCategory === cat.name}
                onClick={setActiveCategory}
                count={categoryCounts[cat.name] || 0}
                scrollOffset={262}
              />
            ))}
          </div>
        )}

        {/* Initial State */}
        {!query.trim() && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-2xl bg-bg-card border border-border mx-auto mb-6 flex items-center justify-center">
              <IoSearch className="w-10 h-10 text-fg-muted" />
            </div>
            <h2 className="text-xl font-semibold text-fg-primary mb-2">
              Start Your Search
            </h2>
            <p className="text-fg-secondary max-w-md mx-auto">
              Type in the search box below to find projects, blogs, courses,
              services, certificates, and more.
            </p>
          </div>
        )}

        {/* No Results */}
        {query.trim() && !hasResults && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-2xl bg-bg-card border border-border mx-auto mb-6 flex items-center justify-center">
              <IoSearch className="w-10 h-10 text-fg-muted" />
            </div>
            <h2 className="text-xl font-semibold text-fg-primary mb-2">
              No results found
            </h2>
            <p className="text-fg-secondary max-w-md mx-auto">
              No results found for "{query}". Try a different search term or
              browse categories.
            </p>
          </div>
        )}

        {/* Results */}
        {hasResults && filteredResults && (
          <div>
            {/* Results Count */}
            <p className="text-sm text-fg-muted mb-6">
              Found{" "}
              <span className="text-fg-primary font-medium">
                {categoryCounts.All}
              </span>{" "}
              {categoryCounts.All === 1 ? "result" : "results"} for "
              <span className="text-fg-primary">{query}</span>"
            </p>

            {/* Result Sections */}
            {(activeCategory === "All" || activeCategory === "Projects") &&
              filteredResults.projects && (
                <ResultSection
                  title="Projects"
                  items={filteredResults.projects}
                  type="project"
                />
              )}

            {(activeCategory === "All" || activeCategory === "Courses") &&
              filteredResults.courses && (
                <ResultSection
                  title="Courses"
                  items={filteredResults.courses}
                  type="course"
                />
              )}

            {(activeCategory === "All" || activeCategory === "Services") &&
              filteredResults.services && (
                <ResultSection
                  title="Services"
                  items={filteredResults.services}
                  type="service"
                />
              )}

            {(activeCategory === "All" || activeCategory === "Certificates") &&
              filteredResults.certificates && (
                <ResultSection
                  title="Certificates"
                  items={filteredResults.certificates}
                  type="certificate"
                />
              )}

            {(activeCategory === "All" || activeCategory === "Education") &&
              filteredResults.education && (
                <ResultSection
                  title="Education"
                  items={filteredResults.education}
                  type="education"
                />
              )}

            {(activeCategory === "All" || activeCategory === "Events") &&
              filteredResults.bootcamps && (
                <ResultSection
                  title="Bootcamps & Events"
                  items={filteredResults.bootcamps}
                  type="bootcamp"
                />
              )}

            {(activeCategory === "All" || activeCategory === "Docs") &&
              filteredResults.docs && (
                <ResultSection
                  title="Docs"
                  items={filteredResults.docs}
                  type="doc"
                />
              )}
          </div>
        )}
      </div>

      {/* Bottom Background Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-40" />

      {/* Search Input - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6">
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div
            className={`flex items-center gap-3 bg-bg-card border rounded-full px-4 py-3 shadow-xl shadow-black/10 transition-all duration-300 ${
              isFocused ? "border-border-light" : "border-border"
            }`}
          >
            {/* Search Icon with animation */}
            <IoSearch
              className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                isFocused ? "text-fg-primary scale-110" : "text-fg-muted"
              }`}
            />

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search projects, courses, services..."
              className="flex-1 bg-transparent outline-none text-fg-primary placeholder:text-fg-muted"
            />

            {/* Clear button */}
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 rounded-full hover:bg-bg-primary text-fg-muted hover:text-fg-primary transition-colors"
              >
                <IoClose className="w-4 h-4" />
              </button>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={!query.trim()}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                query.trim()
                  ? "bg-fg-primary text-bg-primary hover:opacity-90 scale-100"
                  : "bg-bg-primary text-fg-muted scale-95 cursor-not-allowed"
              }`}
            >
              <IoArrowUp
                className={`w-4 h-4 transition-transform duration-300 ${
                  query.trim() ? "rotate-0" : "rotate-45"
                }`}
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchInput;
