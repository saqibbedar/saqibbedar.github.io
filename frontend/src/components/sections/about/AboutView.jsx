import { useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import EducationSection from "./EducationSection/EducationSection";
import BootcampsAndEventsSection from "./BootcampsAndEventsSection";
import FAQSection from "./FAQSection";
import CertificatesSection from "./CertificatesSection";
import { author, education } from "@/assets/assets";

// Category Tab Component - matching ProjectView style
const CategoryTab = ({ category, isActive, onClick }) => (
  <button
    onClick={() => onClick(category)}
    className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
      isActive
        ? "bg-fg-primary text-bg-primary"
        : "text-fg-secondary hover:text-fg-primary border border-border hover:border-border-light"
    }`}
  >
    {category}
  </button>
);

const categoryButtons = [
  "Education",
  "Certificates & Credentials",
  "Bootcamps & Events",
  "FAQs",
];

const AboutView = () => {
  const [activeCategory, setActiveCategory] = useState("Education");

  return (
    <div>
      <HeroSection
        name={author.name}
        description={author.description}
        image={"/images/saqibbedar.png"}
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
        {activeCategory === "Certificates & Credentials" && <CertificatesSection />}
        {activeCategory === "Bootcamps & Events" && <BootcampsAndEventsSection />}
        {activeCategory === "FAQs" && <FAQSection />}
      </div>
    </div>
  );
};

export default AboutView;
