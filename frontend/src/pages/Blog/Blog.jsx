import GridProvider from "@/Context/GridContext";
import BlogProvider from "@/context/BlogContext";
import { BlogLayout } from "@/components/layouts/layouts";
import CategoryProvider from "@/context/CategoryContext";

const Blog = () => {
  return (
    <div>
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
