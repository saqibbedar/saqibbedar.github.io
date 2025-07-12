import "./CertificateCard.css";
import { Link } from "react-router-dom";
import SimpleParallax from "simple-parallax-js";

const CertificateCard = ({ image, title, description, providerLogo, providerName, credentialUrl }) => {

  return (
    <>
      <div className="card rounded-lg">
        <div className={"main-card-img"}>
          <SimpleParallax orientation={"left"} scale={1.3}>
            <img src={image} className="img" />
          </SimpleParallax>
        </div>
        <div className={"card-content"}>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-footer">
          <div
            className={"card-author-img"}
          >
            <img src={providerLogo} alt="" />
          </div>
          <div className={"author-info"}>
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
