import BlogPage_Layout from "../../components/BlogPage_Layout/BlogPage_Layout";
import BlogProvider from "../../Context/BlogContext";
import CategoryProvider from "../../Context/CategoryContext";
import GridProvider from "../../Context/GridContext";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <BlogProvider>
        <CategoryProvider initialCategory={"All"}>
          <GridProvider>
            <BlogPage_Layout />
          </GridProvider>
        </CategoryProvider>
      </BlogProvider>
    </div>
  );
};

export default Blog;
