import "./AboutLandingPage.css";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";
import { useEffect, useState } from "react";

const AboutLandingPage = ({ title, description, cv_url, img, setIsLoading }) => {

  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    setIsLoading(true);
  }, [title, description, cv_url, img]);

  const handleImageLoad = ()=>{
    setLoading(false)
    setIsLoading(false);
  }

  return (
    <div className="about-section-landing-page">
      <div className="about-left">
        <h1 className={isLoading ? "skeleton" : ""}>Hi, I am  {title || "Hello, world"}</h1>
        <p className={isLoading ? "skeleton" : ""}>
          {description ||
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aliquam ducimus animi necessitatibus vel, dolorum nam cupiditate, sed ad corrupti a aliquid reiciendis commodi ipsam quam ut saepe dignissimos? Modi?"}
        </p>
        <HeroBtn btnValue={"Download CV"} btnLink={cv_url} btnBg={"var(--featured-bg)"} hoverColor={"#323336"} isDownloadBtn={true} isLoading={isLoading}/>
      </div>
      <div className="about-right ">
        <div className={isLoading ? "about-img-container skeleton" : "about-img-container "}>
          <img src={img} onLoad={handleImageLoad} />
        </div>
      </div>
    </div>
  );
};

export default AboutLandingPage;
