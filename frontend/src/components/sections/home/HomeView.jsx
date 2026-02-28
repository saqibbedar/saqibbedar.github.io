import FAQSection from "./FAQSection/FAQSection";
import SkillSection from "./SkillSection/SkillSection";
import CoverSection from "./CoverSection/CoverSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import CourseSection from "./CourseSection/CourseSection";
import ServiceSection from "./ServiceSection/ServiceSection";

const HomeView = () => {
  return (
    <>
      <CoverSection />
      <SkillSection />
      <ProjectSection />
      <CourseSection />
      <ServiceSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
};

export default HomeView;
