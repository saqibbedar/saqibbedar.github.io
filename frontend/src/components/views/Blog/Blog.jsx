import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContent } from "@/context";
import { author } from "@/assets";
import { PageMeta } from "@/components/ui/PageMeta";
import { PostLayout } from "@/components/ui/docs";
import { getViewMeta } from "@/assets";

const REPO_BASE_URL = "https://github.com/saqibbedar/saqibbedar.github.io";

const getEditUrl = (docPath, allowGithubEdit) => {
  if (!allowGithubEdit || !docPath) return "";
  const safeDocPath = String(docPath).replace(/^\/+/, "");
  return `${REPO_BASE_URL}/blob/main/frontend/public/data/blogs/${safeDocPath}`;
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-fg-muted">Loading post...</div>
      </div>
    );
  }

  const meta = getViewMeta("blog", { post });

  return (
    <>
      <PageMeta {...meta} />
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
        relatedLinks={post.related || []}
        editUrl={getEditUrl(post.doc, post.allowGithubEdit)}
        backHref="/blogs"
        backLabel="Back to Blog Posts"
      />
    </>
  );
};

export default Blog;
