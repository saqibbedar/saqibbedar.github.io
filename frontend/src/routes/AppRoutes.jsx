import {
  Home,
  About,
  Contact,
  Courses,
  NotFound,
  Projects,
  Services,
  Search,
  Error404,
  Policy,
  Terms,
  Sitemap,
  Blogs,
  FAQs
} from "@/pages";
import { Project, Course, Blog } from "@/components/views/views";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:path" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
