/**
 * Whole application data lives in assets directory, divided into pages and common dirs. The pages dir exposes all pages data based on routes defined in application. This structure makes features scalability and easy maintenance. Other dir holds common and frequently used data files, easy for quick changes and wide effects.
 */

// common
import icons from "@/assets/common/icons";
import faqs from "@/assets/common/faqs";
import footer from "@/assets/common/footer";
import author from "@/assets/common/author";
import * as skills from "@/assets/common/skills";

// homepage
import testimonials from "@/assets/pages/home/testimonials";

// about page
import education from "@/assets/pages/about/education";
import certificates from "@/assets/pages/about/certificates";
import bootcampsAndEvents from "@/assets/pages/about/bootcampsAndEvents";

// courses
import courses from "./pages/courses/courses";

// services
import services from "./pages/services/services";

// projects
import projects from "./pages/projects/project";

export {
  faqs,
  icons,
  skills,
  footer,
  author,
  education,
  certificates,
  testimonials,
  bootcampsAndEvents,
  courses,
  services,
  projects,
};
