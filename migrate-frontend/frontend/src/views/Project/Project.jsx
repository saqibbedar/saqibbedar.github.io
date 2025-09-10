import { useEffect } from 'react';
import { useProjects } from '@/context/ProjectContext';
import { useNavigate, useParams } from "react-router-dom";

const Project = () => {

    const { getProjectById, loading, error } = useProjects();
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(parseInt(id)); 

    useEffect(() => {
        if (!loading && !project) {
            navigate("/404")
        }
    }, [project, loading, navigate]);

    if (error) {
        console.error("View Project Error: ", error);
    }
    if (loading) {
        return <div>Loading project...</div>
    }

  return (
    <div>
        <h3>{project.name}</h3>
    </div>
  )
}

export default Project;
