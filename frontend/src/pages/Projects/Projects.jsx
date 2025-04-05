import GridProvider from "@/context/GridContext";
import CategoryProvider from "@/context/CategoryContext";
import { ProjectLayout } from "@/components/layouts/layouts";

const Projects = () => {
  return (
    <CategoryProvider initialCategory={"All"}>
      <GridProvider>
        <ProjectLayout />
      </GridProvider>
    </CategoryProvider>
  );
};

export default Projects;
