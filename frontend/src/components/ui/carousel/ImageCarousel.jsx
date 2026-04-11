import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

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

const ImageCarousel = ({ images = [], title = "Image", className = "" }) => {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (safeImages.length === 0) return null;

  const hasMany = safeImages.length > 1;

  const openCarousel = (index = 0) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const next = () => {
    if (!hasMany) return;
    setActiveIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prev = () => {
    if (!hasMany) return;
    setActiveIndex(
      (prev) => (prev - 1 + safeImages.length) % safeImages.length
    );
  };

  const renderPreviewTile = (src, index, extraCount = 0) => (
    <button
      key={`${src}-${index}`}
      type="button"
      onClick={() => openCarousel(index)}
      className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-bg-card border border-border group text-left"
      aria-label={`Open image ${index + 1} of ${safeImages.length}`}
    >
      <img
        src={src}
        alt={`${title} - ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {extraCount > 0 && (
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] flex items-center justify-center">
          <span className="text-white text-lg sm:text-2xl font-semibold tracking-wide">
            +{extraCount}
          </span>
        </div>
      )}
    </button>
  );

  return (
    <>
      <div className={`mt-4 sm:mt-6 ${className}`}>
        {safeImages.length === 1 && (
          <div className="grid grid-cols-1 gap-2 sm:gap-3">
            {renderPreviewTile(safeImages[0], 0)}
          </div>
        )}

        {safeImages.length === 2 && (
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {renderPreviewTile(safeImages[0], 0)}
            {renderPreviewTile(safeImages[1], 1)}
          </div>
        )}

        {safeImages.length > 2 && (
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {renderPreviewTile(safeImages[0], 0)}
            {renderPreviewTile(safeImages[1], 1, safeImages.length - 2)}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MotionDiv
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border bg-bg-card">
                <img
                  src={safeImages[activeIndex]}
                  alt={`${title} - ${activeIndex + 1}`}
                  className="w-full max-h-[80vh] object-contain bg-black/20"
                />

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                  aria-label="Close carousel"
                >
                  <FaXmark className="w-4 h-4" />
                </button>

                {hasMany && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                <div className="absolute left-1/2 -translate-x-1/2 bottom-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs sm:text-sm font-medium">
                  {activeIndex + 1}/{safeImages.length}
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;
