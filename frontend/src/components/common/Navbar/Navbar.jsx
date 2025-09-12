import { useEffect, useState } from "react";
import { author, icons } from "@/assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { SlideText, SplitText } from "@/components/ui";
import { motion, AnimatePresence } from "motion/react";
import { footer } from "@/assets/assets";
import Marquee from "react-fast-marquee";

// motion variants for navItems(child div)
const navItemsVariants = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      // No delay for exit!
      duration: 0.7,
      ease: "backInOut"
    },
  },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.09 * index, // Stagger in
      duration: 1,
      ease: "backInOut",
    },
  }),
};

// motion variants for socialLinks
const socialLinkVariants = {
  initial: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "anticipate",
    },
  },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.09 * index,
      duration: 1.6,
      ease: "anticipate",
    },
  }),
};

// motion variants for bottom Items
const bottomVariants = {
  initial: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "anticipate",
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.09,
      duration: 1.6,
      ease: "anticipate",
    },
  },
};

const STYLES = {
  navHeight: "h-15 2xl:h-20",
  logo: "text-2xl leading-[1.4rem] font-semibold tracking-wider",
  actionButtons: "uppercase cursor-pointer text-lg leading-5 font-semibold tracking-wider",
  fixed: "fixed top-0 left-0 w-full",
  flexBetween: "flex items-center justify-between"
};

const Navbar = () => {
  // const MotionLink = motion(Link);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className={`${STYLES.fixed} z-50`}>
      <div
        className={`${STYLES.flexBetween} px-3 md:px-8 ${STYLES.navHeight} overflow-hidden bg-black border-[var(--dt-bdr-clr-xtra)] border-b-[1px]`}
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

        {/*2. Menu: hidden component (toggle with activeMenu)*/}
        <motion.div
          className={`${STYLES.fixed} h-full ${
            activeMenu ? "active-navbar" : ""
          }`}
          initial={{
            y: "-102%",
            background: "rgba(0,0,0,0)",
            backdropFilter: "blur(0)",
          }}
          animate={{
            y: activeMenu ? 0 : "-102%",
            background: "rgba(0, 0, 0, 0.57)",
            backdropFilter: "blur(100px)",
          }}
          transition={{
            duration: 1,
            ease: "circInOut",
          }}
        >
          {/* Menu content */}
          {/* First div is an overlay for holding its children's */}
          <div className={`relative h-full`}>
            {/* Hidden Header Area */}
            <div
              className={`${STYLES.flexBetween} px-3 md:px-8 ${STYLES.navHeight} overflow-hidden border-[var(--dt-bdr-clr-xtra)] border-b-[1px] mb-2`}
            >
              {/* logo */}
              <Link
                to="/"
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}
              >
                <SlideText as="div" className={`${STYLES.logo}`}>
                  <span className="hidden sm:block">
                  {author.logo}
                  </span>
                  <span className="block sm:hidden">B.</span>
                </SlideText>
              </Link>

              {/* search bar */}
              <motion.button
                className="rounded-full flex items-center justify-between px-[12px] sm:px-[16px] py-[10px] sm:py-3 text-[14px] text-[var(--dt-sec-fg)] w-[13rem] sm:w-[25rem] cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.122)",
                }}
                onClick={() => {
                  navigate("/search");
                  setActiveMenu(!activeMenu);
                }}
                whileHover={{
                  background: "rgba(255, 255, 255, 0.2)",
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
                onHoverStart={() => setIsHovered(!isHovered)}
                onHoverEnd={() => setIsHovered(!isHovered)}
              >
                <SlideText
                  className="tracking-wider text-sm leading-3"
                  isHovered={isHovered}
                  setIsHovered={setIsHovered}
                >
                  Search
                </SlideText>
                <icons.search strokeWidth="1" className="ml-2 stroke-[var(--dt-sec-fg)] fill-[var(--dt-sec-fg)]" />
              </motion.button>

              {/* X Close (toggleButton) */}
              <SlideText
                as="div"
                onClick={() => setActiveMenu(!activeMenu)}
                className={`${STYLES.actionButtons}`}
              >
                <div className="flex items-center justify-center gap-[0.2rem]">
                  <icons.plus
                    strokeWidth={"3px"}
                    className="h-[1.3rem] w-[1.3rem] rotate-45"
                  />
                  <span className="hidden sm:block">Close</span>
                </div>
              </SlideText>
            </div>

            {/* Nav Items Area (Middle Content) */}
            <nav
              className={`px-3 md:px-8 flex flex-col gap-2 md:gap-10 font-normal mt-3 md:mt-9`}
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
                  className={`uppercase text-[2rem] md:text-[3.5rem] rounded-md text-[var(--dt-sec-fg)]`}
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <AnimatePresence>
                    {activeMenu && (
                      <motion.div
                        variants={navItemsVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                        exit="initial"
                      >
                        <SplitText
                          className=" leading-[3rem] tracking-wider"
                          front={item}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </nav>

            {/* Bottom Area */}
            <div className="absolute bottom-0 w-full text-[var(--dt-sec-fg)]">
              {/* Social Links */}
              <div className={`px-3 md:px-8 w-full flex justify-between gap-2 lg:gap-4`}>
                {footer.map((item, index) => (
                  <Link
                    key={index}
                    className="flex items-center gap-2 md:h-[65px]"
                    to={item.link}
                    target="_blank"
                  >
                    <AnimatePresence>
                      {activeMenu && (
                        <motion.div
                          variants={socialLinkVariants}
                          initial="initial"
                          animate="animate"
                          custom={index}
                          exit="initial"
                        >
                          <SplitText
                            className="text-[14px] md:text-2xl leading-[1.8rem] tracking-wider"
                            front={item.name}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                ))}
              </div>
              {/* title Marquee */}
              <AnimatePresence>
                {activeMenu && (
                  <motion.div
                    variants={bottomVariants}
                    animate="animate"
                    initial="initial"
                    exit="initial"
                    className="w-full border-[var(--dt-bdr-clr-xtra)] border-t-[1px] md:h-[65px] flex"
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
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
