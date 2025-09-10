import "./HeroSection.css";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

const HeroSection = ({
  name,
  description,
  cv_url,
  image,
  setIsLoading,
}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setIsLoading(true);
  }, [name, description, cv_url, image]);

  const handleImageLoad = () => {
    setLoading(false);
    setIsLoading(false);
  };

  return (
    <div className="about-section-landing-page">
      <div className="about-left">
        <h1 className={isLoading ? "skeleton" : ""}>
          Hi, I am {name || "Hello, world"}
        </h1>
        <p className={isLoading ? "skeleton" : ""}>
          {description ||
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aliquam ducimus animi necessitatibus vel, dolorum nam cupiditate, sed ad corrupti a aliquid reiciendis commodi ipsam quam ut saepe dignissimos? Modi?"}
        </p>
        <Button
          btnValue={"Download CV"}
          btnLink={cv_url}
          btnBg={"var(--featured-bg)"}
          hoverColor={"#323336"}
          isDownloadBtn={true}
          isLoading={isLoading}
        />
      </div>
      <div className="about-right ">
        <div
          className={
            isLoading ? "about-img-container skeleton" : "about-img-container "
          }
        >
          <img src={image} onLoad={handleImageLoad} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
