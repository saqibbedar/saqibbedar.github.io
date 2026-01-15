import { useState } from "react";
import { useProjects } from "@/context";
import { Link } from "react-router-dom";
import { SplitText } from "@/components/ui";

const ProjectItem = ({ project, isFirst }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full flex items-center justify-between border-border-light ${
        isFirst ? "border-b border-t" : "border-b"
      }`}
    >
      <Link
        to={`/projects/${project._id}`}
        className="py-5 sm:py-8 md:py-12 text-[clamp(1.5rem,6vw,4rem)] font-semibold uppercase text-fg-secondary flex items-center gap-2 sm:gap-6 md:gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={project.image}
          alt={project.name}
          className="hidden sm:inline-block h-10 sm:h-12 md:h-14 lg:h-16 aspect-video object-cover rounded-md"
        />
        <SplitText
          className="leading-[3.5rem] tracking-wider"
          front={project.name}
          back={"VIEW PROJECT"}
          isHovered={isHovered}
        />
      </Link>
      <p className="text-xs sm:text-sm md:text-base font-semibold text-fg-muted">
        2020
      </p>
    </div>
  );
};

const ProjectSection = () => {
  const { getProjects, loading, error } = useProjects();
  const featuredProjects = getProjects("featured");

  if (error) {
    console.error("Feature projects error: ", error);
  }

  return (
    <section className="py-10 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Work
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Featured Projects
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={index} project={project} isFirst={index === 0} />
        ))}
        <Link
          to="/projects"
          className="inline-block mt-6 px-6 py-3 text-sm sm:text-base font-semibold text-fg-primary bg-btn-primary-bg hover:bg-btn-primary-hover rounded-full transition-colors"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
