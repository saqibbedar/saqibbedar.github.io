import { useContext, useState } from "react";
import { author, education } from "@/assets/assets";
import AboutAwards from './AboutAwards/AboutAwards';
import { CategoryContext } from "@/context/CategoryContext";
import AboutSkills from "./AboutSkills/AboutSkills";
import AboutLandingPage from "./AboutLandingPage/AboutLandingPage";
import { CategoryButtonTemplate } from "@/components/templates/templates";
import AboutProjectSection from "./AboutProjectsSection/AboutProjectSection";
import AboutEducationSection from "./AboutEducationSection/AboutEducationSection";

const CategoryButtons = ["Education", "Projects", "Certificates", "Awards", "Skills"];

const AboutPage_Layout = () => {
  const { category } = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="animate-[var(--transform)]">
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
        {category === CategoryButtons[1] && <AboutProjectSection />}
        {category === CategoryButtons[2] && <AboutAwards />} {/* Add certificates here... */}
        {category === CategoryButtons[3] && <AboutAwards />}
        {category === CategoryButtons[4] && <AboutSkills />}
      </div>
    </div>
  );
};

export default AboutPage_Layout;
