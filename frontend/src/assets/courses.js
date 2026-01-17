export const coursesList = [
  {
    _id: "course1",
    slug: "react-fundamentals",
    title: "React Fundamentals - Complete Guide",
    shortDescription:
      "Learn the basics of React.js and build dynamic web applications.",
    fullDescription:
      "This comprehensive course covers everything you need to know about React.js, from basic concepts like components and props to advanced topics like hooks, context, and performance optimization. Perfect for beginners and intermediate developers looking to master React.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    instructor: {
      name: "Saqib Bedar",
      avatar: "/images/saqibbedar.png",
      bio: "Full Stack Developer & Educator",
    },
    metadata: {
      duration: "8h 30m",
      totalLessons: 42,
      level: "Beginner",
      language: "English",
      lastUpdated: "2025-12-15",
      rating: 4.8,
      totalRatings: 1250,
      enrolledStudents: 5420,
    },
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    platform: {
      name: "YouTube",
      icon: "youtube",
      url: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
    },
    pricing: {
      isFree: true,
      price: 0,
      currency: "USD",
      originalPrice: null,
      discount: null,
    },
    status: "published",
    featured: true,
    createdAt: "2025-01-10",
  },
  {
    _id: "course2",
    slug: "advanced-react-patterns",
    title: "Advanced React Patterns & Best Practices",
    shortDescription:
      "Master advanced React patterns used by top tech companies.",
    fullDescription:
      "Take your React skills to the next level with advanced patterns like compound components, render props, higher-order components, and custom hooks. Learn how to build scalable and maintainable React applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800",
    instructor: {
      name: "Saqib Bedar",
      avatar: "/images/saqibbedar.png",
      bio: "Full Stack Developer & Educator",
    },
    metadata: {
      duration: "12h 45m",
      totalLessons: 58,
      level: "Advanced",
      language: "English",
      lastUpdated: "2025-11-20",
      rating: 4.9,
      totalRatings: 890,
      enrolledStudents: 3200,
    },
    tags: ["React", "Design Patterns", "Advanced", "Architecture"],
    platform: {
      name: "Udemy",
      icon: "udemy",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    pricing: {
      isFree: false,
      price: 49.99,
      currency: "USD",
      originalPrice: 199.99,
      discount: 75,
    },
    status: "published",
    featured: true,
    createdAt: "2025-02-05",
  },
  {
    _id: "course3",
    slug: "nodejs-backend-masterclass",
    title: "Node.js Backend Masterclass",
    shortDescription:
      "Build production-ready APIs with Node.js, Express, and MongoDB.",
    fullDescription:
      "Learn to build scalable backend applications with Node.js. This course covers Express.js, MongoDB, authentication, authorization, file uploads, and deployment strategies.",
    thumbnail:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
    instructor: {
      name: "Saqib Bedar",
      avatar: "/images/saqibbedar.png",
      bio: "Full Stack Developer & Educator",
    },
    metadata: {
      duration: "15h 20m",
      totalLessons: 72,
      level: "Intermediate",
      language: "English",
      lastUpdated: "2025-10-08",
      rating: 4.7,
      totalRatings: 2100,
      enrolledStudents: 8900,
    },
    tags: ["Node.js", "Express", "MongoDB", "Backend", "API"],
    platform: {
      name: "Coursera",
      icon: "coursera",
      url: "https://www.coursera.org/",
    },
    pricing: {
      isFree: false,
      price: 39.99,
      currency: "USD",
      originalPrice: 79.99,
      discount: 50,
    },
    status: "published",
    featured: false,
    createdAt: "2024-09-15",
  },
];
