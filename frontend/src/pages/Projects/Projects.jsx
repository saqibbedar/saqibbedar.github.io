import { CategoryProvider } from "@/context";
import { ProjectView } from "@/components/sections";

const Projects = () => {
  return (
    <>
      <title>Saqib Bedar | Projects</title>
    <CategoryProvider initialCategory={"All"}>
        <ProjectView />
    </CategoryProvider>
    </>
  );
};

export default Projects;
