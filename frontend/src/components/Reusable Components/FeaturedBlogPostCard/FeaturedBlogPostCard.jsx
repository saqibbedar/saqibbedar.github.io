import './FeaturedBlogPostCard.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const FeaturedBlogPostCard = ({ link, description, img, title, containerWidth }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true);
  }, [description, img,]);

  const handleImageLoad = ()=>{
    setIsLoading(false);
  }


  return (
    <>
        <Link to={link} className="f-post-sm-card">
            <div className="f-post-sm-card-content" style={{width : containerWidth && containerWidth}}>
                <div className="f-post-left-section">
                <p className={isLoading && "skeleton"}>{description}</p>
                </div>
                <div className={isLoading? "f-post-right-section skeleton": "f-post-right-section"}>
                <img src={img} onLoad={handleImageLoad}/>
                </div>
            </div>
            <h3 className={isLoading && "skeleton"}>{title}</h3>
        </Link>
    </>
  );
};

export default FeaturedBlogPostCard;
