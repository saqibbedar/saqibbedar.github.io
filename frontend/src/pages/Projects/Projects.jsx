import { ProjectView } from "@/components/sections";
import { PageMeta } from "@/components/ui";
import { getPageMeta } from "@/assets";

const Projects = () => {
  const meta = getPageMeta("projects");

  return (
    <>
      <PageMeta {...meta} />
      <ProjectView />
    </>
  );
};

export default Projects;
