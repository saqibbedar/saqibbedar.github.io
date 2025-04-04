import ErrorPage from "../../components/ErrorPage/ErrorPage"
import {ErrorImages} from "../../assets/assets"

const NotFound = () => {
  
  return (
    <div style={{marginTop: "-2rem"}}>
      <ErrorPage img={ErrorImages.error_404} title={"Page not found"} titleColor={"var(--text-color)"} description={"Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage."} isButton={true} btnValue={"Go to Homepage"} btnLink={"/Home"} btnBg={"var(--featured-bg)"} hoverColor={"#323336"}/>
    </div>
  )
}

export default NotFound
