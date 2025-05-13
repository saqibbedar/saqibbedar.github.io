import "./ProjectLayout.css";
import { useContext, useState } from "react";
import { ErrorImages } from "@/assets/assets";
import categoryButtons from "./categoryButtons";
import { ErrorPage } from "@/components/common/common";
import {
  Grid,
  GridItem,
  GridToggler,
  LayoutInfoTemplate,
  CategoryButtonTemplate,
} from "@/components/templates/templates";
import { useProjects, CategoryContext, GridContext } from "@/context/context";

const ProjectLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isGrid } = useContext(GridContext);
  const { category } = useContext(CategoryContext);
  const { getProjects, loading, error } = useProjects();
  const projects = getProjects(category);
  const sectionTitle = category === "All" ? "All" : `Category: ${category}`;

  return (
    <div className="project-page-layout-wrapper">
      <LayoutInfoTemplate
        layoutHeading={"Explore your favorite Projects"}
        layoutDescription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."
        }
      />
      <CategoryButtonTemplate
        Buttons={categoryButtons}
        isCenter={false}
        isLoading={isLoading}
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
          <ErrorPage
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

export default ProjectLayout;
