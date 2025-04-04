import { useContext, useState } from 'react'
import { GridContext } from '../../Context/GridContext'
import Grid from "../GridTemplate/Grid/Grid"
import Layout_Info_Template from "../Layout_Info_Template/Layout_Info_Template"
import GridToggler from '../GridTemplate/GridToggler/GridToggler'
import GridItem from "../GridTemplate/GridItem/GridItem"
import './ServicesPage_Layout.css'

const ServicesPage_Layout = () => {
    const {isGrid} = useContext(GridContext);
    const [isLoading, setIsLoading] = useState(true);
    
  return (
    <div className='services-page-layout-wrapper'>
        <Layout_Info_Template layoutHeading={"Explore the best services I provide"} layoutDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quibusdam. Vel placeat quos dolorem laborum. Sunt voluptatibus quas beatae, cupiditate omnis, eum itaque doloribus dolores eveniet minima nostrum laborum quidem."} isLoading={isLoading}/>
        <GridToggler section_name={"Services"} isLoading={isLoading}/>
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr 1fr"}>
        <GridItem link={'/'} title={"Frontend development"} img={"https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"} isLoading={isLoading} setIsLoading={setIsLoading}/>
      </Grid>
    </div>
  )
}

export default ServicesPage_Layout
