import "./HomePage_Layout.css";
import Awards from "./Awards/Awards";
import CertificatesSection from "./Certificates/CertificatesSection";
import FeaturedBlogPosts from "./FeaturedBlogPosts/FeaturedBlogPosts";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import LandingPage from "./LandingPage/LandingPage";
import Skills from "./Skills/MySkills";
import Testimonials from "./Testimonials/Testimonials";
import FAQS from "./FAQS/FAQS";
import ImageSlider from "../ImageSliderTemplate/ImageSlider";
import ImageSlide from "../ImageSliderTemplate/ImageSlide";
import { slideContent } from "../../assets/assets";
import BlogProvider from "../../Context/BlogContext";

const HomePage_Layout = () => {
  return (
    <div className="HomePage_Layout-main-wrapper">
      {/* <ImageSlider>
        {
          slideContent
          .map((item, index)=>(
            <ImageSlide key={index} img={item.img} title={item.title} description={item.description} btnValue={item.btnValue} link={"/"}/>
          ))
        }
      </ImageSlider> */}

      <LandingPage />
      <Skills />
      <BlogProvider>
        <FeaturedBlogPosts />
      </BlogProvider>
      <FeaturedProjects />
      <CertificatesSection />
      {/* <Awards/> */}
      <Testimonials />
      <FAQS />
    </div>
  );
};

export default HomePage_Layout;
