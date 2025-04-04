import { ErrorImages } from '../../assets/assets'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import './Courses.css'

const Courses = () => {
  return (
    <div>
      <ErrorPage img={ErrorImages.coming_soon} title={"Courses are coming soon!"} titleColor={"var(--text-color)"} description={"Stay tuned, courses are coming soon, till then visit our YouTube channel for latest updates."} isButton={true} btnValue={"Go to Channel"} btnLink={"/"} hoverColor={"#323336"}/> 
      
    </div>
  )
}

export default Courses
