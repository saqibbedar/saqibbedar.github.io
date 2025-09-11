import FAQSection from "./FAQSection/FAQSection";
// import HeroSection from "./HeroSection/HeroSection";
// import BlogSection from "./BlogSection/BlogSection";
// import { BlogProvider } from "@/context/BlogContext";
import SkillSection from "./SkillSection/SkillSection";
import CoverSection from "./CoverSection/CoverSection";
import ProjectSection from "./ProjectSection/ProjectSection";
// import TestimonialSection from "./TestimonialSection/TestimonialSection";
// import CertificateSection from "./CertificateSection/CertificateSection";

const HomeView = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <CoverSection/>
      {/* <BlogProvider>
        <BlogSection />
        </BlogProvider> */}
      <ProjectSection />
        <SkillSection />
      {/* <CertificateSection /> */}
      {/* <TestimonialSection /> */}
      <FAQSection />
    </>
  );
};

export default HomeView;
