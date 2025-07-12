import "./Navbar.css";
import { useState } from "react";
import { author, icons } from "@/assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar-wrapper">

      {/* DESKTOP */}
      <div className="navbar">
        <div className="logo">
          <h1>
            <Link to="/">{author.logo + "."} </Link>
          </h1>
        </div>
        <nav className="nav-menu">
          {["home", "about", "projects", "services", "courses", "contact"].map(
            (item) => {
              const path = `/${item}`;
              const isActive =
                location.pathname === path ||
                (location.pathname === "/" && path === "/home");

              return (
                <Link key={item} to={path} className={isActive ? "active" : ""}>
                  {item}
                </Link>
              );
            }
          )}
        </nav>
        
        {/*  */}

        <div className="navbar-tools">
          <button onClick={()=>navigate('/search')}>
            <icons.search />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="hamburger" onClick={()=>setActiveMenu(!activeMenu)} aria-label="Toggle menu">
          { activeMenu ? <icons.close /> : 
          <svg width="18" height="18" viewBox="0 0 18 18"><polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 12, 16 12" class="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"><animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate><animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate></polyline><polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5" class="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"><animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate><animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate></polyline></svg>
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${activeMenu ? "active" : ""}`}>
        {[
          "home",
          "about",
          "projects",
          "services",
          "courses",
          "contact"
        ].map((item) => (
          <Link key={item} to={`/${item}`} onClick={()=>setActiveMenu(!activeMenu)}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
