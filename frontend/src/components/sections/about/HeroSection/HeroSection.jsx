// import "./HeroSection.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const HeroSection = ({ name, description, cv_url, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div
            className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden group ${
              !imageLoaded ? "skeleton" : ""
            }`}
          >
            <img
              src={image}
              alt={name}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting */}
          <p className="text-fg-secondary text-sm sm:text-base font-medium uppercase tracking-widest mb-2">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-fg-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {name}
          </h1>

          {/* Description */}
          <p className="text-fg-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 md:mb-8">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            {/* Download CV Button */}
            <a
              href={cv_url}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-fg-primary text-bg-primary rounded-full font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              <FaDownload className="w-4 h-4" />
              Download CV
            </a>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-bg-card border border-border hover:border-border-light rounded-full font-medium text-sm sm:text-base text-fg-secondary hover:text-fg-primary transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              Contact
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-2 ml-0 sm:ml-2">
              <a
                href="https://github.com/saqibbedar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-border hover:border-border-light hover:bg-btn-primary-bg text-fg-secondary hover:text-fg-primary transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/saqibbedar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-border hover:border-border-light hover:bg-btn-primary-bg text-fg-secondary hover:text-fg-primary transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
