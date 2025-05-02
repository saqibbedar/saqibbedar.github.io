import { createContext, useEffect, useState, use } from "react";

// 1. create context
export const ProjectContext = createContext();

// 2. Create custom hook for consuming context
export const useProjects = () => {
  const context = use(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within ProjectProvider");
  }
  return context;
};

// 3. Create a provider
export default function ProjectProvider({ children }) {
  // state handlers
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect for fetchProjects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/src/assets/json/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjectsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Featured Projects: these are the top projects to showcase on landing page. Each project have notable tags (like featured, frontend, private, free etc). This function will return project only match with featured keyword.
  const featuredProjects = projectsData.filter((project) => {
    // Extract tags from project.tags
    const projectTagsArray = project.tags.toLowerCase().split(" "); // project.tags is a string, first it gets into lowercase and each tag is split based on space and save to array.

    // return those projects that includes featured keyword
    return projectTagsArray.includes("featured");
  });

  const allProjects = (tag) => {
    const selectedTag = tag.toLowerCase();
    return projectsData.filter((project) => {
      if (selectedTag === "all") return true;
      const projectTagsArray = project.tags.toLowerCase().split(" ");
      return projectTagsArray.includes(selectedTag);
    });
  };

  return (
    <ProjectContext.Provider value={{ featuredProjects, allProjects, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
}
