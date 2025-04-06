import "../Grid/Grid.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GridItem = ({ projectUrl, projectName, projectDescription, projectImage, isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
  }, [projectUrl, projectName, projectImage, setIsLoading]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link
      to={projectUrl}
      className="grid-item shadow-sm"
      style={{ gap: isLoading ? "25px" : "" }}
    >
      <div className="flex flex-col gap-1 projects-title-des-wrapper">
        <p className={`${ isLoading && "skeleton" } text-xl text-[var(--cards-text-title-foreground)] whitespace-nowrap font-normal project-title`}> • {projectName} </p>
        <p className="line-clamp-2 tracking-[var(--other-text-letter-spacing)] text-[var(--cards-text-description-foreground)] project-description">
          {projectDescription || `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione
          fugit expedita rem maiores ad, placeat dolores natus assumenda velit,
          blanditiis nihil voluptates incidunt inventore soluta ipsa ea totam a.`}
        </p>
      </div>
      <div
        className={
          isLoading
            ? "grid-item-img-container skeleton"
            : "grid-item-img-container"
        }
      >
        <img src={projectImage} onLoad={handleImageLoad} />
      </div>
    </Link>
  );
};

export default GridItem;
