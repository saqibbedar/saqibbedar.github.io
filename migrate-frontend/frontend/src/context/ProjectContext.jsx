import { createContext, useEffect, useState, useContext } from "react";
import { fetchProjects, getProjectsService, getProjectByIdService } from "@/services/index";

// 1. create context
export const ProjectContext = createContext();

// 2. Create custom hook for consuming context
export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within ProjectProvider");
  }
  return context;
};

// 3. Create a provider
export function ProjectProvider({ children }) {
  // state handlers
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect for fetchProjects
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        // console.log("Debug context/ProjectContext: useEffect(): ", data);
        setProjectsData(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Get all projects based on tag using the service function
  const getProjects = (tag) => getProjectsService(projectsData, tag);

  // Get project by ID using the service function
  const getProjectById = (id) => getProjectByIdService(projectsData, id);

  return (
    <ProjectContext.Provider
      value={{
        getProjects,
        getProjectById,
        loading,
        error
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
