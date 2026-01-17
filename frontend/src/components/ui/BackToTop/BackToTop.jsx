import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${path === "/search" ? "hidden" : ""} fixed bottom-6 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-fg-primary text-bg-primary rounded-full shadow-lg flex items-center justify-center hover:opacity-90 cursor-pointer transition-all duration-200 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <IoIosArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
