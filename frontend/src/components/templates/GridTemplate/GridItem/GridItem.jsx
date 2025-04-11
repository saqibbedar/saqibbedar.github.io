import "../Grid/Grid.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GridItem = ({ projectUrl, projectName, projectDescription, projectImage, tags, isLoading, setIsLoading }) => {
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
        <p
          className={`${
            isLoading && "skeleton"
          } text-xl text-[var(--cards-text-title-foreground)] whitespace-nowrap font-normal project-title`}
        >
          {" "}
          • {projectName}{" "}
        </p>
        <p className="line-clamp-2 tracking-[var(--other-text-letter-spacing)] text-[var(--cards-text-description-foreground)] project-description">
          {projectDescription ||
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione
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
      <div className="flex gap-[6px] flex-wrap text-xs mb-3 leading-3">
        <span className="text-sm">Tags:</span>
        {tags.split(" ").map((tag, index) => (
          <Link
            to={`/search/${tag}`}
            key={index}
            className={`py-1 px-2 rounded-full ${
              tag.toLowerCase() === "free"
                ? "bg-green-100 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                : tag.toLowerCase() === "premium"
                ? "bg-orange-100 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                : tag.toLowerCase() === "featured"
                ? "bg-[#2563eb]/10 border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                : tag.toLowerCase() === "private"
                ? "bg-slate-100 border border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white"
                : "bg-violet-100 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
            }`}
          >
            {tag.toUpperCase()}
          </Link>
        ))}
      </div>
    </Link>
  );
};

export default GridItem;
