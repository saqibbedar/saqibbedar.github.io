import { useContext } from "react";
import { HeroBtn } from "@/components/reusable/reusable";
import { Grid, GridToggler, GridItem } from "@/components/templates/templates";
import { useProjects, GridContext } from "@/context/context";

const FeaturedProjects = () => {
  
  const {isGrid} = useContext(GridContext);
  
  const { getProjects, loading, error } = useProjects();

  const featuredProjects = getProjects("featured");

  if (error) {
    console.error("Feature projects error: ", error);
  }

  return (
    <div className="flex flex-col mt-[25.5rem] media2:mt-[26rem] mb-7 media1:mb-2">

      <GridToggler section_name={"Featured projects"}/>
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr"}>
        {
          featuredProjects.slice(0, 2).map((project, index)=>(
            <GridItem key={index} projectId={project._id} projectUrl={project.url} projectName={project.name} projectImage={project.image} projectTags={project.tags} />
          ))
        }
      </Grid>

      <div className="hero-btn-wrapper w-full flex justify-center mt-[2rem] media1:mt-[2.5rem]">
        <HeroBtn
          btnValue={"View all projects"}
          btnLink={'/Projects'}
          btnBg={"var(--featured-bg)"}
          hoverColor={"#323336"}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
