import { useProjects } from "@/context";

const ProjectSection = () => {
  
  const { getProjects, loading, error } = useProjects();
  const featuredProjects = getProjects("featured");

  if (error) {
    console.error("Feature projects error: ", error);
  }

  return (
    <div>
    <div className="my-20 mx-8 auto">
      {featuredProjects.map((project, index) => (
        <div
        key={index}
        className={`w-full flex items-center justify-between border-white/10 ${index === 0 ? "border-b-[.1px] border-t-[.1px]" : "border-b-[.1px]"}`}
        >
          <div className="py-8 lg:text-[6vw] font-semibold uppercase text-[var(--dt-sec-fg)]">
          {project.name}
          </div>
          <div>2020</div>
        </div>
      ))}
      <button>View More</button>
      </div>
    </div>
  );
};

export default ProjectSection;
