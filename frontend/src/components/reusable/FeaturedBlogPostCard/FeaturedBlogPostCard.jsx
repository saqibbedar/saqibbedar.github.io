import "./FeaturedBlogPostCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedBlogPostCard = ({
  _id,
  description,
  image,
  title,
  containerWidth,
  category
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [description, image]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex">
      <div className="f-post-sm-card">
        <div
          className="f-post-sm-card-content"
          style={{ width: containerWidth && containerWidth }}
        >
          <div className="f-post-left-section">
            <p className={isLoading && "skeleton"}>{description}</p>
          </div>
          <div
            className={
              isLoading
                ? "f-post-right-section skeleton"
                : "f-post-right-section"
            }
          >
            <img src={image} onLoad={handleImageLoad} />
          </div>
        </div>
        <h3 className={`${isLoading && "skeleton" } line-clamp-1 `}>{title}</h3>
      </div>
    </div>
  );
};

export default FeaturedBlogPostCard;
