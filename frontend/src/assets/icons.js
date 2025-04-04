import CppIcon from "@/assets/CppIcon";
import { FaGitAlt, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGithub,
  FaArrowRight,
  FaArrowLeft,
  FaLinkedin,
  FaRegHeart,
  FaGraduationCap,
} from "react-icons/fa";
import { IoGrid, IoGridOutline, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiBuymeacoffee, SiExpress, SiLinktree } from "react-icons/si";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const icons = {
  search: CiSearch,
  hamburger: FiMenu,
  close: FiX,
  git: FaGitAlt,
  html: FaHtml5,
  css: FaCss3Alt,
  react: FaReact,
  bootstrap: FaBootstrap,
  python: FaPython,
  js: IoLogoJavascript,
  nextjs: RiNextjsFill,
  tailwind: RiTailwindCssFill,
  nodejs: DiNodejs,
  mongodb: DiMongodb,
  express: SiExpress,
  cpp: CppIcon,
  rightArrow: FaArrowRight,
  leftArrow: FaArrowLeft,
  twitter: FaXTwitter,
  facebook: BiLogoFacebookCircle,
  linkedIn: FaLinkedin,
  github: FaGithub,
  insta: FaInstagram,
  youtube: FaYoutube,
  linktree: SiLinktree,
  arrowUp: IoIosArrowUp,
  arrowDown: IoIosArrowDown,
  byMeCoffee: SiBuymeacoffee,
  filledGrid: IoGrid,
  unFilledGrid: IoGridOutline,
  like: FaRegHeart,
  graduationCap: FaGraduationCap,
};

export default icons;
