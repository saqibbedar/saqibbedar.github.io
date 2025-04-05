import FAQS from "./FAQS/FAQS";
import Awards from "./Awards/Awards";
import Skills from "./Skills/MySkills";
import BlogProvider from "@/context/BlogContext";
import LandingPage from "./LandingPage/LandingPage";
import Testimonials from "./Testimonials/Testimonials";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import CertificatesSection from "./Certificates/CertificatesSection";
import FeaturedBlogPosts from "./FeaturedBlogPosts/FeaturedBlogPosts";

const HomeLayout = () => {
  return (
    <>
      <LandingPage />
      <Skills />
      <BlogProvider>
        <FeaturedBlogPosts />
      </BlogProvider>
      <FeaturedProjects />
      <CertificatesSection />
      <Awards />
      <Testimonials />
      <FAQS />
    </>
  );
};

export default HomeLayout;
