import FAQSection from "./FAQSection/FAQSection";
import SkillSection from "./SkillSection/SkillSection";
import CoverSection from "./CoverSection/CoverSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import CertificateSection from "./CertificateSection/CertificateSection";

const HomeView = () => {
  return (
    <>
      <CoverSection />
      <SkillSection />
      <ProjectSection />
      <CertificateSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
};

export default HomeView;
