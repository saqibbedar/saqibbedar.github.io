import { CategoryProvider, GridProvider } from "@/context";
import { AboutView } from "@/components/sections";

const About = () => {
  return (
    <>
      <title>Saqib Bedar | About</title>
      <CategoryProvider initialCategory={"Education"}>
        <GridProvider>
          <AboutView />
        </GridProvider>
      </CategoryProvider>
    </>
  );
};

export default About;
