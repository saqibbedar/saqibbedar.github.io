const bootcampsAndEvents = [
  {
    _id: "bootcamp-1",
    type: "bootcamp",
    mode: "online",
    role: "Instructor",
    title: "GitHub: Learn What Matters",
    subtitle: "Day 2 of GitHub Mastery Bootcamp",
    date: "2024",
    organizedBy: "MLSA QAU",
    description:
      "Led an engaging GitHub session covering core concepts from basics to advanced topics including Git vs GitHub differences, managing local and remote repositories, essential Git commands, working with branches, and deploying websites for free using GitHub Pages.",
    topics: [
      "Git vs GitHub",
      "Local & Remote Repositories",
      "Essential Git Commands",
      "Working with Branches",
      "GitHub Pages Deployment",
    ],
    images: [
      "/images/placeholder-bootcamp-1.jpg",
      "/images/placeholder-bootcamp-2.jpg",
    ],
    resources: [
      {
        label: "GitHub Mastery Resource",
        url: "https://lnkd.in/dh_4TXVN",
      },
      {
        label: "Event Notes",
        url: "https://lnkd.in/d_yGtgpm",
      },
    ],
    tags: ["GitHubBootcamp", "OpenSource", "WebDevelopment", "TechEducation"],
  },
  {
    _id: "event-1",
    type: "event",
    mode: "on-site",
    role: "Speaker",
    title: "Introduction to Version Control & GitHub",
    subtitle: "Orientation Event for Junior Fellows",
    date: "2024",
    organizedBy: "MLSA QAU",
    description:
      "Guided junior fellows during the orientation event, introducing them to version control systems and GitHub, highlighting how essential these tools are in today's development landscape.",
    topics: [
      "Version Control Basics",
      "Introduction to GitHub",
      "Why VCS Matters",
    ],
    images: ["/images/placeholder-event-1.jpg"],
    resources: [],
    tags: ["TechTalk", "CommunityLearning", "DeveloperJourney"],
  },
];

export default bootcampsAndEvents;
