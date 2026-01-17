import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaSearch,
  FaShieldAlt,
  FaFileContract,
  FaExclamationTriangle,
  FaSitemap,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Sitemap data organized by category
const sitemapData = [
  {
    category: "Main Pages",
    description: "Core pages of the website",
    links: [
      {
        name: "Home",
        path: "/",
        icon: FaHome,
        description: "Welcome page with overview of my work and skills",
      },
      {
        name: "About",
        path: "/about",
        icon: FaUser,
        description: "Learn more about me, my background, and experience",
      },
      {
        name: "Contact",
        path: "/contact",
        icon: FaEnvelope,
        description: "Get in touch with me for inquiries or opportunities",
      },
    ],
  },
  {
    category: "Portfolio",
    description: "Explore my work and learning resources",
    links: [
      {
        name: "Projects",
        path: "/projects",
        icon: FaProjectDiagram,
        description: "Browse my open-source projects and contributions",
      },
      {
        name: "Courses",
        path: "/courses",
        icon: FaGraduationCap,
        description: "View courses and tutorials I've created or recommend",
      },
    ],
  },
  {
    category: "Services",
    description: "Professional services I offer",
    links: [
      {
        name: "Services",
        path: "/services",
        icon: FaBriefcase,
        description: "Hire me, book consultation, speaking, teaching, and more",
      },
    ],
  },
  {
    category: "Utility",
    description: "Helpful tools and pages",
    links: [
      {
        name: "Search",
        path: "/search",
        icon: FaSearch,
        description: "Search across projects, courses, and content",
      },
      {
        name: "Sitemap",
        path: "/sitemap",
        icon: FaSitemap,
        description: "You are here - complete site navigation",
      },
    ],
  },
  {
    category: "Legal",
    description: "Policies and terms",
    links: [
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
        icon: FaShieldAlt,
        description: "How I collect, use, and protect your data",
      },
      {
        name: "Terms & Conditions",
        path: "/terms-conditions",
        icon: FaFileContract,
        description: "Rules and guidelines for using this website",
      },
    ],
  },
  {
    category: "Error Pages",
    description: "Error handling pages",
    links: [
      {
        name: "404 - Not Found",
        path: "/404",
        icon: FaExclamationTriangle,
        description: "Page displayed when a route doesn't exist",
      },
    ],
  },
];

// External links
const externalLinks = [
  { name: "GitHub", url: "https://github.com/saqibbedar" },
  { name: "LinkedIn", url: "https://linkedin.com/in/saqibbedar" },
  { name: "Twitter / X", url: "https://twitter.com/saqibbedar" },
  { name: "YouTube", url: "https://youtube.com/@bedarsaqib" },
  { name: "Buy Me a Coffee", url: "https://buymeacoffee.com/saqibbedar" },
];

// Link Card Component
const LinkCard = ({ link }) => {
  const Icon = link.icon;

  return (
    <Link
      to={link.path}
      className="group flex items-start gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-border-light transition-all"
    >
      <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center flex-shrink-0 group-hover:border-border-light transition-colors">
        <Icon className="w-5 h-5 text-fg-secondary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-fg-primary group-hover:text-fg-secondary transition-colors">
            {link.name}
          </h3>
          <FaArrowRight className="w-3 h-3 text-fg-muted opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-fg-muted mt-0.5 line-clamp-2">
          {link.description}
        </p>
        <p className="text-xs text-fg-muted/60 mt-1 font-mono">{link.path}</p>
      </div>
    </Link>
  );
};

// Category Section Component
const CategorySection = ({ category, description, links }) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold text-fg-primary">{category}</h2>
      <p className="text-sm text-fg-muted">{description}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link, index) => (
        <LinkCard key={index} link={link} />
      ))}
    </div>
  </div>
);

const Sitemap = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <title>Sitemap | Saqib Bedar</title>

      {/* Header */}
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <FaSitemap className="w-6 h-6 text-cyan-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary">
              Sitemap
            </h1>
          </div>
        </div>
        <p className="text-fg-secondary max-w-2xl">
          A complete overview of all pages on this website. Use this page to
          navigate and explore different sections quickly.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 md:mb-14">
        <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
          <p className="text-2xl font-bold text-fg-primary">
            {sitemapData.reduce((acc, cat) => acc + cat.links.length, 0)}
          </p>
          <p className="text-sm text-fg-muted">Total Pages</p>
        </div>
        <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
          <p className="text-2xl font-bold text-fg-primary">
            {sitemapData.length}
          </p>
          <p className="text-sm text-fg-muted">Categories</p>
        </div>
        <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
          <p className="text-2xl font-bold text-fg-primary">
            {externalLinks.length}
          </p>
          <p className="text-sm text-fg-muted">External Links</p>
        </div>
        <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
          <p className="text-2xl font-bold text-fg-primary">∞</p>
          <p className="text-sm text-fg-muted">Dynamic Routes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl space-y-10 md:space-y-14">
        {/* Site Pages */}
        {sitemapData.map((section, index) => (
          <CategorySection
            key={index}
            category={section.category}
            description={section.description}
            links={section.links}
          />
        ))}

        {/* Dynamic Routes Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-fg-primary">
              Dynamic Routes
            </h2>
            <p className="text-sm text-fg-muted">
              Pages generated based on content
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FaProjectDiagram className="w-4 h-4 text-fg-secondary" />
                <h3 className="font-medium text-fg-primary">Project Details</h3>
              </div>
              <p className="text-sm text-fg-muted mb-2">
                Individual project pages with full details
              </p>
              <p className="text-xs text-fg-muted/60 font-mono">
                /projects/:id
              </p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FaGraduationCap className="w-4 h-4 text-fg-secondary" />
                <h3 className="font-medium text-fg-primary">Course Details</h3>
              </div>
              <p className="text-sm text-fg-muted mb-2">
                Individual course pages with full information
              </p>
              <p className="text-xs text-fg-muted/60 font-mono">/courses/:id</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FaSearch className="w-4 h-4 text-fg-secondary" />
                <h3 className="font-medium text-fg-primary">Search Results</h3>
              </div>
              <p className="text-sm text-fg-muted mb-2">
                Search results based on query
              </p>
              <p className="text-xs text-fg-muted/60 font-mono">
                /search/:query
              </p>
            </div>
          </div>
        </div>

        {/* External Links Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-fg-primary">
              External Links
            </h2>
            <p className="text-sm text-fg-muted">
              Connect with me on other platforms
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full hover:border-border-light hover:text-fg-primary transition-colors"
              >
                {link.name}
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-fg-muted">
            This sitemap is automatically updated to reflect the current
            structure of the website. For the XML sitemap used by search
            engines, please refer to{" "}
            <span className="font-mono text-fg-secondary">/sitemap.xml</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
