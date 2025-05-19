import "./ProjectView.css";
import { useContext, useState } from "react";
import { ErrorImages } from "@/assets/assets";
import { ResourceStatus } from "@/components/ui";
import {
  Grid,
  GridItem,
  GridToggler
} from "@/components/templates/templates";
import { useProjects, useCategory, GridContext } from "@/context";
import { CategoryTabs } from "@/components/ui";
import { SectionHeader } from "@/components/layout";

const categoryButtons = ["All", "Frontend", "HTML", "CSS", "Tailwind", "Bootstrap", "JavaScript", "React", "NextJS", "Backend", "MERN", "C++", "Python", "NodeJS", "Express", "MongoDB"];

const ProjectView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isGrid } = useContext(GridContext);
  const { category } = useCategory()
  const { getProjects, loading, error } = useProjects();
  const projects = getProjects(category);
  const sectionTitle = category ;

  return (
    <div className="project-page-layout-wrapper">
      <SectionHeader
        layoutHeading={"Explore your favorite Projects"}
        layoutDescription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."
        }
      />
      <CategoryTabs
        categories={categoryButtons}
        align="start"
      />
      <br />

      <GridToggler
        section_name={
          <>
            {sectionTitle} {<span>{projects.length}</span>}
          </>
        }
        isLoading={isLoading}
      />

      <div className={projects.length > 0 ? "" : "no-project-found"}>
        {projects.length > 0 ? (
          <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}>
            {projects.map((project, index) => (
              <GridItem
                key={index}
                projectId = {project._id}
                projectUrl={project.url}
                projectName={project.name}
                projectImage={project.image}
                projectTags={project.tags}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            ))}
          </Grid>
        ) : (
          <ResourceStatus
            containerHeight={"100%"}
            img={ErrorImages.no_result2}
            imgContainerHeight={"auto"}
            imgContainerWidth={"auto"}
            title={`No ${category} Project found`}
            titleColor={"var(--text-color)"}
            description={`Sorry, we could'nt find any project related to the ${category} category.`}
            desColor={"var(--text-color)"}
            isButton={false}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectView;
