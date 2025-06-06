import "./TestimonialCard.css";
import { icons } from "@/assets/assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TestimonialCard = ({ image, linkedInUrl, name, designation, des }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [image, linkedInUrl, name, designation, des]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="testimonial-card">
      <div className={isLoading ? "t-card-img skeleton" : "t-card-img"}>
        <img src={image} onLoad={handleImageLoad} alt="" />
      </div>
      <Link to={linkedInUrl} className={"t-person-info"}>
        <h1
          className="t-person-name"
          style={{ display: isLoading ? "none" : "flex" }}
        >
          {name}
        </h1>
        <div
          className="person-contact-icon"
          style={{ display: isLoading ? "none" : "flex" }}
        >
          <icons.linkedIn />
        </div>
      </Link>
      <div
        className={
          isLoading ? "t-person-designation skeleton" : "t-person-designation"
        }
      >
        {designation}
      </div>
      <p className={isLoading ? "t-description skeleton " : "t-description"}>
        {des}
      </p>
    </div>
  );
};

export default TestimonialCard;
