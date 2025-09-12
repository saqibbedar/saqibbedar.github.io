import { useProjects } from "@/context";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  
  const { getProjects, loading, error } = useProjects();
  const featuredProjects = getProjects("featured");

  if (error) {
    console.error("Feature projects error: ", error);
  }

  return (
    <div>
      <div className="px-3 md:px-8 my-6 md:my-20">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={`w-full flex items-center justify-between border-[var(--dt-bdr-clr-xtra)] ${
              index === 0
                ? "border-b-[1px] border-t-[1px]"
                : "border-b-[1px]"
            }`}
          >
            <Link
              to={`/projects/${project._id}`}
              className="py-6 md:py-8 text-[2rem] sm:text-[7vw] md:text-[6vw] lg:text-[6vw] font-semibold uppercase text-[var(--dt-sec-fg)]"
            >
              {project.name}
            </Link>
            <div className="text-[14px] md:text-[16px] font-semibold">2020</div>
          </div>
        ))}
        <button className="">View More</button>
      </div>
    </div>
  );
};

export default ProjectSection;
