import './BackToTop.css'
import { icons } from '../../../assets/assets'
import React, { useEffect, useState } from 'react'

const BackToTop = () => {

    const [scroll, setScroll]= useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setScroll(scrollTop);

            const backToTopElement = document.querySelector(".backToTop");
            if (scrollTop > 150) {
                backToTopElement.classList.remove("hide-backToTop");
            } else {
                backToTopElement.classList.add("hide-backToTop");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div  onClick={()=>{window.scrollTo({top: 0, behavior: "smooth"})}} className="backToTop hide-backToTop"><icons.arrowUp/></div>
  )
}

export default BackToTop
