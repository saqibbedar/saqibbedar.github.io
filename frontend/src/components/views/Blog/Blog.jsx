import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContent } from "@/context";
import { author } from "@/assets";
import { PageMeta } from "@/components/ui/PageMeta";
import { PostLayout } from "@/components/ui/docs";
import { getViewMeta } from "@/assets";
import { BlogDetailSkeleton } from "@/components/ui/skeleton";

const REPO_BASE_URL = "https://github.com/saqibbedar/saqibbedar.github.io";
const SITE_URL = "https://saqibbedar.github.io";

const normalizeBlogDocPath = (docPath = "") =>
  String(docPath || "")
    .trim()
    .replace(/^\/+/, "")
    .replace(/^data\/blogs\//i, "");

const getEditUrl = (docPath, allowGithubEdit) => {
  if (!allowGithubEdit || !docPath) return "";
  const safeDocPath = normalizeBlogDocPath(docPath);
  return `${REPO_BASE_URL}/blob/main/frontend/public/data/blogs/${safeDocPath}`;
};

const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .trim();

const getPostDate = (post) => {
  const value = post?.publishedAt || post?.updatedAt || null;
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date.getTime() : 0;
};

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { blogs, loading } = useContent();

  const post = blogs.find((item) => item.slug === slug);

  useEffect(() => {
    if (!loading && !post) {
      navigate("/404");
    }
  }, [loading, post, navigate]);

  if (loading || !post) {
    return <BlogDetailSkeleton />;
  }

  const meta = getViewMeta("blog", { post });
  const postUrl = `${SITE_URL}/blogs/${post?.slug || ""}`;
  const publishedAt = post?.publishedAt || post?.updatedAt;
  const updatedAt = post?.updatedAt || post?.publishedAt;
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    description:
      post?.summary ||
      "Practical developer notes on SEO, web engineering, and portfolio building.",
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post?.category || "Blog",
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: author.name,
      url: SITE_URL,
      image: `${SITE_URL}${author.image}`,
    },
    publisher: {
      "@type": "Person",
      name: author.name,
      url: SITE_URL,
    },
    image: `${SITE_URL}/images/sitebanner.avif`,
    keywords: Array.isArray(meta?.keywords) ? meta.keywords : undefined,
  };

  const relatedArticles = blogs
    .filter((article) => article.slug !== post.slug)
    .filter(
      (article) => normalize(article.category) === normalize(post.category)
    )
    .sort((left, right) => getPostDate(right) - getPostDate(left))
    .slice(0, 2)
    .map((article) => ({
      title: article.title,
      summary: article.summary,
      category: article.category,
      path: `/blogs/${article.slug}`,
    }));

  const fallbackArticles =
    relatedArticles.length > 0
      ? relatedArticles
      : blogs
          .filter((article) => article.slug !== post.slug)
          .sort((left, right) => getPostDate(right) - getPostDate(left))
          .slice(0, 2)
          .map((article) => ({
            title: article.title,
            summary: article.summary,
            category: article.category,
            path: `/blogs/${article.slug}`,
          }));

  return (
    <>
      <PageMeta {...meta} jsonLd={blogJsonLd} />
      <PostLayout
        title={post.title}
        description={post.summary}
        category={post.category || "Blog"}
        markdown={post.markdown || ""}
        author={{
          image: author.image,
          name: author.name,
          role: "Author",
        }}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        relatedArticles={fallbackArticles}
        editUrl={getEditUrl(post.doc, post.allowGithubEdit)}
        backHref="/blogs"
        backLabel="Back to Blog Posts"
      />
    </>
  );
};

export default Blog;
