import { useRef, useState, useEffect } from "react";
// import "./CertificateSection.css";
import { CertificateCard } from "@/components/ui";
import { certificates } from "@/assets/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CertificateSection = () => {
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
      const scrollAmount = 360;
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
            Achievements
          </h2>
          <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
            Certificates & Credentials
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

      {/* Certificates Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 hide-scrollbar"
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate._id}
            image={certificate.image}
            title={certificate.title}
            description={certificate.description}
            providerLogo={certificate.providerLogo}
            providerName={certificate.providerName}
            credentialUrl={certificate.credentialUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
