import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaClock,
  FaGraduationCap,
  FaYoutube,
  FaGlobe,
  FaStar,
  FaUsers,
} from "react-icons/fa6";
import { SiUdemy, SiCoursera, SiSkillshare } from "react-icons/si";
import { coursesList } from "@/assets/assets";

// Helper function to get platform icon
const getPlatformIcon = (iconName) => {
  const icons = {
    youtube: <FaYoutube className="w-4 h-4 text-red-500" />,
    udemy: <SiUdemy className="w-4 h-4 text-purple-500" />,
    coursera: <SiCoursera className="w-4 h-4 text-blue-500" />,
    skillshare: <SiSkillshare className="w-4 h-4 text-green-500" />,
    default: <FaGlobe className="w-4 h-4 text-fg-secondary" />,
  };
  return icons[iconName] || icons.default;
};

// Helper function to get level badge color
const getLevelColor = (level) => {
  const colors = {
    Beginner: "bg-green-500/10 text-green-500 border-green-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Advanced: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return colors[level] || colors.Beginner;
};

// Course Card Component
const CourseCard = ({ course }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/courses/${course._id}`}
      className="group bg-bg-card rounded-2xl border border-border hover:border-border-light transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 sm:h-48 w-full overflow-hidden ${
          !imageLoaded ? "skeleton" : ""
        }`}
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md text-white text-xs font-medium">
          <FaClock className="w-3 h-3" />
          {course.metadata.duration}
        </div>
        {/* Free Badge */}
        {course.pricing.isFree && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-green-500 rounded-md text-white text-xs font-semibold uppercase">
            Free
          </div>
        )}
        {/* Discount Badge */}
        {!course.pricing.isFree && course.pricing.discount && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-red-500 rounded-md text-white text-xs font-semibold">
            {course.pricing.discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Tags & Level */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`px-2.5 py-0.5 text-xs font-medium border rounded-full ${getLevelColor(
              course.metadata.level
            )}`}
          >
            {course.metadata.level}
          </span>
          {course.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-xs font-medium text-fg-secondary bg-bg-card border border-border-light rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-fg-primary mb-2 line-clamp-2 group-hover:text-fg-secondary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-fg-muted leading-relaxed line-clamp-2 mb-4">
          {course.shortDescription}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs text-fg-secondary mb-4">
          <div className="flex items-center gap-1">
            <FaStar className="w-3.5 h-3.5 text-yellow-500" />
            <span className="font-medium">{course.metadata.rating}</span>
            <span className="text-fg-muted">
              ({course.metadata.totalRatings})
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="w-3.5 h-3.5" />
            <span>
              {course.metadata.enrolledStudents.toLocaleString()} students
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaGraduationCap className="w-3.5 h-3.5" />
            <span>{course.metadata.totalLessons} lessons</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {/* Platform */}
          <div className="flex items-center gap-2">
            {getPlatformIcon(course.platform.icon)}
            <span className="text-sm font-medium text-fg-secondary">
              {course.platform.name}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            {course.pricing.isFree ? (
              <span className="text-base font-bold text-green-500">Free</span>
            ) : (
              <>
                {course.pricing.originalPrice && (
                  <span className="text-sm text-fg-muted line-through">
                    ${course.pricing.originalPrice}
                  </span>
                )}
                <span className="text-base font-bold text-fg-primary">
                  ${course.pricing.price}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const CoursesView = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Learning
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Courses & Tutorials
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesList.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesView;
