import {
  Home,
  About,
  // Blogs,
  Contact,
  Courses,
  NotFound,
  Projects,
  Services,
  Search,
  Error404
} from "@/pages/pages";
// import { Blog } from '../views/views';
import { Project } from '../views/views';
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/blogs/:id" element={<Blog />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search:query" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
