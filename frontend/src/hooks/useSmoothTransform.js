import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";

// Pass any ClassName to perform this animation
const useSmoothTransform = ({className}) => {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.from(`.${className}`, {
          y: "30px",
          opacity: 0,
          ease: "power1.out",
          duration: 0.6,
          filter: "blur(10px)",
        });
    });
};

// PropTypes
useSmoothTransform.prototype = {
  className: PropTypes.string.isRequired,
}

export default useSmoothTransform;