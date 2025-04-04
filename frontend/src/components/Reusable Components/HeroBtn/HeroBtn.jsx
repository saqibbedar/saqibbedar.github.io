import './HeroBtn.css'
import { Link } from "react-router-dom";
import {icons} from "../../../assets/assets";
import { useState } from 'react';

const HeroBtn = ({btnValue, btnLink, btnBg, hoverColor, isDownloadBtn, isLoading}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
        <Link 
          to={btnLink && btnLink} 
          className={isLoading ? "hero-btn skeleton": "hero-btn"} 
          style={{background: btnBg && btnBg, ...(isHovered && hoverColor && {background: hoverColor})}}
          onMouseEnter={()=> setIsHovered(true)}
          onMouseLeave={()=> setIsHovered(false)}
        >
            <span>{btnValue ? btnValue : "Click here"}</span>
            <span id="hero-btn-svg"><icons.rightArrow style={{transform : isDownloadBtn && isHovered ? "rotate(90deg)" : ""}}/></span>
        </Link>
  )
}

export default HeroBtn
