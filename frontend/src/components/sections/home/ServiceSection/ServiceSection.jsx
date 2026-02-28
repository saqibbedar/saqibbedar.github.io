import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { servicesData } from "@/assets/services";

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <div className="group p-6 bg-bg-card border border-border rounded-2xl hover:border-border-light transition-colors">
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.iconBg}`}
      >
        <Icon className={`w-5 h-5 ${service.iconColor}`} />
      </div>

      {/* Content */}
      <h3 className="font-semibold text-fg-primary mb-2">{service.title}</h3>
      <p className="text-sm text-fg-muted line-clamp-2 mb-4">
        {service.shortDescription}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-4">
        {service.features.slice(0, 2).map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-xs text-fg-secondary"
          >
            <span className="w-1 h-1 rounded-full bg-fg-muted" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-secondary group-hover:text-fg-primary transition-colors"
      >
        {service.ctaText}
        <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};

const ServiceSection = () => {
  // Get top 4 featured services
  const featuredServices = servicesData.filter((s) => s.featured).slice(0, 4);

  return (
    <section className="py-10 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Services
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          How I Can Help You
        </p>
        <p className="text-fg-secondary max-w-2xl">
          From development to teaching, I offer various services to help you
          achieve your goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service._id} service={service} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-block px-6 py-3 text-sm sm:text-base font-semibold text-fg-primary bg-btn-primary-bg hover:bg-btn-primary-hover rounded-full transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
