import {
  Home,
  About,
  Blogs,
  Contact,
  Courses,
  NotFound,
  Projects,
  Services,
  Search
} from "@/pages/pages";
import { Route, Routes } from "react-router-dom";

const FrontendRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Search:query" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default FrontendRoutes;
