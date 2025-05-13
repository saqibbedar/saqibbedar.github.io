import "./CertificateCard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CertificateCard = ({ image, title, description, providerLogo, providerName, credentialUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [image, title, description, providerLogo, providerName]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="card rounded-lg">
        <div className={isLoading ? "main-card-img skeleton" : "main-card-img"}>
          <img src={image} onLoad={handleImageLoad} className="img" />
        </div>
        <div className={isLoading ? "card-content skeleton" : "card-content"}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          <div
            className={
              isLoading ? "card-author-img skeleton" : "card-author-img"
            }
          >
            <img src={providerLogo} alt="" />
          </div>
          <div className={isLoading ? "author-info skeleton" : "author-info"}>
            <h5>{providerName}</h5>
            <h6>
              <Link to={credentialUrl} target="_blank">
                See Credential
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateCard;
