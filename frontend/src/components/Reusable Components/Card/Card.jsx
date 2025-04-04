import { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({img, title, description, profileImg, name, url}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true);
  }, [img, title, description, profileImg, name])

  const handleImageLoad = ()=>{
    setIsLoading(false);
  }

  return (
    <>
            <div className="card">
              <div className={isLoading? "main-card-img skeleton": "main-card-img"}>
                <img src={img} onLoad={handleImageLoad} className="img" />
              </div>
              <div className={isLoading ? "card-content skeleton":"card-content"}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
              </div>
              <div className="card-footer">
                <div className={isLoading? "card-author-img skeleton":"card-author-img"}>
                  <img src={profileImg} alt="" />
                </div>
                <div className={isLoading? "author-info skeleton": "author-info"}>
                  <h5>{name}</h5>
                  <h6><Link to={url} target="_blank">See Credential</Link></h6>
                </div>
              </div>
            </div>
    </>
  );
};

export default Card;
