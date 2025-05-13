import "./AboutProjectSection.css";
import { useContext, useState } from "react";
import { GridContext } from "@/context/GridContext";
import { Button } from "@/components/ui";
import { useProjects } from "@/context/context";
import { Grid, GridToggler, GridItem } from "@/components/templates/templates";

const AboutProjectSection = () => {
  const { isGrid } = useContext(GridContext);

  const { getProjects } = useProjects();
  const projects = getProjects("featured");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="about-sec-project-wrapper">
      <GridToggler section_name={"Top Projects"} />
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}>
        {projects.map((project, index) => (
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
        <Button
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
