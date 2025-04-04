import "./AboutProjectSection.css";
import Grid from "../../GridTemplate/Grid/Grid";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import { GridContext } from "../../../Context/GridContext";
import { useContext, useState } from "react";
import GridItem from "../../GridTemplate/GridItem/GridItem";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";
import { ProjectContext } from "../../../Context/ProjectContext";

const AboutProjectSection = () => {
  const { isGrid } = useContext(GridContext);

  const {projects} = useContext(ProjectContext);

  const [isLoading, setIsLoading] = useState(true);

  return (
      <div className="about-sec-project-wrapper">
        <GridToggler section_name={"Top Projects"} />
        <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}>
          {
            projects.featuredProjects.map((project, index)=>(
             <GridItem key={index} link={project.project_link} title={project.project_name} img={project.project_img} isLoading={isLoading} setIsLoading={setIsLoading}/>
            ))
          }
        </Grid>
        <div className="about-sec-btn-wrapper">
            <HeroBtn btnValue={"View All projects"} btnLink={"/Projects"} isDownloadBtn={false} isLoading={isLoading}/>
        </div>
      </div>
  );
};

export default AboutProjectSection;
