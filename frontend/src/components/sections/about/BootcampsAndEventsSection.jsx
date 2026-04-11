import {
  FaMicrophone,
  FaChalkboardUser,
  FaGlobe,
  FaLocationDot,
  FaClock,
  FaCalendarDay,
  FaArrowUpRightFromSquare,
  FaHashtag,
} from "react-icons/fa6";
import { useContent } from "@/context";
import { ImageCarousel } from "@/components/ui";

// 1. Event Badge - Shows type (bootcamp/event) and mode (online/on-site)
const EventBadge = ({ type, mode }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-bg-card text-fg-secondary border border-border">
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
    <span className="w-fit flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-bg-card text-fg-primary border border-border">
      {isInstructor ? (
        <FaChalkboardUser className="w-3 h-3 sm:w-4 sm:h-4 text-fg-secondary" />
      ) : (
        <FaMicrophone className="w-3 h-3 sm:w-4 sm:h-4 text-fg-secondary" />
      )}
      {role}
    </span>
  );
};

const EventMeta = ({ date, time, venue }) => {
  const formatEventDate = (value) => {
    if (!value) return "Date TBD";

    if (/^\d{4}$/.test(String(value))) {
      return value;
    }

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(parsedDate);
  };

  return (
    <div className="space-y-2 text-xs sm:text-sm text-fg-secondary">
      <div className="flex gap-2.5">
        <div className="inline-flex items-center gap-1.5">
          <FaCalendarDay className="w-3.5 h-3.5 text-fg-secondary" />
          {formatEventDate(date)}
        </div>

        {time && (
          <div className="inline-flex items-center gap-1.5">
            <FaClock className="w-3.5 h-3.5 text-fg-secondary" />
            {time}
          </div>
        )}
      </div>

      {venue && (
        <div className="flex items-start gap-1.5 min-w-0">
          <FaLocationDot className="w-3.5 h-3.5 text-fg-secondary shrink-0 mt-0.5" />
          <span className="min-w-0 whitespace-normal break-words leading-snug">
            {venue}
          </span>
        </div>
      )}
    </div>
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
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-black bg-white rounded-full border border-transparent hover:border-transparent hover:opacity-90 transition-all duration-300 group"
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

// 6. Event Card - Individual event/bootcamp card
const EventCard = ({ event, isLast }) => {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] top-8 sm:top-10 bottom-0 w-px bg-border" />
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-btn-primary-bg">
        {event.type === "bootcamp" ? (
          <FaChalkboardUser className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        ) : (
          <FaMicrophone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8 sm:pb-10 pt-1">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <EventBadge type={event.type} mode={event.mode} />
            <RoleBadge role={event.role} />
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-fg-primary leading-tight">
              {event.title}
            </h3>

            {/* Subtitle */}
            {event.subtitle && (
              <p className="text-sm text-fg-secondary leading-relaxed max-w-3xl">
                {event.subtitle}
              </p>
            )}
          </div>

          <EventMeta date={event.date} time={event.time} venue={event.venue} />

          {/* Organizer */}
          <p className="text-xs sm:text-sm text-fg-secondary">
            Organized by{" "}
            <span className="font-medium text-fg-primary">
              {event.organizedBy}
            </span>
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-fg-secondary leading-relaxed max-w-3xl">
            {event.description}
          </p>

          {/* Topics */}
          <TopicsList topics={event.topics} />

          {/* Images */}
          <ImageCarousel images={event.images} title={event.title} />

          {/* Resources */}
          <ResourceLinks resources={event.resources} />

          {/* Tags */}
          <TagsList tags={event.tags} />
        </div>
      </div>
    </div>
  );
};

// 7. Main Section Component
const BootcampsAndEventsSection = () => {
  const { bootcampsAndEvents } = useContent();

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
