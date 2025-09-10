import { CategoryProvider, GridProvider } from "@/context";
import { ProjectView } from "@/components/sections";

const Projects = () => {
  return (
    <>
      <title>Saqib Bedar | Projects</title>
    <CategoryProvider initialCategory={"All"}>
      <GridProvider>
        <ProjectView />
      </GridProvider>
    </CategoryProvider>
    </>
  );
};

export default Projects;
