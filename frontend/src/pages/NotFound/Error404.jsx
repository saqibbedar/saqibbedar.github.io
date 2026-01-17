import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";

const Error404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-8 flex items-center justify-center">
          <span className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-fg-primary/10 leading-none select-none">
            4
          </span>
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-bg-card border-2 border-border flex items-center justify-center">
              <FaSearch className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-fg-secondary" />
            </div>
          </div>
          <span className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-fg-primary/10 leading-none select-none">
            4
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-fg-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-fg-primary text-bg-primary font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <FaHome className="w-4 h-4" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-border-light text-fg-secondary hover:text-fg-primary font-medium rounded-full transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-fg-muted mb-4">Or try these pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Projects", "Courses", "Services", "About", "Contact"].map(
              (page) => (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full hover:border-border-light hover:text-fg-primary transition-colors"
                >
                  {page}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
