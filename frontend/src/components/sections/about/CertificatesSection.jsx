import { FaExternalLinkAlt } from "react-icons/fa";
import certificates from "@/assets/certificates";

// Certificate Card Component
const CertificateCard = ({
  image,
  title,
  description,
  providerName,
  providerLogo,
  credentialUrl,
}) => {
  return (
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-border-light transition-colors"
    >
      {/* Certificate Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay with external link icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <FaExternalLinkAlt className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Provider */}
        <div className="flex items-center gap-2 mb-3">
          {providerLogo && (
            <img
              src={providerLogo}
              alt={providerName}
              className="w-5 h-5 rounded-full object-cover"
            />
          )}
          <span className="text-xs text-fg-muted">{providerName}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-fg-primary group-hover:text-fg-secondary transition-colors line-clamp-1 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-fg-muted line-clamp-2">{description}</p>

        {/* View Credential */}
        <div className="flex items-center gap-1.5 mt-4 text-xs text-fg-secondary group-hover:text-fg-primary transition-colors">
          <span>View Credential</span>
          <FaExternalLinkAlt className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
};

const CertificatesSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Achievements
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Certificates & Credentials
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate._id}
            image={certificate.image}
            title={certificate.title}
            description={certificate.description}
            providerLogo={certificate.providerLogo}
            providerName={certificate.providerName}
            credentialUrl={certificate.credentialUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
