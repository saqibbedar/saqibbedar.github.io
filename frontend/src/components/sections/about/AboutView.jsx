import { useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./EducationSection/EducationSection";
import BootcampsAndEventsSection from "./BootcampsAndEventsSection";
import FAQSection from "./FAQSection";
import CertificatesSection from "./CertificatesSection";
import { CategoryTab } from "@/components/ui";
import { author } from "@/assets";
import { useContent } from "@/context";

const categoryButtons = [
  "Education",
  "Certificates & Credentials",
  "Bootcamps & Events",
  "FAQs",
];

const AboutView = () => {
  const [activeCategory, setActiveCategory] = useState("Education");
  const { education } = useContent();

  return (
    <div>
      <HeroSection
        name={author.name}
        description={author.description}
        image={author.image}
      />

      {/* Category Tabs */}
      <div className="flex items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 overflow-x-auto hide-scrollbar">
        {categoryButtons.map((category) => (
          <CategoryTab
            key={category}
            category={category}
            isActive={activeCategory === category}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      {/* Content Sections */}
      <div>
        {activeCategory === "Education" && (
          <EducationSection educational_data={education} />
        )}
        {activeCategory === "Certificates & Credentials" && (
          <CertificatesSection />
        )}
        {activeCategory === "Bootcamps & Events" && (
          <BootcampsAndEventsSection />
        )}
        {activeCategory === "FAQs" && <FAQSection />}
      </div>
    </div>
  );
};

export default AboutView;
