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
  FaBookOpen,
} from "react-icons/fa";
import { useContent } from "@/context";
import { PageMeta } from "@/components/ui/PageMeta";
import { getPageMeta } from "@/assets";

const REPO_BASE_URL = "https://github.com/saqibbedar/saqibbedar.github.io";
const SITEMAP_JSON_REPO_PATH = "frontend/public/data/json/sitemap.json";
const SITEMAP_PAGE_REPO_PATH = "frontend/src/pages/Sitemap/Sitemap.jsx";

const iconMap = {
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
  FaBookOpen,
};

const LinkCard = ({ link }) => {
  const Icon = iconMap[link.icon] || FaSitemap;

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

const CategorySection = ({ category, description, links }) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-lg font-semibold text-fg-primary">{category}</h2>
      <p className="text-sm text-fg-muted">{description}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link, index) => (
        <LinkCard key={`${link.path}-${index}`} link={link} />
      ))}
    </div>
  </div>
);

const Sitemap = () => {
  const { sitemap } = useContent();
  const meta = getPageMeta("sitemap");
  const sitemapData = sitemap?.sitemapData || [];
  const externalLinks = sitemap?.externalLinks || [];
  const dynamicRoutes = sitemap?.dynamicRoutes || [];
  const sitemapJsonUrl = `${REPO_BASE_URL}/blob/main/${SITEMAP_JSON_REPO_PATH}`;
  const sitemapPageUrl = `${REPO_BASE_URL}/blob/main/${SITEMAP_PAGE_REPO_PATH}`;

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <PageMeta {...meta} />

      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <FaSitemap className="w-6 h-6 text-cyan-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary">
            Sitemap
          </h1>
        </div>
        <p className="text-fg-secondary max-w-2xl mb-3">
          Rendered from /public/data/json/sitemap.json
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href={sitemapJsonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-card border border-border rounded-lg text-fg-secondary hover:text-fg-primary hover:border-border-light transition-colors"
          >
            Sitemap JSON Source
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </a>
          <a
            href={sitemapPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-card border border-border rounded-lg text-fg-secondary hover:text-fg-primary hover:border-border-light transition-colors"
          >
            Sitemap Page Source
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-[12px] text-fg-muted mt-3 max-w-3xl">
          Notice: Routes, links, and metadata shown on this page are provided
          for navigation convenience and may be updated, moved, or removed
          without prior notice as the project evolves.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 md:mb-14">
        <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
          <p className="text-2xl font-bold text-fg-primary">
            {sitemapData.reduce(
              (acc, cat) => acc + (cat.links?.length || 0),
              0
            )}
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
          <p className="text-2xl font-bold text-fg-primary">
            {dynamicRoutes.length}
          </p>
          <p className="text-sm text-fg-muted">Dynamic Routes</p>
        </div>
      </div>

      <div className="max-w-5xl space-y-10 md:space-y-14">
        {sitemapData.map((section, index) => (
          <CategorySection
            key={`${section.category}-${index}`}
            category={section.category}
            description={section.description}
            links={section.links || []}
          />
        ))}

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-fg-primary">
            Dynamic Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dynamicRoutes.map((route) => (
              <div
                key={route.path}
                className="p-4 bg-bg-card border border-border rounded-xl"
              >
                <h3 className="font-medium text-fg-primary mb-2">
                  {route.name}
                </h3>
                <p className="text-sm text-fg-muted mb-2">
                  {route.description}
                </p>
                <p className="text-xs text-fg-muted/60 font-mono">
                  {route.path}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-fg-primary">
            External Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {externalLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-bg-card border border-border rounded-xl hover:border-border-light transition-colors"
              >
                <span className="text-fg-primary font-medium">{item.name}</span>
                <FaExternalLinkAlt className="w-4 h-4 text-fg-muted group-hover:text-fg-secondary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
