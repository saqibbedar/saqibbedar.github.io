import {
  FaCode,
  FaVideo,
  FaMicrophone,
  FaHeart,
  FaCoffee,
  FaChalkboardTeacher,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCalendarCheck,
  FaYoutube,
  FaUsers,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { SiBuymeacoffee, SiPatreon, SiGithubsponsors } from "react-icons/si";

// Services data - will be replaced with backend API call later
export const servicesData = [
  {
    _id: "service1",
    slug: "hire-developer",
    title: "Hire Me as Developer",
    shortDescription:
      "Available for full-time or part-time development roles. Let's build something amazing together.",
    fullDescription:
      "Looking for a skilled developer to join your team? I'm available for full-time and part-time opportunities. With expertise in modern web technologies, I can help bring your ideas to life.",
    icon: FaCode,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    category: "Employment",
    features: [
      "Full-time & Part-time availability",
      "Remote & On-site options",
      "Frontend & Backend expertise",
      "Modern tech stack proficiency",
    ],
    availability: "Open to opportunities",
    responseTime: "Within 24-48 hours",
    ctaText: "Discuss Opportunity",
    featured: true,
  },
  {
    _id: "service2",
    slug: "consultation",
    title: "Technical Consultation",
    shortDescription:
      "Get expert advice on your projects through audio or video calls. One-on-one sessions tailored to your needs.",
    fullDescription:
      "Need guidance on architecture decisions, code reviews, or technical challenges? Book a consultation call and get personalized advice from an experienced developer.",
    icon: FaVideo,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    category: "Consultation",
    features: [
      "1-on-1 video/audio calls",
      "Code review sessions",
      "Architecture guidance",
      "Career mentorship",
    ],
    availability: "By appointment",
    responseTime: "Schedule within 3-5 days",
    ctaText: "Book Consultation",
    featured: true,
  },
  {
    _id: "service3",
    slug: "speaker",
    title: "Event Speaker",
    shortDescription:
      "Invite me as a speaker for your tech events, conferences, workshops, or meetups.",
    fullDescription:
      "I'm available to speak at tech events, conferences, and workshops on topics related to web development, open source, and software engineering best practices.",
    icon: FaMicrophone,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    category: "Speaking",
    features: [
      "Conference talks",
      "Workshop sessions",
      "Panel discussions",
      "Webinars & virtual events",
    ],
    availability: "Upon request",
    responseTime: "Confirmation within 1 week",
    ctaText: "Invite as Speaker",
    featured: true,
  },
  {
    _id: "service4",
    slug: "sponsorship",
    title: "Sponsor My Work",
    shortDescription:
      "Support my open-source projects and content creation. Your sponsorship helps me create more valuable resources.",
    fullDescription:
      "By sponsoring my work, you help me dedicate more time to creating open-source tools, educational content, and community resources. Every contribution makes a difference!",
    icon: FaHeart,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    category: "Support",
    features: [
      "Support open-source development",
      "Early access to projects",
      "Sponsor recognition",
      "Direct communication channel",
    ],
    availability: "Always open",
    responseTime: "Instant acknowledgment",
    ctaText: "Become a Sponsor",
    featured: false,
    platforms: [
      {
        name: "GitHub Sponsors",
        icon: SiGithubsponsors,
        url: "https://github.com/sponsors/saqibbedar",
      },
      {
        name: "Buy Me a Coffee",
        icon: SiBuymeacoffee,
        url: "https://buymeacoffee.com/saqibbedar",
      },
      {
        name: "Patreon",
        icon: SiPatreon,
        url: "https://patreon.com/saqibbedar",
      },
    ],
  },
  {
    _id: "service5",
    slug: "support",
    title: "Financial Support",
    shortDescription:
      "Appreciate my work? Support me with a coffee or a small donation. It keeps me motivated!",
    fullDescription:
      "If my content, tutorials, or open-source projects have helped you, consider supporting me financially. Your support helps me continue creating valuable resources for the community.",
    icon: FaCoffee,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    category: "Support",
    features: [
      "One-time donations",
      "Monthly support options",
      "No commitment required",
      "Every bit helps!",
    ],
    availability: "Always open",
    responseTime: "Thank you message sent!",
    ctaText: "Buy Me a Coffee",
    featured: false,
    platforms: [
      {
        name: "Buy Me a Coffee",
        icon: SiBuymeacoffee,
        url: "https://buymeacoffee.com/saqibbedar",
      },
    ],
  },
  {
    _id: "service6",
    slug: "teaching",
    title: "Online Teaching",
    shortDescription:
      "Learn programming and web development through personalized online sessions tailored to your pace.",
    fullDescription:
      "Want to learn programming or improve your development skills? I offer personalized online teaching sessions covering various topics from basics to advanced concepts.",
    icon: FaChalkboardTeacher,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    category: "Education",
    features: [
      "Personalized curriculum",
      "1-on-1 sessions",
      "Project-based learning",
      "Flexible scheduling",
    ],
    availability: "Limited slots available",
    responseTime: "Respond within 2-3 days",
    ctaText: "Request Teaching",
    featured: true,
  },
  {
    _id: "service7",
    slug: "collaboration",
    title: "Collaboration",
    shortDescription:
      "Open to collaborating on YouTube courses, projects, or content creation. Let's create together!",
    fullDescription:
      "I'm open to collaborative opportunities including recording courses for YouTube channels, working on joint projects, creating educational content, or any creative collaboration in the tech space.",
    icon: FaHandshake,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    category: "Collaboration",
    features: [
      "YouTube course collaborations",
      "Joint project development",
      "Content co-creation",
      "Technical partnerships",
    ],
    availability: "Open to proposals",
    responseTime: "Review within 1 week",
    ctaText: "Propose Collaboration",
    featured: true,
    collaborationTypes: [
      { name: "YouTube", icon: FaYoutube },
      { name: "Projects", icon: FaCode },
      { name: "Content", icon: FaGraduationCap },
    ],
  },
];
