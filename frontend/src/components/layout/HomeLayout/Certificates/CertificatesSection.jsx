import { useRef } from "react";
import "./CertificatesSection.css";
import { CertificateCard } from "@/components/ui";
import { certificates, icons } from "@/assets/assets";

const CertificatesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="CardSection-Wrapper">
      <div className="section-info">
        <h1>Certificates</h1>
        <div className="section-info-navigation-btns">
          <button onClick={() => scroll("left")}>
            <icons.leftArrow />
          </button>
          <button onClick={() => scroll("right")}>
            <icons.rightArrow />
          </button>
        </div>
      </div>

      <div className="posts" ref={scrollRef}>
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
    </div>
  );
};

export default CertificatesSection;
