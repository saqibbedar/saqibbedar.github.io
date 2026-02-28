import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaYoutube,
  FaBell,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const upcomingCourses = [
  {
    icon: FaCode,
    title: "Data Structures & Algorithms",
    description:
      "Master problem-solving with comprehensive DSA tutorials in C++ and JavaScript",
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack Web Development",
    description:
      "Build modern web applications with React, Node.js, and databases",
  },
  {
    icon: FaRocket,
    title: "Project-Based Learning",
    description:
      "Learn by building real-world projects from scratch to deployment",
  },
];

const Courses = () => {
  return (
    <>
      <title>Saqib Bedar | Courses</title>
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-screen">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
            Learning
          </h2>
          <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
            Courses & Tutorials
          </p>
        </div>

        {/* Coming Soon Announcement */}
        <div className="max-w-4xl mx-auto">
          {/* Main Announcement Card */}
          <div className="relative bg-bg-card rounded-2xl border border-border p-8 sm:p-12 text-center mb-10 overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-btn-primary-bg/5 to-transparent pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Under Development
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary mb-4">
              Courses Coming Soon!
            </h3>
            <p className="text-fg-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              I'm working hard to create high-quality, comprehensive courses
              that will help you level up your programming skills. Stay tuned
              for structured learning paths, hands-on projects, and in-depth
              tutorials.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="https://youtube.com/@bedarmind"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
                Watch on YouTube
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-card border border-border hover:border-border-light text-fg-primary rounded-full font-medium transition-colors"
              >
                <FaBell className="w-4 h-4" />
                Get Notified
              </Link>
            </div>
          </div>

          {/* Upcoming Courses Preview */}
          <div className="mb-8">
            <h4 className="text-lg sm:text-xl font-semibold text-fg-primary mb-6 text-center">
              What to Expect
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {upcomingCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6 text-center hover:border-border-light transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-btn-primary-bg/50 rounded-xl mb-4">
                    <course.icon className="w-6 h-6 text-fg-primary" />
                  </div>
                  <h5 className="text-base font-semibold text-fg-primary mb-2">
                    {course.title}
                  </h5>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-sm text-fg-muted">
            Meanwhile, check out my free projects on {" "}
            <Link
              to="https://github.com/saqibbedar"
              target="_blank"
              className="text-fg-secondary hover:text-fg-primary underline underline-offset-2"
            >
              GitHub
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Courses;
