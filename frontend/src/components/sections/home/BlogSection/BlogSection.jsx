import { Link } from "react-router-dom";
import { author } from "@/assets";
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

const HomeBlogCard = ({ post }) => {
  const lastPublished = post?.publishedAt || post?.updatedAt;

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

        <h3 className="text-xl sm:text-2xl font-semibold text-fg-primary group-hover:text-fg-secondary transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-fg-secondary text-sm sm:text-base leading-relaxed line-clamp-3">
          {post.summary}
        </p>

        <div className="flex items-center justify-between text-xs sm:text-sm text-fg-muted border-t border-border pt-4">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={author.image}
              alt={author.name}
              className="w-6 h-6 rounded-full object-cover border border-border"
            />
            <span className="truncate">{author.name}</span>
          </div>
          <span className="shrink-0">
            Published {formatDate(lastPublished)}
          </span>
        </div>
      </div>
    </Link>
  );
};

const BlogSection = () => {
  const { blogs } = useContent();

  const featured = blogs.filter((post) => post.featured).slice(0, 3);

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Writing
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Featured Posts
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featured.map((post) => (
            <HomeBlogCard key={post._id || post.slug} post={post} />
          ))}
        </div>

        {featured.length === 0 && (
          <div className="rounded-2xl border border-border p-6 text-fg-secondary bg-bg-card">
            No featured posts available yet.
          </div>
        )}

        <Link
          to="/blogs"
          className="inline-block mt-6 px-6 py-3 text-sm sm:text-base font-semibold text-fg-primary bg-btn-primary-bg hover:bg-btn-primary-hover rounded-full transition-colors"
        >
          View Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
