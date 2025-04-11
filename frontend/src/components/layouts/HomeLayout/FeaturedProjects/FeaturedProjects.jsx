import { useContext, useState } from "react";
import { GridContext } from "@/context/GridContext";
import { HeroBtn } from "@/components/reusable/reusable";
import { ProjectContext } from "@/context/ProjectContext";
import { Grid, GridToggler, GridItem } from "@/components/templates/templates";

const FeaturedProjects = () => {
  
  const {isGrid} = useContext(GridContext);
  
  const { featuredProjects } = useContext(ProjectContext);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col mt-[25.5rem] media2:mt-[26rem] mb-7 media1:mb-2">

      <GridToggler section_name={"Featured projects"} isLoading={isLoading}/>
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr"}>
        {
          featuredProjects.slice(0, 2).map((project, index)=>(
            <GridItem key={index} projectUrl={project.url} projectName={project.name} projectImage={project.image} tags={project.tags} isLoading={isLoading} setIsLoading={setIsLoading}/>
          ))
        }
      </Grid>

      <div className="hero-btn-wrapper w-full flex justify-center mt-[2rem] media1:mt-[2.5rem]">
        <HeroBtn
          btnValue={"View all projects"}
          btnLink={'/Projects'}
          btnBg={"var(--featured-bg)"}
          hoverColor={"#323336"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
