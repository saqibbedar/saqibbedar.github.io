import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaLock,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaArrowLeft,
  FaCalendarAlt,
  FaCode,
  FaBalanceScale,
  FaLink,
} from "react-icons/fa";
import { SiNpm, SiOrcid, SiPypi } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { projectsData } from "@/assets/assets";

// Helper function to get status badge
const getStatusBadge = (status, visibility) => {
  if (visibility === "private") {
    return {
      text: "Private",
      className: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      icon: <FaLock className="w-3 h-3" />,
    };
  }
  const badges = {
    active: {
      text: "Active",
      className: "bg-green-500/10 text-green-500 border-green-500/20",
      icon: null,
    },
    ongoing: {
      text: "In Development",
      className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      icon: null,
    },
    archived: {
      text: "Archived",
      className: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      icon: null,
    },
    deprecated: {
      text: "Deprecated",
      className: "bg-red-500/10 text-red-500 border-red-500/20",
      icon: null,
    },
  };
  return badges[status] || badges.active;
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

// Link Button Component
const LinkButton = ({ href, icon: Icon, label, primary = false }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2.5 font-medium rounded-full transition-all ${
        primary
          ? "bg-fg-primary text-bg-primary hover:opacity-90"
          : "border border-border hover:border-border-light text-fg-secondary hover:text-fg-primary"
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
};

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p._id === id);

  useEffect(() => {
    if (!project) {
      navigate("/404");
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-fg-muted">Loading project...</div>
      </div>
    );
  }

  const statusBadge = getStatusBadge(project.status, project.visibility);

  return (
    <div className="min-h-screen">
      <title>{`${project.title} | Saqib Bedar`}</title>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors mb-6"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Status & Tags */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className={`flex items-center gap-1.5 px-3 py-1 text-sm font-medium border rounded-full ${statusBadge.className}`}
              >
                {statusBadge.icon}
                {statusBadge.text}
              </span>
              {project.tags.map((tag, index) => (
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
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-fg-secondary leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            {/* Stats (for public projects) */}
            {project.visibility === "public" && (
              <div className="flex items-center flex-wrap gap-4 text-sm text-fg-secondary mb-6">
                <div className="flex items-center gap-1.5">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-fg-primary">
                    {project.metadata.stars}
                  </span>
                  <span className="text-fg-muted">stars</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCodeBranch className="w-4 h-4" />
                  <span>{project.metadata.forks} forks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye className="w-4 h-4" />
                  <span>{project.metadata.watchers} watchers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCode className="w-4 h-4" />
                  <span>
                    {project.metadata.languages.find((l) => l.isMain)?.name ||
                      project.metadata.languages[0]?.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaBalanceScale className="w-4 h-4" />
                  <span>{project.metadata.license}</span>
                </div>
              </div>
            )}

            {/* Contributors */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-3">
                Contributors
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.contributors.map((contributor, index) => (
                  <a
                    key={index}
                    href={contributor.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-bg-card border border-border rounded-xl hover:border-border-light transition-colors"
                  >
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-fg-primary">
                        {contributor.name}
                      </p>
                      <p className="text-xs text-fg-muted">
                        {contributor.role}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <LinkButton
                href={project.links.github}
                icon={FaGithub}
                label="View on GitHub"
                primary
              />
              <LinkButton
                href={project.links.demo}
                icon={FaExternalLinkAlt}
                label="Live Demo"
              />
              <LinkButton
                href={project.links.docker}
                icon={FaDocker}
                label="Docker"
              />
              <LinkButton href={project.links.npm} icon={SiNpm} label="npm" />
              <LinkButton
                href={project.links.vscode}
                icon={VscVscode}
                label="VS Code"
              />
              <LinkButton
                href={project.links.pypi}
                icon={SiPypi}
                label="PyPI"
              />
              <LinkButton
                href={project.links.orcid}
                icon={SiOrcid}
                label="ORCID"
              />
              {/* Other Links */}
              {project.links.other?.map((link, index) => (
                <LinkButton
                  key={index}
                  href={link.url}
                  icon={FaLink}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {/* Right - Thumbnail */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              {/* Overlay with quick info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white text-xs font-medium">
                      {project.metadata.languages.find((l) => l.isMain)?.name ||
                        project.metadata.languages[0]?.name}
                    </span>
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>
                      Updated {formatDate(project.metadata.lastUpdated)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats Footer */}
      <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaStar className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {project.metadata.stars}
              </p>
              <p className="text-sm text-fg-muted">Stars</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaCodeBranch className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {project.metadata.forks}
              </p>
              <p className="text-sm text-fg-muted">Forks</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaEye className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {project.metadata.watchers}
              </p>
              <p className="text-sm text-fg-muted">Watchers</p>
            </div>
            <div className="p-4 bg-bg-card border border-border rounded-xl text-center">
              <FaCalendarAlt className="w-6 h-6 text-fg-secondary mx-auto mb-2" />
              <p className="text-lg font-semibold text-fg-primary">
                {new Date(project.createdAt).getFullYear()}
              </p>
              <p className="text-sm text-fg-muted">Started</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
