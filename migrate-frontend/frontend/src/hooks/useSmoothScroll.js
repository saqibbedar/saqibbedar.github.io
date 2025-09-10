import { useEffect } from "react";
import Lenis from "lenis";

export const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
          duration: 1,
          easing: (t) => 1 - Math.pow(1 - t, 2), // Use smoother easing
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 1,
          infinite: false,
          orientation: "vertical",
          gestureOrientation: "vertical",
          normalizeWheel: true,
          lerp: 0,
        });

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, [])
}