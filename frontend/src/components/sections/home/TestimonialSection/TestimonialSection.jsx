import { useRef, useState, useEffect } from "react";
import { testimonials } from "@/assets/assets";
import {
  FaQuoteLeft,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const TestimonialCard = ({
  image,
  linkedInUrl,
  name,
  designation,
  description,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative flex-shrink-0 w-[320px] sm:w-[380px] p-6 sm:p-8 bg-bg-card rounded-2xl border border-border hover:border-border-light transition-all duration-300">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-fg-secondary/20 group-hover:text-fg-secondary/40 transition-colors">
        <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Testimonial Text */}
      <p className="text-sm sm:text-base text-fg-secondary leading-relaxed mb-6 line-clamp-4">
        "{description}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ${
            !imageLoaded ? "skeleton" : ""
          }`}
        >
          <img
            src={image}
            alt={name}
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Designation */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-base sm:text-lg font-semibold text-fg-primary">
              {name}
            </h4>
            <Link
              to={linkedInUrl}
              target="_blank"
              className="text-[#0a66c2] hover:text-[#004182] transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-fg-muted">{designation}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
        {testimonials.map((reviewer, index) => (
          <TestimonialCard
            key={index}
            image={reviewer.image}
            linkedInUrl={reviewer.linkedInUrl}
            name={reviewer.name}
            designation={reviewer.designation}
            description={reviewer.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
