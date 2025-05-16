import GridProvider from "@/context/GridContext";
import {BlogProvider} from "@/context/BlogContext";
import { BlogView } from "@/components/sections";
import CategoryProvider from "@/context/CategoryContext";

const Blogs = () => {
  return (
    <div>
      <title>Saqib Bedar | Blogs</title>
      <BlogProvider>
        <CategoryProvider initialCategory={"All"}>
          <GridProvider>
            <BlogView />
          </GridProvider>
        </CategoryProvider>
      </BlogProvider>
    </div>
  );
};

export default Blogs;
