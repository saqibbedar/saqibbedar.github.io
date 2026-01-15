import { motion } from "motion/react";
import {
  FaMicrophone,
  FaChalkboardUser,
  FaGlobe,
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaHashtag,
} from "react-icons/fa6";
import bootcampsAndEvents from "../../../assets/bootcampsAndEvents";

// 1. Event Badge - Shows type (bootcamp/event) and mode (online/on-site)
const EventBadge = ({ type, mode }) => {
  const isBootcamp = type === "bootcamp";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${
          isBootcamp
            ? "bg-accent/20 text-accent"
            : "bg-purple-500/20 text-purple-400"
        }`}
      >
        {type}
      </span>
      <span className="flex items-center gap-1 px-2 py-1 text-xs text-fg-secondary bg-bg-card rounded-full border border-border">
        {mode === "online" ? (
          <>
            <FaGlobe className="w-3 h-3" />
            Online
          </>
        ) : (
          <>
            <FaLocationDot className="w-3 h-3" />
            On-Site
          </>
        )}
      </span>
    </div>
  );
};

// 2. Role Badge - Shows instructor/speaker role with icon
const RoleBadge = ({ role }) => {
  const isInstructor = role.toLowerCase() === "instructor";

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-fg-primary bg-fg-primary/10 rounded-lg border border-fg-primary/20">
      {isInstructor ? (
        <FaChalkboardUser className="w-3 h-3 sm:w-4 sm:h-4" />
      ) : (
        <FaMicrophone className="w-3 h-3 sm:w-4 sm:h-4" />
      )}
      {role}
    </span>
  );
};

// 3. Topics List - Displays covered topics as pills
const TopicsList = ({ topics }) => {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {topics.map((topic, index) => (
        <span
          key={index}
          className="px-2 sm:px-3 py-1 text-xs text-fg-secondary bg-bg-card rounded-full border border-border"
        >
          {topic}
        </span>
      ))}
    </div>
  );
};

// 4. Resource Links - External links to resources
const ResourceLinks = ({ resources }) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 pt-4 border-t border-border">
      {resources.map((resource, index) => (
        <a
          key={index}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-fg-primary bg-bg-card hover:bg-fg-primary hover:text-bg-primary rounded-lg border border-border transition-all duration-300 group"
        >
          {resource.label}
          <FaArrowUpRightFromSquare className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
};

// 5. Tags List - Hashtags for categorization
const TagsList = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-1 text-xs text-fg-secondary/70 hover:text-accent transition-colors cursor-default"
        >
          <FaHashtag className="w-2.5 h-2.5" />
          {tag}
        </span>
      ))}
    </div>
  );
};

// 6. Image Gallery - Displays event images
const ImageGallery = ({ images, title }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-4 sm:mt-6">
      <div
        className={`grid gap-2 sm:gap-3 ${
          images.length === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {images.slice(0, 2).map((image, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-bg-card border border-border group"
          >
            <img
              src={image}
              alt={`${title} - ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. Event Card - Individual event/bootcamp card
const EventCard = ({ event, index, isLast }) => {
  const isBootcamp = event.type === "bootcamp";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex gap-4 sm:gap-6"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-px bg-border" />
      )}

      {/* Timeline Dot */}
      <div
        className={`relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
          isBootcamp ? "bg-accent" : "bg-purple-500"
        }`}
      >
        {isBootcamp ? (
          <FaChalkboardUser className="w-4 h-4 sm:w-5 sm:h-5 text-bg-primary" />
        ) : (
          <FaMicrophone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-6 sm:pb-8">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <EventBadge type={event.type} mode={event.mode} />
            <div className="flex items-center gap-2">
              <RoleBadge role={event.role} />
              <span className="text-xs sm:text-sm text-fg-secondary">
                {event.date}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-fg-primary group-hover:text-accent transition-colors">
            {event.title}
          </h3>

          {/* Subtitle */}
          {event.subtitle && (
            <p className="text-sm text-fg-secondary -mt-1">{event.subtitle}</p>
          )}
        </div>

        {/* Organizer */}
        <p className="text-xs sm:text-sm text-fg-secondary mb-3">
          Organized by{" "}
          <span className="font-medium text-fg-primary">
            {event.organizedBy}
          </span>
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-fg-secondary leading-relaxed">
          {event.description}
        </p>

        {/* Topics */}
        <TopicsList topics={event.topics} />

        {/* Images */}
        <ImageGallery images={event.images} title={event.title} />

        {/* Resources */}
        <ResourceLinks resources={event.resources} />

        {/* Tags */}
        <TagsList tags={event.tags} />
      </div>
    </motion.div>
  );
};

// 8. Main Section Component
const BootcampsAndEventsSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Community
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Bootcamps & Speaking Events
        </p>
      </div>

      {/* Events Timeline */}
      <div className="max-w-3xl">
        {bootcampsAndEvents.map((event, index) => (
          <EventCard
            key={event._id}
            event={event}
            index={index}
            isLast={index === bootcampsAndEvents.length - 1}
          />
        ))}
      </div>

      {/* Empty State */}
      {bootcampsAndEvents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-fg-secondary">
            No bootcamps or events to display yet.
          </p>
        </div>
      )}
    </section>
  );
};

export default BootcampsAndEventsSection;
