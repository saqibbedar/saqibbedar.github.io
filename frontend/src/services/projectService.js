const fetchProjects = async () => {
  try {
    const response = await fetch("/src/assets/json/projects.json");
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();
    // console.log("Debug services/ProjectService: fetchedProjects(): ", data);
    return data;
  } catch (error) {
    throw error;
  }
};

const getProjectsService = (projectsData, tag) => {
  // console.log("Debug services/ProjectService: getProjectsService(): ", { projectsData, tag });

  // Check if projectsData exists and is an array
  if (!projectsData || !Array.isArray(projectsData)) {
    return [];
  }

  const selectedTag = tag.toLowerCase();
  return projectsData.filter((project) => {
    if (selectedTag === "all") return true;
    const projectTagsArray = project.tags.toLowerCase().split(" ");
    return projectTagsArray.includes(selectedTag);
  });
};

const getProjectByIdService = (projectsData, id) => {
  return projectsData.find((project) => project._id === Number(id));
};

export { fetchProjects, getProjectsService, getProjectByIdService };
