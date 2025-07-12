import { useContext } from "react";
import { Button } from "@/components/ui";
import { Grid, GridToggler, GridItem } from "@/components/templates/templates";
import { useProjects, GridContext } from "@/context";

const ProjectSection = () => {
  
  const {isGrid} = useContext(GridContext);
  
  const { getProjects, loading, error } = useProjects();

  const featuredProjects = getProjects("featured");

  if (error) {
    console.error("Feature projects error: ", error);
  }

  return (
    <div className="flex flex-col bg-[var(--dt-card-background)]">
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr"}>
        {featuredProjects.slice(0, 2).map((project, index) => (
          <GridItem
            key={index}
            projectId={project._id}
            projectUrl={project.url}
            projectName={project.name}
            projectImage={project.image}
            projectTags={project.tags}
          />
        ))}
      </Grid>

      <div className="hero-btn-wrapper w-full flex justify-center mt-[2rem] media1:mt-[2.5rem]">
        <Button
          variant="navigation"
          to="/projects"
          label="View Projects"
          size="large"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
