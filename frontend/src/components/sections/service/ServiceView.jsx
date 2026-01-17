import { Link } from "react-router-dom";
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
import { useState } from "react";
import { servicesData } from "@/assets/assets";

// Category data
const categories = [
  { name: "All", icon: null },
  { name: "Employment", icon: FaBriefcase },
  { name: "Consultation", icon: FaVideo },
  { name: "Speaking", icon: FaMicrophone },
  { name: "Education", icon: FaGraduationCap },
  { name: "Collaboration", icon: FaHandshake },
  { name: "Support", icon: FaHeart },
];

// Service Card Component
const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group bg-bg-card rounded-2xl border border-border hover:border-border-light transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-6 sm:p-8 flex-1">
        {/* Icon & Category */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.iconBg}`}
          >
            <Icon className={`w-7 h-7 ${service.iconColor}`} />
          </div>
          <span className="px-3 py-1 text-xs font-medium text-fg-primary bg-bg-card border border-border-light rounded-full">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-fg-primary mb-3 group-hover:text-fg-secondary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-fg-muted leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-5">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <FaCheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              <span className="text-fg-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Availability & Response Time */}
        <div className="flex flex-wrap gap-3 text-xs text-fg-muted">
          <div className="flex items-center gap-1.5">
            <FaClock className="w-3.5 h-3.5" />
            <span>{service.responseTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCalendarCheck className="w-3.5 h-3.5" />
            <span>{service.availability}</span>
          </div>
        </div>

        {/* Support Platforms (for sponsorship/support services) */}
        {service.platforms && (
          <div className="mt-5 pt-4 border-t border-border">
            <p className="text-xs text-fg-secondary mb-3">Support via:</p>
            <div className="flex items-center gap-2">
              {service.platforms.map((platform, index) => {
                const PlatformIcon = platform.icon;
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-bg-primary border border-border hover:border-border-light flex items-center justify-center transition-colors"
                    title={platform.name}
                  >
                    <PlatformIcon className="w-4 h-4 text-fg-secondary" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Collaboration Types */}
        {service.collaborationTypes && (
          <div className="mt-5 pt-4 border-t border-border">
            <p className="text-xs text-fg-secondary mb-3">Open for:</p>
            <div className="flex items-center gap-2">
              {service.collaborationTypes.map((type, index) => {
                const TypeIcon = type.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-primary border border-border rounded-full text-xs text-fg-secondary"
                  >
                    <TypeIcon className="w-3.5 h-3.5" />
                    {type.name}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="p-6 sm:p-8 pt-0">
        <Link
          to="/contact"
          state={{ service: service.title }}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-fg-primary text-bg-primary font-medium rounded-full hover:opacity-90 transition-opacity"
        >
          {service.ctaText}
          <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

// Category Tab Component
const CategoryTab = ({ category, isActive, onClick }) => {
  const Icon = category.icon;
  return (
    <button
      onClick={() => onClick(category.name)}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
        isActive
          ? "bg-fg-primary text-bg-primary"
          : "text-fg-secondary hover:text-fg-primary border border-border hover:border-border-light"
      }`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {category.name}
    </button>
  );
};

// Quick Action Card
const QuickActionCard = ({
  icon: Icon,
  title,
  description,
  link,
  external,
}) => (
  <a
    href={external ? link : undefined}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex items-start gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-border-light transition-colors group"
  >
    <div className="w-10 h-10 rounded-lg bg-bg-primary border border-border flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-fg-secondary group-hover:text-fg-primary transition-colors" />
    </div>
    <div>
      <h4 className="font-medium text-fg-primary mb-1">{title}</h4>
      <p className="text-sm text-fg-secondary">{description}</p>
    </div>
  </a>
);

const ServiceView = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter services based on category
  const filteredServices =
    activeCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  // Featured services for highlight
  const featuredServices = servicesData.filter((service) => service.featured);

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Services
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          How Can I Help You?
        </p>
        <p className="text-fg-secondary max-w-2xl">
          Whether you need a developer, consultant, speaker, or collaborator —
          I&apos;m here to help. All services require a request and confirmation
          to ensure we&apos;re the right fit.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mb-10 md:mb-14">
        <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionCard
            icon={FaBriefcase}
            title="Looking to Hire?"
            description="Check my availability for opportunities"
            link="/contact"
          />
          <QuickActionCard
            icon={SiBuymeacoffee}
            title="Support My Work"
            description="Buy me a coffee to keep me going"
            link="https://buymeacoffee.com/saqibbedar"
            external
          />
          <QuickActionCard
            icon={FaYoutube}
            title="Collaborate on Content"
            description="Let's create something together"
            link="/contact"
          />
          <QuickActionCard
            icon={FaUsers}
            title="Request Consultation"
            description="Get personalized technical advice"
            link="/contact"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2">
        {categories.map((category) => (
          <CategoryTab
            key={category.name}
            category={category}
            isActive={activeCategory === category.name}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      {/* Service Count */}
      <div className="mb-6">
        <p className="text-sm text-fg-muted">
          Showing{" "}
          <span className="text-fg-primary font-medium">
            {filteredServices.length}
          </span>{" "}
          {filteredServices.length === 1 ? "service" : "services"}
          {activeCategory !== "All" && (
            <span>
              {" "}
              in <span className="text-fg-primary">{activeCategory}</span>
            </span>
          )}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-16">
          <p className="text-fg-muted text-lg">
            No services found in this category.
          </p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto p-8 bg-bg-card border border-border rounded-2xl">
          <h3 className="text-xl font-semibold text-fg-primary mb-3">
            Not Sure What You Need?
          </h3>
          <p className="text-fg-secondary mb-6">
            No worries! Reach out and let&apos;s discuss how I can help you
            achieve your goals. Every request is reviewed personally.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-fg-primary text-bg-primary font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceView;
