import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogs } from "../../context/BlogContext";

const BlogDetail = () => {
  const { blogs } = useBlogs();
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.getBlogById(parseInt(id));

  useEffect(() => {
    if (!blog) {
      navigate("/404"); //redirect to error page...
    }
  }, [blog, navigate]);

  if (!blog) return null; // Prevent rendering before redirect

  return (
    <>
      <h1>{blog.title}</h1>
      <img src={blog.image} className="aspect-video w-full rounded-lg" />
      <p className="text-[var(--light-theme-primary-foreground)]">
        {blog.description}
      </p>
    </>
  );
};

export default BlogDetail;
