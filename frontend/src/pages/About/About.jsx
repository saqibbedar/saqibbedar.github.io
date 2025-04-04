import AboutPage_Layout from "../../components/AboutPage_Layout/AboutPage_Layout";
import CategoryProvider from "../../Context/CategoryContext";
import GridProvider from "../../Context/GridContext";
import "./About.css";

const About = () => {
  return (
    <>
      <CategoryProvider initialCategory={"Education"}>
        <GridProvider>
          <AboutPage_Layout />
        </GridProvider>
      </CategoryProvider>
    </>
  );
};

export default About;
