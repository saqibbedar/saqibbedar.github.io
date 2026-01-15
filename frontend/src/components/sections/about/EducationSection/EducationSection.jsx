// import "./EducationSection.css";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa6";

const ProjectThumbnails = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  const displayProjects = projects.slice(0, 2);
  const remainingCount = projects.length - 2;

  return (
    <div className="flex items-center gap-2 mt-4">
      {displayProjects.map((project, index) => (
        <Link
          key={index}
          to={`/projects/${project.id}`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-border hover:border-border-light transition-all"
        >
          <img
            src={project.image}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </Link>
      ))}
      {remainingCount > 0 && (
        <Link
          to="/projects"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-bg-card border border-border hover:border-border-light flex items-center justify-center text-fg-secondary hover:text-fg-primary transition-all group"
        >
          <span className="text-xs font-medium">+{remainingCount}</span>
        </Link>
      )}
      <Link
        to="/projects"
        className="ml-2 text-xs sm:text-sm text-fg-secondary hover:text-fg-primary transition-colors flex items-center gap-1"
      >
        View all
        <FaArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
};

const EducationCard = ({
  year,
  degreeType,
  organization,
  description,
  projects,
  isLast,
}) => {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-px bg-border" />
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-fg-primary flex items-center justify-center">
        <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-bg-primary" />
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8 sm:pb-10">
        {/* Year Badge */}
        <span className="inline-block px-3 py-1 mb-3 text-xs sm:text-sm font-medium text-fg-secondary bg-bg-card border border-border rounded-full">
          {year}
        </span>

        {/* Degree */}
        <h3 className="text-lg sm:text-xl font-semibold text-fg-primary mb-1">
          {degreeType}
        </h3>

        {/* Organization */}
        <p className="text-sm sm:text-base text-fg-secondary mb-3">
          {organization || "Institution Name"}
        </p>

        {/* Description (optional) */}
        {description && (
          <p className="text-sm text-fg-muted leading-relaxed">{description}</p>
        )}

        {/* Projects */}
        <ProjectThumbnails projects={projects} />
      </div>
    </div>
  );
};

const EducationSection = ({ educational_data }) => {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Background
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Education & Academic Journey
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl">
        {educational_data.map((edu, index) => (
          <EducationCard
            key={index}
            year={edu.year}
            degreeType={edu.degreeType}
            organization={edu.organization}
            description={edu.description}
            projects={edu.projects}
            isLast={index === educational_data.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
