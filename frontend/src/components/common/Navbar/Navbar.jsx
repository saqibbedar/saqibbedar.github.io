import { useEffect, useState, useRef } from "react";
import { author, icons } from "@/assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { SlideText, SplitText } from "@/components/ui";
import { motion } from "motion/react";
import { footer } from "@/assets/assets";
import Marquee from "react-fast-marquee";

// Elegant easing curves
const elegantEase = [0.76, 0, 0.24, 1]; // smooth decelerate
const smoothEase = [0.22, 1, 0.36, 1]; // gentle overshoot

// Menu container variants (static position, only opacity/blur/visibility)
const menuContainerVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    pointerEvents: "none",
    transition: {
      duration: 0.5,
      ease: elegantEase,
    },
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    pointerEvents: "auto",
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

// motion variants for navItems(child div)
const navItemsVariants = {
  initial: {
    y: 60,
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.2 + 0.06 * index,
      duration: 0.7,
      ease: smoothEase,
    },
  }),
  exit: (index) => ({
    y: -40,
    opacity: 0,
    filter: "blur(5px)",
    transition: {
      delay: 0.04 * (5 - index),
      duration: 0.4,
      ease: elegantEase,
    },
  }),
};

// motion variants for socialLinks
const socialLinkVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + 0.04 * index,
      duration: 0.6,
      ease: smoothEase,
    },
  }),
  exit: (index) => ({
    y: -20,
    opacity: 0,
    transition: {
      delay: 0.02 * (5 - index),
      duration: 0.35,
      ease: elegantEase,
    },
  }),
};

// motion variants for bottom Items
const bottomVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.55,
      duration: 0.6,
      ease: smoothEase,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: elegantEase,
    },
  },
};

const STYLES = {
  navHeight: "h-14 sm:h-16 lg:h-18 2xl:h-20",
  logo: "text-xl sm:text-2xl leading-tight font-semibold tracking-wider",
  actionButtons:
    "uppercase cursor-pointer text-base sm:text-lg leading-5 font-semibold tracking-wider",
  fixed: "fixed top-0 left-0 w-full",
  flexBetween: "flex items-center justify-between",
};

const Navbar = () => {
  // const MotionLink = motion(Link);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`${STYLES.fixed} z-50`}>
      <div
        className={`${STYLES.flexBetween} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${STYLES.navHeight} overflow-hidden bg-bg-primary border-border-light border-b`}
      >
        {/*1. activity header: visible component */}
        {/* Logo */}
        <Link to="/">
          <SlideText as="div" className={`${STYLES.logo}`}>
            {author.logo}
          </SlideText>
        </Link>
        {/* Menu+(Toggle Button) */}
        <div className="flex items-center gap-3">
          <SlideText
            as="div"
            className={`${STYLES.actionButtons}`}
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <div className="flex items-center justify-center gap-[0.09rem] font-semibold">
              <span className="">Menu</span>
              <icons.plus
                strokeWidth={"20px"}
                className="h-[.9rem] w-[.9rem]"
              />
            </div>
          </SlideText>
        </div>

        {/*2. Menu: always mounted, visibility controlled via motion */}
        <motion.div
          className={`${STYLES.fixed} h-full`}
          style={{
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          variants={menuContainerVariants}
          initial="hidden"
          animate={activeMenu ? "visible" : "hidden"}
        >
          {/* Menu content */}
          {/* First div is an overlay for holding its children's */}
          <div className={`relative h-full`}>
            {/* Hidden Header Area */}
            <div
              className={`${STYLES.flexBetween} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${STYLES.navHeight} overflow-hidden border-border-light border-b mb-2`}
            >
              {/* logo */}
              <Link
                to="/"
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}
              >
                <SlideText as="div" className={`${STYLES.logo}`}>
                  <span className="block">{author.logo}</span>
                </SlideText>
              </Link>

              {/* search bar */}
              <motion.div
                className="hidden rounded-full sm:flex items-center justify-between px-[12px] sm:px-[16px] py-[10px] sm:py-3 text-[14px] text-[var(--dt-sec-fg)] w-[13rem] sm:w-[25rem] cursor-text"
                style={{
                  background: "rgba(255, 255, 255, 0.122)",
                }}
                onClick={() => searchInputRef.current?.focus()}
                whileHover={{
                  background: "rgba(255, 255, 255, 0.2)",
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery.trim()) {
                      navigate(
                        `/search?q=${encodeURIComponent(searchQuery.trim())}`
                      );
                      setActiveMenu(false);
                      setSearchQuery("");
                    }
                  }}
                  placeholder="Search..."
                  className="bg-transparent outline-none w-full tracking-wider text-sm text-fg-secondary placeholder:text-fg-secondary/60"
                />
                <icons.search
                  strokeWidth="1"
                  className="ml-2 stroke-fg-secondary fill-fg-secondary flex-shrink-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (searchQuery.trim()) {
                      navigate(
                        `/search?q=${encodeURIComponent(searchQuery.trim())}`
                      );
                      setActiveMenu(false);
                      setSearchQuery("");
                    }
                  }}
                />
              </motion.div>

              {/* X Close (toggleButton) */}
              <div className="flex gap-[7px] items-center">
                <Link to={"/search"} onClick={() => setActiveMenu(!activeMenu)}>
                  <icons.search
                    strokeWidth="2px"
                    className="block text-fg-secondary stroke-fg-secondary sm:hidden"
                  />
                </Link>
                <SlideText
                  as="div"
                  onClick={() => setActiveMenu(!activeMenu)}
                  className={`${STYLES.actionButtons}`}
                >
                  <div className="flex items-center justify-center gap-[0.2rem]">
                    <icons.plus
                      strokeWidth={isMobile ? "1px" : "3px"}
                      className="text-fg-secondary sm:text-inherit h-[1.3rem] w-[1.3rem] rotate-45"
                    />
                    <span className="hidden sm:block">Close</span>
                  </div>
                </SlideText>
              </div>
            </div>

            {/* Nav Items Area (Middle Content) */}
            <nav
              className={`px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 font-normal mt-3 md:mt-6`}
            >
              {[
                "home",
                "about",
                "projects",
                "services",
                "courses",
                "contact",
              ].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item}`}
                  className="uppercase text-[clamp(1.5rem,5vw,3.5rem)] rounded-md text-fg-secondary"
                  onClick={() => setActiveMenu(false)}
                >
                  <motion.div
                    variants={navItemsVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={index}
                  >
                    <SplitText
                      className="leading-[3rem] tracking-wider"
                      front={item}
                    />
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Bottom Area */}
            <div className="absolute bottom-0 w-full text-fg-secondary">
              {/* Social Links */}
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full flex justify-between gap-2 sm:gap-4">
                {footer.map((item, index) => (
                  <Link
                    key={index}
                    className="flex items-center gap-2 md:h-[65px]"
                    to={item.link}
                    target="_blank"
                  >
                    <motion.div
                      variants={socialLinkVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={index}
                    >
                      {isMobile ? (
                        <item.icon className="h-6 w-6 mb-3" />
                      ) : (
                        <SplitText
                          className="text-[20px] xl:text-2xl leading-[1.8rem] tracking-wider"
                          front={item.name}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
              {/* title Marquee */}
              <motion.div
                variants={bottomVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full border-border-light border-t h-12 sm:h-14 md:h-16 flex"
              >
                <Marquee pauseOnHover={false} autoFill={true} speed={50}>
                  {author.titleMarquee.map((item, index) => (
                    <div
                      key={index}
                      className="uppercase text-[14px] md:text-2xl leading-[1.8rem] font-normal tracking-wider ml-2 md:ml-6"
                    >
                      {item}
                    </div>
                  ))}
                </Marquee>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
