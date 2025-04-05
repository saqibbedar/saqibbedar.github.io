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
        {awards.map((data, index) => (
            <div className="Awards-box shadow-sm" key={index}>
                <div className="Award-date">
                    <h6>{data.date}</h6>
                </div>
                <div className="Award-des">
                    <p>
                    {data.des}
                    </p>
                </div>
                <div className="awarding-institution">
                    <h6>
                    <Link to={data.link} target="_blank">{data.institution_name}</Link>
                    </h6>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAwards;
