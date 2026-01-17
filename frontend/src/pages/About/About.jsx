import { CategoryProvider } from "@/context";
import { AboutView } from "@/components/sections";

const About = () => {
  return (
    <>
      <title>Saqib Bedar | About</title>
      <CategoryProvider initialCategory={"Education"}>
          <AboutView />
      </CategoryProvider>
    </>
  );
};

export default About;
