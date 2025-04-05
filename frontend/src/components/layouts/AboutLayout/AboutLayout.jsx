import "./AboutLayout.css";
import { useContext, useState } from "react";
import { author, education } from "@/assets/assets";
import { CategoryContext } from "@/context/CategoryContext";
import AboutSkillSection from "./AboutSkillSection/AboutSkillPage";
import AboutLandingPage from "./AboutLandingPage/AboutLandingPage";
import { CategoryButtonTemplate } from "@/components/templates/templates";
import AboutProjectSection from "./AboutProjectsSection/AboutProjectSection";
import AboutEducationSection from "./AboutEducationSection/AboutEducationSection";

const CategoryButtons = ["Education", "Skills", "Projects"];

const AboutPage_Layout = () => {
  const { category } = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="about-section-main-wrapper">
      <AboutLandingPage
        name={author.name}
        description={author.description}
        image={author.image}
        setIsLoading={setIsLoading}
      />
      <CategoryButtonTemplate Buttons={CategoryButtons} isLoading={isLoading} />
      <div>
        {category === CategoryButtons[0] && (
          <AboutEducationSection
            educational_data={education}
            isLoading={isLoading}
          />
        )}
        {category === CategoryButtons[1] && <AboutSkillSection />}
        {category === CategoryButtons[2] && <AboutProjectSection />}
      </div>
    </div>
  );
};

export default AboutPage_Layout;
