import { createContext, useEffect, useState } from "react";
import { blogPosts } from "@/assets/assets";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setBlogData(blogPosts);
  }, []);

  const allBlogs = (category) => {
    const selectedCategory = category.toLowerCase();

    return blogData.filter((blog) => {
      // return all blogs
      if (selectedCategory === "all") return true;
      // return blogs based on category
      const blogCategory = blog.category.toLowerCase();
      return blogCategory === selectedCategory;
    });
  };

  const featureBlogs = () => {
    return blogData.filter((blog) => blog.category.toLowerCase() === "feature"); // return feature blogs
  };

  const blogs = { allBlogs, featureBlogs };

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

export default BlogProvider;
