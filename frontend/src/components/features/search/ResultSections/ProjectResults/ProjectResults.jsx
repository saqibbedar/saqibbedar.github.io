import { Link } from "react-router-dom";
import {Tags} from "@/components/ui"

const ProjectResults = ({ projects }) => {
  return (
    <div className="flex flex-col gap-5 mt-4 animate-[var(--fadeIn)]">
      <div className="flex gap-5 overflow-x-scroll search-results-hide-scroll-class">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.url}
            className="flex-shrink-0 w-[300px] bg-white overflow-hidden rounded-lg"
          >
            <img
              src={project.image}
              alt=""
              className="aspect-video rounded-t-md"
            />
            <div className="px-3 mt-5">
              <h1 className="text-[var(--cards-text-title-size)]">
                {project.name}
              </h1>
              <p className="mt-2 text-[var(--cards-text-description-foreground)] line-clamp-3">
                {project.description}
              </p>
              <Tags tags={project.tags} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectResults;
