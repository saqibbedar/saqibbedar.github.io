import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDocker,
  FaLock,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaLink,
} from "react-icons/fa";
import { SiNpm, SiOrcid, SiPypi } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { projectsData } from "@/assets/assets"

// Category buttons
const categoryButtons = [
  "All",
  "Frontend",
  "Backend",
  "MERN",
  "Python",
  "AI/ML",
  "Developer Tools",
  "React",
  "Node.js",
];

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

// Project Card Component
const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const statusBadge = getStatusBadge(project.status, project.visibility);

  return (
    <Link
      to={`/projects/${project._id}`}
      className="group bg-bg-card rounded-2xl border border-border hover:border-border-light transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 sm:h-48 w-full overflow-hidden ${
          !imageLoaded ? "skeleton" : ""
        }`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Status Badge */}
        <div
          className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold border rounded-md ${statusBadge.className}`}
        >
          {statusBadge.icon}
          {statusBadge.text}
        </div>
        {/* Language Badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md text-white text-xs font-medium">
          {project.metadata.languages.find((l) => l.isMain)?.name ||
            project.metadata.languages[0]?.name}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-xs font-medium text-fg-secondary bg-bg-card border border-border-light rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-fg-primary mb-2 line-clamp-1 group-hover:text-fg-secondary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-fg-muted leading-relaxed line-clamp-2 mb-4">
          {project.shortDescription}
        </p>

        {/* Stats Row */}
        {project.visibility === "public" && (
          <div className="flex items-center gap-4 text-xs text-fg-secondary mb-4">
            <div className="flex items-center gap-1">
              <FaStar className="w-3.5 h-3.5 text-yellow-500" />
              <span className="font-medium">{project.metadata.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCodeBranch className="w-3.5 h-3.5" />
              <span>{project.metadata.forks}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye className="w-3.5 h-3.5" />
              <span>{project.metadata.watchers}</span>
            </div>
          </div>
        )}

        {/* Footer - Links & Contributors */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {/* Quick Links */}
          <div className="flex items-center gap-3">
            {project.links.github && (
              <FaGithub className="w-4 h-4 text-fg-muted" />
            )}
            {project.links.demo && (
              <FaExternalLinkAlt className="w-3.5 h-3.5 text-fg-muted" />
            )}
            {project.links.docker && (
              <FaDocker className="w-4 h-4 text-fg-muted" />
            )}
            {project.links.npm && <SiNpm className="w-4 h-4 text-fg-muted" />}
            {project.links.vscode && (
              <VscVscode className="w-4 h-4 text-fg-muted" />
            )}
            {project.links.pypi && <SiPypi className="w-4 h-4 text-fg-muted" />}
            {project.links.other?.length > 0 && (
              <FaLink className="w-3.5 h-3.5 text-fg-muted" />
            )}
          </div>

          {/* Contributors */}
          <div className="flex items-center -space-x-2">
            {project.contributors.slice(0, 3).map((contributor, index) => (
              <img
                key={index}
                src={contributor.avatar}
                alt={contributor.name}
                className="w-7 h-7 rounded-full border-2 border-bg-card object-cover"
              />
            ))}
            {project.contributors.length > 3 && (
              <div className="w-7 h-7 rounded-full border-2 border-bg-card bg-bg-secondary flex items-center justify-center text-xs font-medium text-fg-secondary">
                +{project.contributors.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

// Category Tab Component
const CategoryTab = ({ category, isActive, onClick }) => (
  <button
    onClick={() => onClick(category)}
    className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
      isActive
        ? "bg-fg-primary text-bg-primary"
        : "text-fg-secondary hover:text-fg-primary border border-border hover:border-border-light"
    }`}
  >
    {category}
  </button>
);

const ProjectView = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category === activeCategory ||
            project.tags.includes(activeCategory)
        );

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Portfolio
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Projects & Open Source
        </p>
        <p className="text-fg-secondary max-w-2xl">
          Explore my collection of projects, from open-source libraries to
          full-stack applications. Each project represents a unique challenge
          and learning experience.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2">
        {categoryButtons.map((category) => (
          <CategoryTab
            key={category}
            category={category}
            isActive={activeCategory === category}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      {/* Project Count */}
      <div className="mb-6">
        <p className="text-sm text-fg-muted">
          Showing{" "}
          <span className="text-fg-primary font-medium">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
          {activeCategory !== "All" && (
            <span>
              {" "}
              in <span className="text-fg-primary">{activeCategory}</span>
            </span>
          )}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-fg-muted text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectView;
