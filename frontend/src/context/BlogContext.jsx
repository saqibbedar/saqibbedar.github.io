import { blogPosts } from "@/assets/assets";
import { createContext, useState, use } from "react";

// 1. Create the context
export const BlogContext = createContext(null);

// 2. Create custom hook for consuming context
export const useBlogs = () => {
  const context = use(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within BlogProvider");
  }
  return context;
}

// 3. Create provider
export function BlogProvider({ children }) {

  // 4. Preserve the data into state directly as it's static for now
  const [blogData, setBlogData] = useState(blogPosts);

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

  const getBlogById = (_id) => (blogData.find(blog => blog._id === _id));

  const featureBlogs = () => {
    return blogData.filter((blog) => blog.category.toLowerCase() === "feature"); // return feature blogs
  };

  const blogs = { allBlogs, featureBlogs, getBlogById };

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

