import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FaClock,
  FaGraduationCap,
  FaYoutube,
  FaGlobe,
  FaStar,
  FaUsers,
  FaPlay,
  FaCalendarAlt,
  FaArrowLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiUdemy, SiCoursera, SiSkillshare } from "react-icons/si";
import { coursesList } from "@/assets/assets";

// Helper function to get platform icon
const getPlatformIcon = (iconName, size = "w-5 h-5") => {
  const icons = {
    youtube: <FaYoutube className={`${size} text-red-500`} />,
    udemy: <SiUdemy className={`${size} text-purple-500`} />,
    coursera: <SiCoursera className={`${size} text-blue-500`} />,
    skillshare: <SiSkillshare className={`${size} text-green-500`} />,
    default: <FaGlobe className={`${size} text-fg-secondary`} />,
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

// Format date helper
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesList.find((c) => c._id === id);

  useEffect(() => {
    if (!course) {
      navigate("/404");
    }
  }, [course, navigate]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-fg-muted">Loading course...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <title>{`${course.title} | Saqib Bedar`}</title>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Back Button */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors mb-6"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Courses</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className={`px-3 py-1 text-sm font-medium border rounded-full ${getLevelColor(
                  course.metadata.level
                )}`}
              >
                {course.metadata.level}
              </span>
              {course.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-fg-primary bg-bg-card border border-border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary mb-4 leading-tight">
              {course.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-fg-secondary leading-relaxed mb-6">
              {course.fullDescription}
            </p>

            {/* Stats */}
            <div className="flex items-center flex-wrap gap-4 text-sm text-fg-secondary mb-6">
              <div className="flex items-center gap-1.5">
                <FaStar className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-fg-primary">
                  {course.metadata.rating}
                </span>
                <span className="text-fg-muted">
                  ({course.metadata.totalRatings.toLocaleString()} ratings)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaUsers className="w-4 h-4" />
                <span>
                  {course.metadata.enrolledStudents.toLocaleString()} students
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaClock className="w-4 h-4" />
                <span>{course.metadata.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaGraduationCap className="w-4 h-4" />
                <span>{course.metadata.totalLessons} lessons</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
              <div>
                <p className="font-semibold text-fg-primary">
                  {course.instructor.name}
                </p>
                <p className="text-sm text-fg-muted">{course.instructor.bio}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={course.platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-fg-primary text-bg-primary font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                <FaPlay className="w-4 h-4" />
                {course.pricing.isFree ? "Start Learning" : "Enroll Now"}
              </a>
              <a
                href={course.platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-border-light text-fg-secondary hover:text-fg-primary font-semibold rounded-full transition-colors"
              >
                {getPlatformIcon(course.platform.icon)}
                View on {course.platform.name}
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right - Thumbnail Card */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full aspect-video object-cover"
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <a
                  href={course.platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaPlay className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" />
                </a>
              </div>

              {/* Price Card */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    {course.pricing.isFree ? (
                      <span className="text-2xl font-bold text-green-400">
                        Free
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        {course.pricing.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            ${course.pricing.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-white">
                          ${course.pricing.price}
                        </span>
                        {course.pricing.discount && (
                          <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded">
                            {course.pricing.discount}% OFF
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>
                      Updated {formatDate(course.metadata.lastUpdated)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Stats Footer */}
      <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaClock className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {course.metadata.duration}
              </p>
              <p className="text-sm text-fg-muted">Total Duration</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaGraduationCap className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {course.metadata.totalLessons}
              </p>
              <p className="text-sm text-fg-muted">Total Lessons</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaUsers className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {course.metadata.enrolledStudents.toLocaleString()}
              </p>
              <p className="text-sm text-fg-muted">Enrolled</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaStar className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {course.metadata.rating}
              </p>
              <p className="text-sm text-fg-muted">Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
