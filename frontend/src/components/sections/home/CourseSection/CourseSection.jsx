import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar, FaPlay } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiUdemy, SiCoursera } from "react-icons/si";
import { coursesList } from "@/assets/courses";

// Platform icon mapping
const platformIcons = {
  youtube: FaYoutube,
  udemy: SiUdemy,
  coursera: SiCoursera,
};

// Course Card Component
const CourseCard = ({ course }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const PlatformIcon = platformIcons[course.platform.icon] || FaPlay;

  return (
    <Link
      to={`/courses/${course._id || course.slug}`}
      className="group flex-shrink-0 w-[300px] sm:w-[340px] bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-border-light transition-colors"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 overflow-hidden ${
          !imageLoaded ? "skeleton" : ""
        }`}
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Platform Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-md text-white text-xs font-medium">
          <PlatformIcon className="w-3.5 h-3.5" />
          {course.platform.name}
        </div>
        {/* Free/Paid Badge */}
        <div
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold ${
            course.pricing.isFree
              ? "bg-green-500/90 text-white"
              : "bg-bg-card/90 backdrop-blur-sm text-fg-primary"
          }`}
        >
          {course.pricing.isFree ? "Free" : `$${course.pricing.price}`}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {course.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-medium text-fg-muted bg-bg-primary border border-border rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-fg-primary group-hover:text-fg-secondary transition-colors line-clamp-1 mb-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-fg-muted line-clamp-2 mb-4">
          {course.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-fg-muted">
          <div className="flex items-center gap-3">
            <span>{course.metadata.duration}</span>
            <span>·</span>
            <span>{course.metadata.totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="w-3 h-3 text-yellow-500" />
            <span className="text-fg-secondary font-medium">
              {course.metadata.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CourseSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const featuredCourses = coursesList.filter((c) => c.featured);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

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
            Learning
          </h2>
          <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
            Featured Courses
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border border-border transition-colors ${
              canScrollLeft
                ? "hover:bg-btn-primary-bg hover:border-border-light text-fg-primary cursor-pointer"
                : "text-fg-muted/30 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border border-border transition-colors ${
              canScrollRight
                ? "hover:bg-btn-primary-bg hover:border-border-light text-fg-primary cursor-pointer"
                : "text-fg-muted/30 cursor-not-allowed"
            }`}
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Courses Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 hide-scrollbar"
      >
        {featuredCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* View All Link */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6">
        <Link
          to="/courses"
          className="inline-block px-6 py-3 text-sm sm:text-base font-semibold text-fg-primary bg-btn-primary-bg hover:bg-btn-primary-hover rounded-full transition-colors"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
};

export default CourseSection;
