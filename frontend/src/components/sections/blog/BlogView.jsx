import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryTab } from "@/components/ui";
import { useContent } from "@/context";

const formatDate = (value) => {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="group block w-full rounded-2xl border border-border bg-bg-card p-6 sm:p-7 hover:border-border-light transition-colors"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 text-[0.8rem] font-medium text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full">
            {post.category}
          </span>
          {post.featured && (
            <span className="px-2.5 py-0.5 text-[0.8rem] font-medium text-fg-primary/70 bg-btn-primary-bg/40 border border-border-light rounded-full">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-fg-primary group-hover:text-fg-secondary transition-colors leading-tight">
          {post.title}
        </h2>

        <p className="text-fg-secondary text-sm sm:text-base leading-relaxed max-w-3xl line-clamp-2">
          {post.summary}
        </p>

        <div className="flex items-center justify-between text-xs sm:text-sm text-fg-muted border-t border-border pt-4">
          <span>Published {formatDate(post.publishedAt)}</span>
          <span>Last updated {formatDate(post.updatedAt)}</span>
        </div>
      </div>
    </Link>
  );
};

const BlogView = () => {
  const { blogs } = useContent();
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("latest");

  const categories = useMemo(
    () =>
      Array.from(new Set(blogs.map((post) => post.category).filter(Boolean))),
    [blogs]
  );

  const filterButtons = ["All", "Featured", ...categories];

  const filteredBlogs = useMemo(() => {
    const baseList = blogs.filter((post) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Featured") return Boolean(post.featured);
      return post.category === activeFilter;
    });

    return [...baseList].sort((a, b) => {
      const aDate = new Date(a.updatedAt || a.publishedAt || 0).getTime();
      const bDate = new Date(b.updatedAt || b.publishedAt || 0).getTime();
      return sortOrder === "latest" ? bDate - aDate : aDate - bDate;
    });
  }, [blogs, activeFilter, sortOrder]);

  const hasResults = filteredBlogs.length > 0;

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-fg-muted mb-3">
            Insights
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-primary mb-3">
            Blogs
          </h1>
          <p className="text-fg-secondary max-w-2xl leading-relaxed">
            Notes, technical references, and platform documentation published as
            markdown docs.
          </p>
        </header>

        <div className="flex items-center gap-2 py-4 mb-4 overflow-x-auto hide-scrollbar sticky top-[55px] md:top-[76px] bg-bg-primary z-40 shadow-[shadow:#000000_0px_-20px_20px_4px]">
          {filterButtons.map((filter) => (
            <CategoryTab
              key={filter}
              category={filter}
              isActive={activeFilter === filter}
              onClick={setActiveFilter}
              scrollOffset={202}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2">
            {["latest", "oldest"].map((sortOption) => (
              <button
                key={sortOption}
                type="button"
                onClick={() => setSortOrder(sortOption)}
                className={`h-10 px-4 text-xs sm:text-sm font-medium rounded-full capitalize border transition-colors ${
                  sortOrder === sortOption
                    ? "bg-bg-card border border-border-light text-fg-primary"
                    : "text-fg-muted border-border hover:border-border-light hover:text-fg-primary"
                }`}
              >
                {sortOption}
              </button>
            ))}
          </div>
        </div>

        {hasResults ? (
          <div className="grid grid-cols-1 gap-5">
            {filteredBlogs.map((post) => (
              <BlogCard key={post._id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border p-8 text-fg-secondary bg-bg-card">
            No blog posts match the selected filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogView;
