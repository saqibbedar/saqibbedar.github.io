import { projects } from "@/assets/assets";
import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(projects);
  }, []);

  // Featured Projects for HomePage
  const featuredProjects = projectsData.filter((project) => {
    const projectTagsArrays = project.tags.toLowerCase().split(" "); // tags splitted based on space, tags are string in type
    return projectTagsArrays.includes("featured");
  });

  // free Projects
  const freeProjects = projectsData.filter((project) => {
    const projectTagsArray = project.tags.toLowerCase().split(" ");
    return projectTagsArray.includes("free");
  });

  // Premium Projects
  const premiumProjects = projectsData.filter((project) => {
    const projectTagsArray = project.tags.toLowerCase().split(" ");
    return projectTagsArray.includes("premium");
  });

  // All Projects : this function will receive a tag from projects pages and based on that filter the projects and return them.

  const allProjects = (tag) => {
    const selectedTag = tag.toLowerCase();

    return projectsData.filter((project) => {
      if (selectedTag === "all") return true;

      const projectTagsArray = project.tags.toLowerCase().split(" ");

      return projectTagsArray.includes(selectedTag);
    });
  };

  return (
    <ProjectContext.Provider value={{ featuredProjects, freeProjects, premiumProjects, allProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
