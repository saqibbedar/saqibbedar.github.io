import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa6";
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { AiOutlineLinux } from "react-icons/ai";
import { VscVscodeInsiders } from "react-icons/vsc";

const first_row = [
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "JAVASCRIPT",
    icon: IoLogoJavascript,
  },
  {
    name: "TYPESCRIPT",
    icon: SiTypescript,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "REACT",
    icon: FaReact,
  },
  {
    name: "NEXTJS",
    icon: RiNextjsFill,
  },
  {
    name: "TAILWIND",
    icon: RiTailwindCssFill,
  },
];

const second_row = [
  {
    name: "GIT",
    icon: FaGitAlt,
  },
  {
    name: "GITHUB",
    icon: FaGithub,
  },
  {
    name: "JAVA",
    icon: FaJava,
  },
  {
    name: "C++",
    icon: TbBrandCpp,
  },
  {
    name: "PYTHON",
    icon: FaPython,
  },
  {
    name: "NODEJS",
    icon: DiNodejs,
  },
  {
    name: "EXPRESS",
    icon: SiExpress,
  },
  {
    name: "MONGODB",
    icon: DiMongodb,
  },
  {
    name: "MYSQL",
    icon: SiMysql,
  },
  {
    name: "LINUX",
    icon: AiOutlineLinux,
  },
  {
    name: "VSCODE",
    icon: VscVscodeInsiders,
  },
];

export { first_row, second_row };