// Project data structure - will be replaced with backend API call later
export const projectsData = [
  {
    _id: "project1",
    slug: "bedarui",
    title: "BedarUI",
    shortDescription:
      "A modern React component library with beautiful animations and accessible components.",
    fullDescription:
      "BedarUI is a comprehensive React component library featuring smooth animations, accessibility-first design, and customizable theming. Built with TypeScript and Tailwind CSS for maximum developer experience.",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    contributors: [
      {
        name: "Saqib Bedar",
        avatar: "/images/saqibbedar.png",
        role: "Lead Developer",
        githubUrl: "https://github.com/saqibbedar",
      },
    ],
    links: {
      github: "https://github.com/saqibbedar/bedarui",
      demo: "https://bedarui.vercel.app",
      docker: null,
      npm: "https://www.npmjs.com/package/bedarui",
      vscode: null,
      pypi: null,
      orcid: null,
      other: [],
    },
    metadata: {
      stars: 245,
      forks: 32,
      watchers: 18,
      languages: [
        { name: "TypeScript", percentage: 85, isMain: true },
        { name: "CSS", percentage: 10, isMain: false },
        { name: "JavaScript", percentage: 5, isMain: false },
      ],
      license: "MIT",
      lastUpdated: "2025-12-20",
    },
    tags: ["React", "TypeScript", "Tailwind", "UI Library", "Components"],
    category: "Frontend",
    status: "active", // active | archived | deprecated
    visibility: "public", // public | private
    featured: true,
    createdAt: "2024-06-15",
  },
  {
    _id: "project2",
    slug: "portfolio-api",
    title: "Portfolio API",
    shortDescription:
      "RESTful API backend for portfolio website with authentication and content management.",
    fullDescription:
      "A robust Node.js backend API built with Express.js and MongoDB. Features include JWT authentication, rate limiting, file uploads, and a complete CRUD system for managing portfolio content.",
    thumbnail:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
    contributors: [
      {
        name: "Saqib Bedar",
        avatar: "/images/saqibbedar.png",
        role: "Full Stack Developer",
        githubUrl: "https://github.com/saqibbedar",
      },
      {
        name: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
        role: "Backend Developer",
        githubUrl: "https://github.com/johndoe",
      },
    ],
    links: {
      github: "https://github.com/saqibbedar/portfolio-api",
      demo: "https://api.saqibbedar.com",
      docker: "https://hub.docker.com/r/saqibbedar/portfolio-api",
      npm: null,
      vscode: null,
      pypi: null,
      orcid: null,
      other: [{ label: "API Docs", url: "https://docs.saqibbedar.com" }],
    },
    metadata: {
      stars: 128,
      forks: 45,
      watchers: 12,
      languages: [
        { name: "JavaScript", percentage: 92, isMain: true },
        { name: "Shell", percentage: 8, isMain: false },
      ],
      license: "MIT",
      lastUpdated: "2025-11-15",
    },
    tags: ["Node.js", "Express", "MongoDB", "REST API", "Backend"],
    category: "Backend",
    status: "active",
    visibility: "public",
    featured: true,
    createdAt: "2024-03-20",
  },
  {
    _id: "project3",
    slug: "code-snippets-vscode",
    title: "Code Snippets Pro",
    shortDescription:
      "VS Code extension with 500+ code snippets for React, Vue, and Angular development.",
    fullDescription:
      "A powerful VS Code extension that provides over 500 curated code snippets for modern web development. Supports React, Vue, Angular, TypeScript, and includes custom snippet creation.",
    thumbnail:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
    contributors: [
      {
        name: "Saqib Bedar",
        avatar: "/images/saqibbedar.png",
        role: "Creator",
        githubUrl: "https://github.com/saqibbedar",
      },
    ],
    links: {
      github: "https://github.com/saqibbedar/code-snippets-pro",
      demo: null,
      docker: null,
      npm: null,
      vscode:
        "https://marketplace.visualstudio.com/items?itemName=saqibbedar.code-snippets-pro",
      pypi: null,
      orcid: null,
      other: [],
    },
    metadata: {
      stars: 892,
      forks: 67,
      watchers: 45,
      languages: [{ name: "JSON", percentage: 100, isMain: true }],
      license: "MIT",
      lastUpdated: "2025-10-05",
    },
    tags: ["VS Code", "Extension", "Snippets", "Developer Tools"],
    category: "Developer Tools",
    status: "active",
    visibility: "public",
    featured: true,
    createdAt: "2023-08-10",
  },
  {
    _id: "project4",
    slug: "ai-chatbot",
    title: "AI Assistant Platform",
    shortDescription:
      "Building an advanced AI chatbot platform with multi-model support.",
    fullDescription:
      "An ambitious project to create a versatile AI assistant platform supporting multiple language models. Features include conversation memory, plugin system, and custom model fine-tuning.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    contributors: [
      {
        name: "Saqib Bedar",
        avatar: "/images/saqibbedar.png",
        role: "Lead Developer",
        githubUrl: "https://github.com/saqibbedar",
      },
    ],
    links: {
      github: null, // Private repo
      demo: null,
      docker: null,
      npm: null,
      vscode: null,
      pypi: null,
      orcid: null,
      other: [],
    },
    metadata: {
      stars: 0,
      forks: 0,
      watchers: 0,
      languages: [
        { name: "Python", percentage: 75, isMain: true },
        { name: "TypeScript", percentage: 20, isMain: false },
        { name: "Docker", percentage: 5, isMain: false },
      ],
      license: "Proprietary",
      lastUpdated: "2026-01-10",
    },
    tags: ["AI", "Python", "Machine Learning", "Chatbot"],
    category: "AI/ML",
    status: "ongoing", // ongoing = in development
    visibility: "private",
    featured: false,
    createdAt: "2025-09-01",
  },
  {
    _id: "project5",
    slug: "data-viz-toolkit",
    title: "Data Visualization Toolkit",
    shortDescription:
      "Python library for creating beautiful and interactive data visualizations.",
    fullDescription:
      "A comprehensive Python library that simplifies creating stunning data visualizations. Built on top of Matplotlib and Plotly with an intuitive API for researchers and data scientists.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    contributors: [
      {
        name: "Saqib Bedar",
        avatar: "/images/saqibbedar.png",
        role: "Creator",
        githubUrl: "https://github.com/saqibbedar",
      },
    ],
    links: {
      github: "https://github.com/saqibbedar/data-viz-toolkit",
      demo: "https://dataviz.saqibbedar.com",
      docker: null,
      npm: null,
      vscode: null,
      pypi: "https://pypi.org/project/data-viz-toolkit/",
      orcid: "https://orcid.org/0000-0000-0000-0000",
      other: [
        { label: "Documentation", url: "https://dataviz-docs.saqibbedar.com" },
      ],
    },
    metadata: {
      stars: 567,
      forks: 89,
      watchers: 34,
      languages: [
        { name: "Python", percentage: 90, isMain: true },
        { name: "Jupyter Notebook", percentage: 10, isMain: false },
      ],
      license: "Apache-2.0",
      lastUpdated: "2025-08-22",
    },
    tags: ["Python", "Data Science", "Visualization", "Research"],
    category: "Python",
    status: "active",
    visibility: "public",
    featured: true,
    createdAt: "2024-01-15",
  },
];
