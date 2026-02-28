import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaPlay,
  FaPause,
  FaChevronDown,
  FaPlus,
  FaUser,
  FaEnvelope,
  FaCompass,
  FaServicestack,
} from "react-icons/fa6";

// Smooth easing
const smoothEase = [0.32, 0.72, 0, 1];

// Titles array - easy to update from server in future
const leftTitles = ["Developer", "Educator"];
const rightTitles = ["Innovation", "Architect"];

// Menu item animation variants
const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.25,
      delay: i * 0.05,
      ease: smoothEase,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: {
      duration: 0.2,
      delay: (3 - i) * 0.03,
      ease: smoothEase,
    },
  }),
};

// Animated title with crossfade (no empty state)
const AnimatedTitle = ({ text, className, align = "left" }) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Mark first render as complete after mount
    isFirstRender.current = false;
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${
        align === "right" ? "flex justify-end" : "flex justify-start"
      }`}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={text}
          className={className}
          initial={
            isFirstRender.current
              ? false
              : { y: "100%", opacity: 0, filter: "blur(4px)" }
          }
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const CoverSection = () => {
  // Two separate indices for staggered pair animation
  const [pairAIndex, setPairAIndex] = useState(0); // Controls: left-top & right-bottom
  const [pairBIndex, setPairBIndex] = useState(0); // Controls: left-bottom & right-top
  const [isPaused, setIsPaused] = useState(() => {
    // Only pause if user explicitly paused before
    const saved = localStorage.getItem("coverAnimationPaused");
    return saved === "true";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Persist pause preference
  const togglePause = () => {
    setIsPaused((prev) => {
      const newValue = !prev;
      localStorage.setItem("coverAnimationPaused", String(newValue));
      return newValue;
    });
  };

  // Quick links menu items
  const quickLinks = [
    { icon: FaUser, label: "About", to: "/about" },
    { icon: FaServicestack, label: "Services", to: "/services" },
    { icon: FaEnvelope, label: "Contact", to: "/contact" },
    {
      icon: FaCompass,
      label: "Explore",
      to: "#skills",
      isScroll: true,
    },
  ];

  // Staggered animation cycle
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // First pair animates
      setPairAIndex((prev) => prev + 1);

      // Second pair animates after delay
      setTimeout(() => {
        setPairBIndex((prev) => prev + 1);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Responsive title styles
  const titleClass =
    "text-[clamp(2rem,8vw,7rem)] leading-[1.1] font-semibold text-fg-secondary whitespace-nowrap";

  return (
    <section className="relative w-full pt-[64px] md:pt-[72px] h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Main Content Container */}
      <div className="h-full flex items-center">
        <div className="w-full h-[90%] flex flex-col">
          {/* Title Grid */}
          <div className="relative flex-1 flex flex-col sm:flex-row justify-between">
            {/* Left Column */}
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-start pt-4">
              {/* Left Top - Pair A */}
              <AnimatedTitle
                text={leftTitles[pairAIndex % leftTitles.length]}
                className={titleClass}
                align="right"
              />
              {/* Left Bottom - Pair B */}
              <AnimatedTitle
                text={leftTitles[(pairBIndex + 1) % leftTitles.length]}
                className={titleClass}
                align="left"
              />
            </div>

            {/* Right Column */}
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-end">
              {/* Right Top - Pair B */}
              <AnimatedTitle
                text={rightTitles[pairBIndex % rightTitles.length]}
                className={titleClass}
                align="right"
              />
              {/* Right Bottom - Pair A */}
              <AnimatedTitle
                text={rightTitles[(pairAIndex + 1) % rightTitles.length]}
                className={titleClass}
                align="left"
              />
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="w-full mt-4 sm:mt-2 flex flex-row-reverse sm:flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-fg-primary">
                Available for full time & Freelance
              </span>
              <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-fg-secondary text-right sm:text-left">
                Work from Feb '23
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Pause/Play Button */}
              <button
                onClick={togglePause}
                className="p-2.5 sm:p-3 rounded-full border border-border hover:border-border-light hover:bg-btn-primary-bg text-fg-secondary hover:text-fg-primary transition-all duration-200 cursor-pointer"
                aria-label={isPaused ? "Play animation" : "Pause animation"}
              >
                {isPaused ? (
                  <FaPlay className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                ) : (
                  <FaPause className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                )}
              </button>

              {/* Scroll Down Button */}
              <a
                href="#skills"
                className="p-2.5 sm:p-3 rounded-full border border-border hover:border-border-light hover:bg-btn-primary-bg text-fg-secondary hover:text-fg-primary transition-all duration-200 cursor-pointer"
                aria-label="Scroll to skills"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Center Profile Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Profile Image */}
          <div className="w-[clamp(12rem,25vw,20rem)] aspect-square overflow-hidden rounded-full pointer-events-none">
            <img
              src="/images/saqibbedar.png"
              className="w-full h-full object-cover object-center grayscale"
              alt="Saqib Bedar"
              loading="eager"
            />
          </div>

          {/* Quick Links FAB - Exactly on 45° edge (cos45° ≈ 0.707, so 50% - 50%*0.707 ≈ 14.6%) */}
          <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2">
            {/* Toggle Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-10 p-3 sm:p-3.5 rounded-full bg-bg-card border border-border hover:border-border-light text-fg-primary transition-colors duration-200 cursor-pointer shadow-lg"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: smoothEase }}
              >
                <FaPlus className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Menu Card - Opens downward */}
            <AnimatePresence mode="popLayout">
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -15 }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[140px] bg-bg-card border border-border rounded-xl overflow-hidden shadow-xl"
                >
                  {quickLinks.map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={index}
                    >
                      {item.isScroll ? (
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            document
                              .getElementById("skills")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-fg-secondary hover:text-fg-primary hover:bg-btn-primary-bg/50 transition-all duration-200 cursor-pointer"
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </button>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-fg-secondary hover:text-fg-primary hover:bg-btn-primary-bg/50 transition-all duration-200"
                        >
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </Link>
                      )}
                      {index < quickLinks.length - 1 && (
                        <div className="mx-3 border-t border-border" />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
