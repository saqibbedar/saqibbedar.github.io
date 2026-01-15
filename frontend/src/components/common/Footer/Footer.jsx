import { footer, author } from "@/assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-t border-border-light">
      <div className="flex flex-col-reverse items-start gap-5 py-8 sm:flex-row sm:justify-between sm:items-center sm:py-6">
        {/* Copyright */}
        <div className="text-fg-muted text-sm">
          <Link to="/About" className="hover:text-fg-primary transition-colors">
            {author.name}
          </Link>{" "}
          © <span>2024-{new Date().getFullYear()}</span>
        </div>

        {/* Social Links */}
        <nav className="flex items-center gap-5 sm:gap-6">
          {footer.map((data, index) => (
            <Link
              key={index}
              to={data.link}
              target="_blank"
              className="text-fg-muted hover:text-fg-primary transition-colors"
              aria-label={data.name}
            >
              <data.icon className="w-5 h-5" fill="currentColor" />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
