import FAQSection from "./FAQSection/FAQSection";
import HeroSection from "./HeroSection/HeroSection";
import BlogSection from "./BlogSection/BlogSection";
import { BlogProvider } from "@/context/BlogContext";
import SkillsSection from "./SkillsSection/SkillsSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import CertificatesSection from "./CertificatesSection/CertificatesSection";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <BlogProvider>
        <BlogSection />
      </BlogProvider>
      <ProjectSection />
      <CertificatesSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default HomeView;
