import ProjectPageLayout from "../../components/ProjectPage_Layout/ProjectPageLayout";
import CategoryProvider from "../../Context/CategoryContext";
import GridProvider from "../../Context/GridContext";
import "./Projects.css";

const Projects = () => {
  return (
    <CategoryProvider initialCategory={"All"}>
      <GridProvider>
        <ProjectPageLayout />
      </GridProvider>
    </CategoryProvider>
  );
};

export default Projects;
