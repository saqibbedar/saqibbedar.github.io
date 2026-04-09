import { AboutView } from "@/components/sections";
import { PageMeta } from "@/components/ui";
import { getPageMeta } from "@/assets";

const About = () => {
  const meta = getPageMeta("about");

  return (
    <>
      <PageMeta {...meta} />
      <AboutView />
    </>
  );
};

export default About;
