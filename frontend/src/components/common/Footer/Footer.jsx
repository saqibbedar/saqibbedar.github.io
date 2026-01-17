import { footer, author } from "@/assets/assets";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

// Footer links data
const footerLinks = {
  explore: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Courses", path: "/courses" },
  ],
  services: [
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Sitemap", path: "/sitemap" },
  ],
};

const Footer = () => {

  const currentPath = window.location.pathname; // Get current path

  return (
    // Footer hidden on /search page
    <footer className={` ${currentPath === "/search" ? "hidden" : "w-full"} border-t border-border`}>
      {/* Main Footer */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            {/* Big BEDAR Text */}
            <Link to="/about" className="block mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fg-primary tracking-tight">
                Saqib Bedar
              </h2>
            </Link>
            <p className="text-fg-secondary text-sm sm:text-base leading-relaxed max-w-sm mb-6">
              Building digital experiences with passion. Developer, creator, and
              lifelong learner sharing knowledge with the community.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {footer.map((data, index) => (
                <a
                  key={index}
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-card border border-border hover:border-border-light flex items-center justify-center text-fg-muted hover:text-fg-primary transition-colors"
                  aria-label={data.name}
                >
                  <data.icon className="w-4 h-4" fill="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Explore */}
              <div>
                <h3 className="text-fg-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Explore
                </h3>
                <ul className="space-y-3">
                  {footerLinks.explore.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-fg-secondary hover:text-fg-primary text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-fg-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-fg-secondary hover:text-fg-primary text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-fg-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-fg-secondary hover:text-fg-primary text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-fg-muted text-sm text-center sm:text-left">
              © 2024-{new Date().getFullYear()}{" "}
              <Link
                to="/about"
                className="text-fg-secondary hover:text-fg-primary transition-colors"
              >
                {author.name}
              </Link>
              . All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-fg-muted text-sm flex items-center gap-1.5">
              Made with <FaHeart className="w-3.5 h-3.5 text-red-500" /> in
              Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
