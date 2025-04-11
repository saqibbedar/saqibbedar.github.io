import "./AboutProjectSection.css";
import { useContext, useState } from "react";
import { GridContext } from "@/context/GridContext";
import { HeroBtn } from "@/components/reusable/reusable";
import { ProjectContext } from "@/context/ProjectContext";
import { Grid, GridToggler, GridItem } from "@/components/templates/templates";

const AboutProjectSection = () => {
  const { isGrid } = useContext(GridContext);

  const { featuredProjects } = useContext(ProjectContext);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="about-sec-project-wrapper">
      <GridToggler section_name={"Top Projects"} />
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}>
        {featuredProjects.map((project, index) => (
          <GridItem
            key={index}
            projectUrl={project.url}
            projectName={project.name}
            projectImage={project.image}
            projectTags={project.tags}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ))}
      </Grid>
      <div className="about-sec-btn-wrapper">
        <HeroBtn
          btnValue={"View All projects"}
          btnLink={"/Projects"}
          isDownloadBtn={false}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default AboutProjectSection;
