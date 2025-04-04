import './ProjectPageLayout.css'
import { useContext, useState } from 'react'
import { CategoryContext } from '../../Context/CategoryContext'
import Layout_Info_Template from '../Layout_Info_Template/Layout_Info_Template';
import CategoryButtonTemplate from '../CategoryButtonTemplate/CategoryButtonTemplate';
import { ErrorImages } from '../../assets/assets';
import ErrorPage from "../ErrorPage/ErrorPage"
import Grid from '../GridTemplate/Grid/Grid';
import GridItem from '../GridTemplate/GridItem/GridItem';
import GridToggler from '../GridTemplate/GridToggler/GridToggler'
import { GridContext } from '../../Context/GridContext';
import { ProjectContext } from '../../Context/ProjectContext';

const CategoryButtons = ["All", "Frontend", "HTML", "CSS",  "Tailwind", "Bootstrap", "JavaScript", "React", "NextJS", "Backend", "MERN", "C++", "Python", "NodeJS", "Express", "MongoDB",];

const ProjectPageLayout = () => {

    const [isLoading, setIsLoading] = useState(true);
  
    const {isGrid} = useContext(GridContext);

    const {category} = useContext(CategoryContext);

    const {projects} = useContext(ProjectContext);

    const All_Projects = projects.All_Projects(category);

    const sectionTitle = category === "All" ? "All" : `Category: ${category}`;

  return (
    <div className='project-page-layout-wrapper'>

      <Layout_Info_Template 
      layoutHeading={"Explore your favorite Projects"}
      layoutDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."}
      />
      <CategoryButtonTemplate Buttons={CategoryButtons} isCenter={false} isLoading={isLoading}/>
      <br/>

      <GridToggler section_name={<>{sectionTitle} {<span>{All_Projects.length}</span>}</>} isLoading={isLoading}/>

      <div className={All_Projects.length > 0 ? "": "no-project-found"}>
        {
          All_Projects.length > 0 ? 
          <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr 1fr"}>
            {
              All_Projects.map((project, index)=>(
                <GridItem key={index} link={project.project_link} title={project.project_name} img={project.project_img} isLoading={isLoading} setIsLoading={setIsLoading}/>
              )) 
            }
          </Grid>
          : (
            <ErrorPage containerHeight={"100%"} img={ErrorImages.no_result2} imgContainerHeight={"auto"} imgContainerWidth={"auto"} title={`No ${category} Project found`} titleColor={"var(--text-color)"} description={`Sorry, we could'nt find any project related to the ${category} category.`} desColor={"var(--text-color)"} isButton={false} /> 
          )
        }
      </div>
    </div>
  )
}

export default ProjectPageLayout
