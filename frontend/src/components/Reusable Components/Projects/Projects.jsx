import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = ({ url, title, img, Index }) => {
  return (
    <>
        <Link to={url}  className={ Index % 2 === 0 ? "left-project-section" : "right-project-section"}>
          <div className="project-info">
            <span></span>
            <h2 className="project-title">{title}</h2>
          </div>
  
          <div className="project-img-box">
            <img src={img} alt="" />
          </div>
        </Link>   
    </>
  );
};

export default Projects;

