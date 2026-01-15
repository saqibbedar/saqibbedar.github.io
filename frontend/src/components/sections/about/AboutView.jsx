import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./EducationSection/EducationSection";
import BootcampsAndEventsSection from "./BootcampsAndEventsSection";
import FAQSection from "./FAQSection";
import { useContext } from "react";
import { author, education } from "@/assets/assets";
import { CategoryContext } from "@/context/CategoryContext";
import { CategoryTabs } from "@/components/templates/ui";

const CategoryButtons = ["Education", "Bootcamps & Events", "FAQs"];

const AboutView = () => {
  const { category } = useContext(CategoryContext);

  return (
    <div>
      <HeroSection
        name={author.name}
        description={author.description}
        image={"/images/saqibbedar.png"}
      />
      <CategoryTabs categories={CategoryButtons} />

      {/* Content wrapper with consistent min-height for tab alignment */}
      <div className="min-h-[600px]">
        {category === CategoryButtons[0] && (
          <EducationSection educational_data={education} />
        )}
        {category === CategoryButtons[1] && <BootcampsAndEventsSection />}
        {category === CategoryButtons[2] && <FAQSection />}
      </div>
    </div>
  );
};

export default AboutView;
