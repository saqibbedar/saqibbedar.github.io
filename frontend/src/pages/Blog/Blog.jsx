import GridProvider from "@/context/GridContext";
import BlogProvider from "@/context/BlogContext";
import { BlogLayout } from "@/components/layouts/layouts";
import CategoryProvider from "@/context/CategoryContext";

const Blog = () => {
  return (
    <div>
      <title>Saqib Bedar - Blogs</title>
      <BlogProvider>
        <CategoryProvider initialCategory={"All"}>
          <GridProvider>
            <BlogLayout />
          </GridProvider>
        </CategoryProvider>
      </BlogProvider>
    </div>
  );
};

export default Blog;
