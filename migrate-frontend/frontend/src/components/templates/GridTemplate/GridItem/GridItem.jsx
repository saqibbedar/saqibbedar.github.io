import "../Grid/Grid.css";
import { Link, useNavigate } from "react-router-dom";
// import SimpleParallax from "simple-parallax-js"

const GridItem = ({ projectId=null, projectUrl, projectName, projectDescription, projectImage, projectTags, isLoading=null, setIsLoading=null }) => {

  const navigate = useNavigate();

  return (
    <Link to={`/projects/${projectId}`} className="grid-item shadow-sm">
      <div className="flex flex-col gap-1 projects-title-des-wrapper">
        <h1
          className={`text-xl whitespace-nowrap font-semibold project-title`}
        >
          {`${projectName} `}
        </h1>
        <p className="line-clamp-2 mt-2 project-description">
          {projectDescription ||
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione
          fugit expedita rem maiores ad, placeat dolores natus assumenda velit,
          blanditiis nihil voluptates incidunt inventore soluta ipsa ea totam a.`}
        </p>
      </div>

      <div className={"grid-item-img-container"}>
        {/* <SimpleParallax scale={1.1}> */}
          <img src={projectImage} />
        {/* </SimpleParallax> */}
      </div>

      <div className="flex gap-[6px] flex-wrap text-xs mb-3 leading-3">
        {projectTags?.split(" ").map((tag, index) => (
          <div
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              navigate(
                `/search?q=${encodeURIComponent(tag.trim().toLowerCase())}`
              );
            }} className={`py-1 px-2 rounded-full text-[var(--dt-trinary-foreground)] hover:text-[var(--dt-primary-foreground)] bg-transparent hover:bg-[var(--dt-card-button-hover-background)] border border-[var(--dt-border-color)] hover:border-[var(--dt-card-button-hover-background)] text-xs transition-[var(--transition)] `}
          >
            {tag.toUpperCase()}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default GridItem;
