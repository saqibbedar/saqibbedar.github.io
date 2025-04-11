import "./Navbar.css";
import { useState, useEffect } from "react";
import { author, icons } from "@/assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { desktopNavbarElements, mobileNavbarElements } from './navElements';

const Navbar = () => {

  const location = useLocation(); // for paths 
  const navigate = useNavigate(); 
  const [menu, setMenu] = useState(location.pathname); 
  const [activeMenu, setActiveMenu] = useState(false);

  // for handling navbar
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Logic: Navbar open and close based on scrolling
  useEffect(() => {
    function handleScroll() {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Scrolling down, hide the navbar
      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        // Scrolling up, show the navbar
        setIsHidden(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
    if (!activeMenu) {
      document
        .querySelector(".mobile-nav-menu")
        .classList.remove("active-mobile-menu");

      document.querySelectorAll(".mb-nav-link").forEach((elem) => {
        elem.addEventListener("click", () => {
          setActiveMenu(activeMenu);
        });
      });
    }
  };

  return (
    <>
      <div className={`w-full fixed navbar px-[26px] media1:px-[80px] mediaXl:px-8 mediaXXl:px-20 ${isHidden ? "hidden" : ""}`}>
        {/* DESKTOP LOGO */}
        <div className="logo">
          <h1 translate="no">
            <Link to={"/"}>{author.logo + "."}</Link>
          </h1>
        </div>
        {/* NAVBAR ELEMENTS */}
        <nav className="nav-menu">
          {desktopNavbarElements.map((element, index) => {
            const elementPath = `/${element}`;
            const isActive =
              location.pathname === elementPath ||
              (location.pathname === "/" && elementPath === "/Home");
            return (
              <Link
                to={elementPath}
                key={index}
                onClick={() => {
                  setMenu(elementPath);
                }}
                className={isActive ? "active-nav-des-menu" : "none"}
                style={{ color: isActive ? "white" : "" }}
              >
                {element}
              </Link>
            );
          })}
          {/* DESKTOP SEARCH */}
          <Link to={"/Search"} className="search search-large-screen">
            <icons.search />
          </Link>
        </nav>
        
        {/* HAMBURGER FOR MOBILE */}
        <div className="icons">
          <div className="hamburger" onClick={handleMenu}>
            <icons.hamburger />
          </div>
        </div>
      </div>

      <nav
        className={`mobile-nav-menu ${activeMenu ? "active-mobile-menu" : ""} ${
          isHidden ? "hidden" : ""
        }`}
      >
        <div className="search-bar-small-screens">
          <Link to={"/Search"} className="search search-small-screens">
            <icons.search /> <span>Search</span>
          </Link>
        </div>

        {mobileNavbarElements.map((element, index) => {
          return (
            <Link
              to={`/${element}`}
              key={index}
              id={element === "Home" && "mob-home"}
              className={`mb-nav-link ${
                index === mobileNavbarElements.length - 1 &&
                "mobile-menu-last-element"
              }`}
            >
              {element}
            </Link>
          );
        })}

        <div className="close-nav" onClick={handleMenu}>
          <icons.close title="close" />
        </div>
      </nav>

    </>
  );
};

export default Navbar;
