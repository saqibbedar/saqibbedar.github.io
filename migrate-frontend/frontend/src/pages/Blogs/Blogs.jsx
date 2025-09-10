import { BlogProvider, CategoryProvider, GridProvider } from "@/context";
import { BlogView } from "@/components/sections";

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
