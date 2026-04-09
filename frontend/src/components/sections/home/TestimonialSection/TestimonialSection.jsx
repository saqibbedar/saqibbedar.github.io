import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaGlobe, FaEnvelope, FaComments, FaLink } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { useContent } from "@/context";

const MotionDiv = motion.div;

const elegantEase = [0.76, 0, 0.24, 1];
const smoothEase = [0.22, 1, 0.36, 1];

const modalOverlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: elegantEase,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
};

const modalContentVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.25,
      ease: elegantEase,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

const getLinkType = (url, urlType) => {
  if (urlType) return String(urlType).toLowerCase();
  if (!url) return "link";

  const normalizedUrl = String(url).toLowerCase();
  if (normalizedUrl.startsWith("mailto:") || normalizedUrl.startsWith("tel:")) {
    return "contact";
  }

  if (
    normalizedUrl.includes("whatsapp") ||
    normalizedUrl.includes("wa.me") ||
    normalizedUrl.includes("telegram") ||
    normalizedUrl.includes("t.me") ||
    normalizedUrl.includes("discord") ||
    normalizedUrl.includes("messenger") ||
    normalizedUrl.includes("chat")
  ) {
    return "chat";
  }

  if (
    normalizedUrl.includes("github.com") ||
    normalizedUrl.includes("linkedin.com") ||
    normalizedUrl.includes("x.com") ||
    normalizedUrl.includes("twitter.com")
  ) {
    return "link";
  }

  if (
    normalizedUrl.startsWith("http://") ||
    normalizedUrl.startsWith("https://")
  ) {
    return "globe";
  }

  return "link";
};

const getLinkIcon = (url, urlType) => {
  const type = getLinkType(url, urlType);
  const map = {
    globe: FaGlobe,
    contact: FaEnvelope,
    chat: FaComments,
    link: FaLink,
  };

  return {
    Icon: map[type] || FaLink,
    type,
  };
};

const TestimonialCard = ({
  image,
  url,
  urlType,
  name,
  designation,
  description,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  const safeName = name || "Anonymous";
  const safeDesignation = designation || "Professional";
  const safeDescription = description || "No testimonial available yet.";
  const avatarInitial = safeName.charAt(0).toUpperCase();
  const { Icon: ExternalIcon, type: externalType } = getLinkIcon(url, urlType);

  const checkOverflow = useCallback(() => {
    const textElement = textRef.current;
    if (!textElement) {
      setIsOverflowing(false);
      return;
    }

    // Tiny threshold avoids flicker from sub-pixel rounding differences.
    setIsOverflowing(textElement.scrollHeight - textElement.clientHeight > 1);
  }, []);

  useEffect(() => {
    // Reset image loaded state when image URL changes
    setImageLoaded(false);
    setImageError(false);
  }, [image]);

  useEffect(() => {
    if (!image) return;

    const imageElement = new Image();
    imageElement.src = image;

    if (imageElement.complete && imageElement.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [image]);

  useEffect(() => {
    checkOverflow();

    const rafId = window.requestAnimationFrame(checkOverflow);
    const textElement = textRef.current;
    const resizeHandler = () => checkOverflow();

    window.addEventListener("resize", resizeHandler);

    let observer;
    if (textElement && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => {
        checkOverflow();
      });
      observer.observe(textElement);
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(checkOverflow).catch(() => {
        // Ignore font API errors; resize observer still keeps this updated.
      });
    }

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [safeDescription, checkOverflow]);

  return (
    <>
      <div className="group relative flex-shrink-0 w-full sm:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)] p-6 sm:p-7 bg-bg-card rounded-2xl border border-border hover:border-border-light transition-all duration-300">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-fg-secondary/20 group-hover:text-fg-secondary/40 transition-colors">
          <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Testimonial Text */}
        <div className="relative mb-6">
          <p
            ref={textRef}
            className="text-fg-secondary text-sm sm:text-base leading-relaxed line-clamp-4 pr-20"
          >
            "{safeDescription}"
          </p>
          {isOverflowing && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-0 right-0 px-1 text-sm font-medium text-fg-secondary bg-bg-card hover:text-fg-primary transition-colors"
            >
              Read more
            </button>
          )}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden`}
          >
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-bg-card">
                <div className="w-12 h-12 bg-border rounded-full animate-pulse"></div>
              </div>
            )}
            {!imageError ? (
              <img
                src={image}
                alt={safeName}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                className={`w-full h-full object-cover ${
                  !imageLoaded ? "opacity-0" : "opacity-100"
                }`}
              />
            ) : (
              <div className="w-full h-full bg-bg-secondary flex items-center justify-center text-fg-primary font-semibold">
                {avatarInitial}
              </div>
            )}
          </div>

          {/* Name & Designation */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-base sm:text-lg font-semibold text-fg-primary truncate">
                {safeName}
              </h4>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                  title={externalType}
                  aria-label={`${safeName}'s ${externalType} link`}
                >
                  <ExternalIcon className="w-3 h-3 text-fg-secondary" />
                </a>
              )}
            </div>
            <p className="text-xs sm:text-sm text-fg-muted">
              {safeDesignation}
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <MotionDiv
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MotionDiv
              className="w-full max-w-lg rounded-2xl border border-border bg-bg-card p-6 sm:p-7"
              onClick={(event) => event.stopPropagation()}
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold text-fg-primary">
                  {safeName}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors"
                >
                  Close
                </button>
              </div>
              <p className="text-sm text-fg-muted mb-4">{safeDesignation}</p>
              <p className="text-sm sm:text-base text-fg-secondary leading-relaxed">
                "{safeDescription}"
              </p>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const { testimonials } = useContent();
  const visibleTestimonials = useMemo(() => {
    if (!Array.isArray(testimonials)) return [];

    return [...testimonials]
      .sort((left, right) => {
        const leftPriority = Number.isFinite(Number(left?.priority))
          ? Number(left.priority)
          : Number.MAX_SAFE_INTEGER;
        const rightPriority = Number.isFinite(Number(right?.priority))
          ? Number(right.priority)
          : Number.MAX_SAFE_INTEGER;

        return leftPriority - rightPriority;
      })
      .slice(0, 5);
  }, [testimonials]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Check scroll state on mount and when window resizes
  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Re-check scroll controls when testimonials load/update.
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      checkScroll();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [visibleTestimonials.length]);

  // Watch container size/content changes to keep arrows in sync.
  useEffect(() => {
    if (!scrollRef.current || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      checkScroll();
    });

    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, [visibleTestimonials.length]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
            Testimonials
          </h2>
          <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
            What People Say
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border border-border transition-all duration-200 ${
              canScrollLeft
                ? "hover:bg-btn-primary-bg hover:border-border-light text-fg-primary cursor-pointer"
                : "text-fg-muted/30 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border border-border transition-all duration-200 ${
              canScrollRight
                ? "hover:bg-btn-primary-bg hover:border-border-light text-fg-primary cursor-pointer"
                : "text-fg-muted/30 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 hide-scrollbar"
      >
        {visibleTestimonials.map((reviewer, index) => (
          <TestimonialCard
            key={`${reviewer._id ?? "testimonial"}-${index}`}
            image={reviewer.image || reviewer.avatar || reviewer.photo}
            url={reviewer.url || reviewer.link || reviewer.website}
            urlType={reviewer.urlType}
            name={reviewer.name || reviewer.fullName}
            designation={reviewer.designation || reviewer.role}
            description={reviewer.description || reviewer.testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
