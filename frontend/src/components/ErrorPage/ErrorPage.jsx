import './ErrorPage.css'
import HeroBtn from "../Reusable Components/HeroBtn/HeroBtn"
import { useEffect, useState } from 'react';

const ErrorPage = ({containerHeight, img, imgContainerHeight, imgContainerWidth, title, titleColor, description, desColor, isButton, btnValue, btnLink, btnBg, hoverColor}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true);
  },[containerHeight, img, imgContainerHeight, imgContainerWidth, title, titleColor, description, desColor, isButton, btnValue, btnLink, btnBg, hoverColor])

  const handleImageLoad = ()=>{
    setIsLoading(false);
  }

  const error404Styles = {
    color: "var(--text-color)",
    fontWeight: "400",
    fontSize: "14px"
  };

  return (
      <div className='Error-page' style={{height: containerHeight ? containerHeight : ""}}>
        <div className={isLoading ? "error-page-img-container skeleton" : "error-page-img-container"} style={{display : img ? "" : "none", height: imgContainerHeight && imgContainerHeight, width: imgContainerWidth && imgContainerWidth}}>
          <img src={img} onLoad={handleImageLoad} />
        </div>
        <div className="error-box">
          <h1 style={{color: titleColor && titleColor}} className={img && isLoading ? "skeleton" : ""}>{title}</h1>
          <p className={img && isLoading ? "skeleton" : ""} style={title === "Page not found" || title === "Courses are coming soon!"  ? {...error404Styles, fontSize: img ? "" : "17px"}: {fontSize : img ? "" : "17px", color: desColor }}>{description}</p>
        </div>
        <div className="error-page-btn" style={{display : isButton ? "" : "none"}}>
          <HeroBtn btnValue={btnValue} btnLink={btnLink} btnBg={btnBg} hoverColor={hoverColor} isLoading={isLoading}/>
        </div>
      </div>
  )
}

export default ErrorPage
