import { useRef } from "react";
import "./CertificatesSection.css";
import { Card } from "@/components/reusable/reusable";
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
        {certificates.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            providerLogo={item.providerLogo}
            providerName={item.providerName}
            credentialUrl={item.credentialUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
