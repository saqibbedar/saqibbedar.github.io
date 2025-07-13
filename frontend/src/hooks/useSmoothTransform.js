import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Pass any ClassName to perform this animation
export const useSmoothTransform = (className) => {
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
