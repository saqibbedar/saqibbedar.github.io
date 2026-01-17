// import "./CertificateCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CertificateCard = ({
  image,
  title,
  description,
  providerLogo,
  providerName,
  credentialUrl,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group flex-shrink-0 w-[300px] sm:w-[340px] bg-bg-card rounded-2xl border border-border hover:border-border-light transition-all duration-300 overflow-hidden">
      {/* Certificate Image */}
      <div
        className={`relative h-40 sm:h-44 w-full overflow-hidden ${
          !imageLoaded ? "skeleton" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-fg-primary mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-fg-secondary leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Footer - Provider Info */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            {/* Provider Logo */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 p-1.5 rounded-lg border border-border overflow-hidden">
              <img
                src={providerLogo}
                alt={providerName}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Provider Name */}
            <span className="text-sm font-medium text-fg-secondary">
              {providerName}
            </span>
          </div>

          {/* Credential Link */}
          <Link
            to={credentialUrl}
            target="_blank"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors"
          >
            View
            <FaArrowUpRightFromSquare className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
