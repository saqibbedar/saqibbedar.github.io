import GridProvider from "@/context/GridContext";
import CategoryProvider from "@/context/CategoryContext";
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
