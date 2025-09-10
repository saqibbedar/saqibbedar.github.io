import icons from "@/assets/icons";

const aboutSkills = [
  {
    name: "HTML",
    Icon: icons.html,
  },
  {
    name: "CSS",
    Icon: icons.css,
  },
  {
    name: "JS",
    Icon: icons.js,
  },
  {
    name: "REACT",
    Icon: icons.react,
  },
  {
    name: "NEXTJS",
    Icon: icons.nextjs,
  },
  {
    name: "TAILWIND",
    Icon: icons.tailwind,
  },
  {
    name: "BOOTSTRAP",
    Icon: icons.bootstrap,
  },
  {
    name: "GIT",
    Icon: icons.git,
  },
  {
    name: "GITHUB",
    Icon: icons.github,
  },
  {
    name: "C++",
    Icon: icons.cpp,
  },
  {
    name: "PYTHON",
    Icon: icons.python,
  },
  {
    name: "NODEJS",
    Icon: icons.nodejs,
  },
  {
    name: "EXPRESS",
    Icon: icons.express,
  },
  {
    name: "MONGODB",
    Icon: icons.mongodb,
  },
];

export default aboutSkills;

const data = {
  "HTML": icons.html,
  "CSS": icons.css,
  "JS": icons.js,
  "REACT": icons.react,
  "NEXTJS": icons.nextjs,
  "TAILWIND": icons.tailwind,
  "BOOTSTRAP": icons.bootstrap,
  "GIT": icons.git,
  "GITHUB": icons.github,
  "C++": icons.cpp,
  "PYTHON": icons.python,
  "NODEJS": icons.nodejs,
  "EXPRESS": icons.express,
  "MONGODB": icons.mongodb,
};

const skillsMap = new Map();
Object.entries(data).forEach(([key, value]) => skillsMap.set(key, value));
export { skillsMap };