import "../Grid/Grid.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GridItem = ({ link, title, description, img, isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true);
  }, [link, title, img, setIsLoading]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link
      to={link}
      className="grid-item"
      style={{ gap: isLoading ? "25px" : "" }}
    >
      <div className="flex flex-col gap-1 shadow-[var(--cards-shadow)] projects-title-des-wrapper">
        <p className={`${ isLoading && "skeleton" } text-xl text-[var(--cards-text-title-foreground)] whitespace-nowrap font-normal project-title`}> • {title} </p>
        <p className="line-clamp-2 tracking-[var(--other-text-letter-spacing)] text-[var(--cards-text-description-foreground)] project-description">
          {description || `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione
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
        <img src={img} onLoad={handleImageLoad} />
      </div>
    </Link>
  );
};

export default GridItem;
