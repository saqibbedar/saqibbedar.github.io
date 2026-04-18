import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaPencilAlt } from "react-icons/fa";
import MarkdownRenderer from "./MarkdownRenderer";

const formatDate = (value) => {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const PostLayout = ({
  title,
  description,
  markdown,
  category = "Doc",
  author,
  publishedAt,
  updatedAt,
  relatedArticles = [],
  relatedLinks = [],
  editUrl,
  topAction,
  backHref = "/blogs",
  backLabel = "Back to Posts",
  showHeader = true,
}) => {
  const cleanedMarkdown = useMemo(() => {
    if (!markdown) return "";

    const withoutTitle = markdown.replace(/^\uFEFF?\s*#\s+.+\n+/, "");

    if (showHeader) {
      return withoutTitle;
    }

    return withoutTitle.replace(/^\s*Last updated:\s*.+\n+\s*/i, "");
  }, [markdown, showHeader]);

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-4xl mx-auto">
        {showHeader && (
          <>
            <div className="text-sm font-medium">
              <Link
                to={backHref}
                className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors mb-6"
              >
                <FaArrowLeft className="w-4 h-4" />
                {backLabel}
              </Link>
            </div>
            <header className="mb-8 md:mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3 py-1 text-[0.8rem] font-medium text-fg-muted bg-bg-card border border-border rounded-full">
                  {category}
                </span>

                {updatedAt && (
                  <span className="flex items-center gap-1 px-3 py-1 text-[0.8rem] font-medium text-fg-muted bg-bg-card border border-border rounded-full">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    Updated {formatDate(updatedAt)}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-primary leading-tight tracking-tight mb-4 max-w-3xl">
                {title}
              </h1>

              {description && (
                <p className="text-base sm:text-lg text-fg-secondary leading-relaxed max-w-3xl mb-6">
                  {description}
                </p>
              )}

              <div className="flex items-center justify-between  border-b border-t pb-4 pt-4 border-border">
                <div className="flex items-center gap-3 min-w-0">
                  <Link
                    to={"/about"}
                    title="About Author"
                    className="flex items-center gap-3 min-w-0"
                  >
                    <img
                      src={author?.image || "/images/author.png"}
                      alt={author?.name || "Author"}
                      width="44"
                      height="44"
                      decoding="async"
                      className="w-11 h-11 rounded-full object-cover border border-border shadow-sm"
                    />
                  </Link>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg-primary truncate">
                      {author?.name || "Author"}
                    </p>
                    <p className="text-xs text-fg-muted truncate">
                      {author?.role || "Maintainer"}
                    </p>
                  </div>
                </div>

                {topAction?.href && topAction?.label && (
                  <a
                    href={topAction.href}
                    target={topAction.external ? "_blank" : undefined}
                    rel={topAction.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-bg-primary px-4 py-2 text-sm font-medium text-fg-primary transition-colors hover:border-border-light hover:bg-bg-card"
                  >
                    {topAction.label}
                  </a>
                )}
                {publishedAt && (
                  <span className="flex items-center gap-1 text-xs text-fg-muted sm:text-sm">
                    <FaCalendarAlt className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5" />
                    Published {formatDate(publishedAt)}
                  </span>
                )}
              </div>
            </header>
          </>
        )}

        <article className="mb-10">
          <MarkdownRenderer markdown={cleanedMarkdown} />
        </article>

        {relatedArticles.length > 0 && (
          <section className="border-t border-border pt-6 mb-8">
            <h2 className="text-sm uppercase tracking-wider font-semibold text-fg-muted mb-4">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((article) => {
                if (!article?.path || !article?.title) return null;

                return (
                  <Link
                    key={article.path}
                    to={article.path}
                    className="block rounded-2xl border border-border bg-bg-card p-4 sm:p-5 hover:border-border-light transition-colors"
                  >
                    <p className="text-base sm:text-lg font-semibold text-fg-primary leading-snug line-clamp-2">
                      {article.title}
                    </p>
                    {article.category && (
                      <p className="text-xs uppercase tracking-wider text-fg-muted mt-2">
                        {article.category}
                      </p>
                    )}
                    {article.summary && (
                      <p className="text-sm text-fg-secondary leading-relaxed mt-3 line-clamp-3">
                        {article.summary}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {(relatedLinks.length > 0 || editUrl) && (
          <footer className="border-t border-border pt-6">
            {relatedLinks.length > 0 && (
              <div className="mb-5">
                <h2 className="text-sm uppercase tracking-wider font-semibold text-fg-muted mb-3">
                  Related Links
                </h2>
                <div className="flex flex-wrap gap-2">
                  {relatedLinks.map((link, index) => {
                    if (!link?.path || !link?.title) return null;

                    const isExternal = /^https?:\/\//i.test(link.path);

                    if (isExternal) {
                      return (
                        <a
                          key={`${link.path}-${index}`}
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 border border-border rounded-full text-sm text-fg-secondary hover:text-fg-primary hover:border-border-light transition-colors"
                        >
                          {link.title}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={`${link.path}-${index}`}
                        to={link.path}
                        className="px-3 py-1.5 border border-border rounded-full text-sm text-fg-secondary hover:text-fg-primary hover:border-border-light transition-colors"
                      >
                        {link.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {editUrl && (
              <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors"
              >
                <FaPencilAlt className="w-3.5 h-3.5" />
                Edit On GitHub
              </a>
            )}
          </footer>
        )}
      </div>
    </section>
  );
};

export default PostLayout;
