import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowUp, IoMdSearch, IoMdClose, IoMdSend } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

// Smooth easing
const smoothEase = [0.32, 0.72, 0, 1];

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem("fabMenuExpanded");
    return saved === "true";
  });
  const [showInput, setShowInput] = useState(() => {
    const saved = localStorage.getItem("fabSearchOpen");
    return saved === "true";
  });
  const [query, setQuery] = useState("");
  const path = window.location.pathname;
  const navigate = useNavigate();

  // Persist expanded preference
  const toggleExpanded = () => {
    setIsExpanded((prev) => {
      const newValue = !prev;
      localStorage.setItem("fabMenuExpanded", String(newValue));
      return newValue;
    });
  };

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

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowInput(false);
      localStorage.setItem("fabSearchOpen", "false");
      setIsExpanded(false);
      localStorage.setItem("fabMenuExpanded", "false");
      setQuery("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Escape") {
      setShowInput(false);
      localStorage.setItem("fabSearchOpen", "false");
      setQuery("");
    }
  };

  const openSearchInput = () => {
    setShowInput(true);
    localStorage.setItem("fabSearchOpen", "true");
  };

  const closeSearchInput = () => {
    setShowInput(false);
    localStorage.setItem("fabSearchOpen", "false");
    setQuery("");
  };

  // Button styles
  const buttonBase =
    "w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer";
  const primaryButton = `${buttonBase} bg-fg-primary text-bg-primary hover:opacity-90`;
  const secondaryButton = `${buttonBase} bg-bg-card border border-border text-fg-primary hover:border-border-light`;

  // Animation variants for action buttons
  const actionButtonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: 40,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.35,
        delay: i * 0.06,
        ease: smoothEase,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      scale: 0.3,
      x: 30,
      transition: {
        duration: 0.25,
        delay: (1 - i) * 0.04,
        ease: smoothEase,
      },
    }),
  };

  return (
    <div
      className={`${
        path === "/search" ? "hidden" : ""
      } fixed bottom-6 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-50 flex items-center gap-2 transition-all duration-300 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <AnimatePresence mode="popLayout">
        {/* Search Input Bar */}
        {showInput && (
          <motion.div
            key="search-input"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="flex items-center gap-2 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.25, ease: smoothEase }}
              className="flex items-center bg-bg-card border border-border rounded-full overflow-hidden shadow-lg"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                autoFocus
                className="w-40 sm:w-52 px-4 py-2.5 sm:py-3 bg-transparent text-fg-primary text-sm outline-none placeholder:text-fg-muted"
              />
              <button
                onClick={handleSearch}
                disabled={!query.trim()}
                className={`p-2.5  mr-1 rounded-full transition-colors cursor-pointer ${
                  query.trim()
                    ? "text-fg-primary hover:bg-btn-primary-bg"
                    : "text-fg-muted cursor-not-allowed"
                }`}
                aria-label="Search"
              >
                <IoMdSend className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, ease: smoothEase }}
              onClick={closeSearchInput}
              className={secondaryButton}
              aria-label="Close search"
            >
              <IoMdClose className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Expanded Action Buttons */}
        {isExpanded && !showInput && (
          <>
            {/* Scroll to Top */}
            <motion.button
              key="scroll-top"
              variants={actionButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={1}
              onClick={scrollToTop}
              className={secondaryButton}
              aria-label="Back to top"
            >
              <IoIosArrowUp className="w-5 h-5" />
            </motion.button>

            {/* Search */}
            <motion.button
              key="search"
              variants={actionButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0}
              onClick={openSearchInput}
              className={secondaryButton}
              aria-label="Search"
            >
              <IoMdSearch className="w-5 h-5" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button (Three Dots / Close) */}
      {!showInput && (
        <motion.button
          onClick={toggleExpanded}
          className={primaryButton}
          aria-label={isExpanded ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.25, ease: smoothEase }}
          >
            {isExpanded ? (
              <IoMdClose className="w-5 h-5" />
            ) : (
              <BsThreeDots className="w-5 h-5" />
            )}
          </motion.div>
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;
