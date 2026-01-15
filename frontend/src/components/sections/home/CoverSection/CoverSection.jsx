import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SlideText } from "@/components/ui";
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

// Titles array - easy to update from server in future
const leftTitles = ["Developer", "Educator"];
const rightTitles = ["Innovation", "Architect"];

const CoverSection = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Get current and next titles based on index
  const getTitle = (titles, index, position) => {
    const adjustedIndex = (index + position) % titles.length;
    return titles[adjustedIndex];
  };

  // Simple animation cycle
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Trigger animation - slide up
      setIsAnimating(true);

      // Hold at top position, then update indices and slide back down
      setTimeout(() => {
        // Update indices first (so the "front" text is now the new text)
        setLeftIndex((prev) => (prev + 1) % leftTitles.length);
        setRightIndex((prev) => (prev + 1) % rightTitles.length);
      }, 1200); // Wait for slide up (1s) + hold (0.2s)

      // Then release hover state to slide back down
      setTimeout(() => {
        setIsAnimating(false);
      }, 1250); // Slightly after index update
    }, 5000); // Total cycle: 5 seconds between animations

    return () => clearInterval(interval);
  }, [isPaused]);

  // Responsive title styles using clamp for fluid typography
  const titleClass =
    "text-[clamp(2rem,8vw,7rem)] leading-[1.1] font-semibold text-fg-secondary whitespace-nowrap";

  // Smooth easing
  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  return (
    <section className="relative w-full pt-[64px] md:pt-[72px] h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Main Content Container */}
      <div className="h-full flex items-center">
        <div className="w-full h-[90%] flex flex-col">
          {/* Title Grid */}
          <div className="relative flex-1 flex flex-col sm:flex-row justify-between">
            {/* Left Column */}
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-start pt-4">
              <div className="flex justify-end sm:justify-end">
                <SlideText
                  className={titleClass}
                  front={getTitle(leftTitles, leftIndex, 0)}
                  back={getTitle(leftTitles, leftIndex + 1, 0)}
                  isHovered={isAnimating}
                  transition={transition}
                />
              </div>
              <div className="flex justify-start">
                <SlideText
                  className={titleClass}
                  front={getTitle(leftTitles, leftIndex, 1)}
                  back={getTitle(leftTitles, leftIndex + 1, 1)}
                  isHovered={isAnimating}
                  transition={transition}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-end">
              <div className="flex justify-end">
                <SlideText
                  className={titleClass}
                  front={getTitle(rightTitles, rightIndex, 0)}
                  back={getTitle(rightTitles, rightIndex + 1, 0)}
                  isHovered={isAnimating}
                  transition={{ ...transition, delay: 0.15 }}
                />
              </div>
              <div className="flex justify-start sm:justify-start">
                <SlideText
                  className={titleClass}
                  front={getTitle(rightTitles, rightIndex, 1)}
                  back={getTitle(rightTitles, rightIndex + 1, 1)}
                  isHovered={isAnimating}
                  transition={{ ...transition, delay: 0.15 }}
                />
              </div>
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
                onClick={() => setIsPaused(!isPaused)}
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
              className="relative z-10 p-3 sm:p-3.5 rounded-full bg-bg-card border border-border hover:border-border-light text-fg-primary hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <FaPlus className="w-4 h-4" />
            </motion.button>

            {/* Menu Card - Opens downward */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[140px] bg-bg-card border border-border rounded-xl overflow-hidden shadow-xl"
                >
                  {quickLinks.map((item, index) => (
                    <div key={item.label}>
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
                    </div>
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
