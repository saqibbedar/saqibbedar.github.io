import GridProvider from "@/context/GridContext";
import CategoryProvider from "@/context/CategoryContext";
import { AboutLayout } from "@/components/layouts/layouts";

const About = () => {
  return (
    <>
      <CategoryProvider initialCategory={"Education"}>
        <GridProvider>
          <AboutLayout />
        </GridProvider>
      </CategoryProvider>
    </>
  );
};

export default About;
