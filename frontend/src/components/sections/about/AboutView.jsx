import HeroSection from "./HeroSection/HeroSection";
import AwardSection from './AwardSection/AwardSection';
import SkillSection from "./SkillSection/SkillSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import EducationSection from "./EducationSection/EducationSection";
import { useContext, useState } from "react";
import { author, education } from "@/assets/assets";
import { CategoryContext } from "@/context/CategoryContext";
import { CategoryTabs } from "@/components/ui";

const CategoryButtons = ["Education", "Projects", "Certificates", "Awards", "Skills"];

const AboutView = () => {
  const { category } = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="animate-[var(--transform)]">
      <HeroSection
        name={author.name}
        description={author.description}
        image={author.image}
        setIsLoading={setIsLoading}
      />
      <CategoryTabs categories={CategoryButtons} />
      <div>
        {category === CategoryButtons[0] && (
          <EducationSection
            educational_data={education}
            isLoading={isLoading}
          />
        )}
        {category === CategoryButtons[1] && <ProjectSection />}
        {category === CategoryButtons[2] && <AwardSection />} {/* Add certificates here... */}
        {category === CategoryButtons[3] && <AwardSection />}
        {category === CategoryButtons[4] && <SkillSection />}
      </div>
    </div>
  );
};

export default AboutView;
