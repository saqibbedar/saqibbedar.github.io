import "./AboutAwards.css";
import { Link } from "react-router-dom";
import { awards } from "@/assets/assets";

const AboutAwards = () => {
  return (
    <div className="animate-[var(--fadeIn)] mt-8 mb-12">
      <div className="section-info">
        <h1>Honors & awards</h1>
      </div>
      <div className="award-wrapper">
        {awards.map(({_id, date, description, awardingInstitutionName, credentialUrl}) => (
            <div className="Awards-box shadow-sm" key={_id}>
                <div className="Award-date">
                    <h6>{date}</h6>
                </div>
                <div className="Award-des">
                    <p>
                    {description}
                    </p>
                </div>
                <div className="awarding-institution">
                    <h6>
                    <Link to={credentialUrl} target="_blank">{awardingInstitutionName}</Link>
                    </h6>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAwards;
