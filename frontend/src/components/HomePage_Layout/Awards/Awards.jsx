import "./Awards.css";
import { Link } from "react-router-dom";
import { Awards_data } from "../../../assets/assets";

const Awards = () => {
  return (
    <>
      <div className="section-info">
        <h1>Honors & awards</h1>
      </div>
      <div className="award-wrapper">
        {Awards_data.map((data, index) => (
            <div className="Awards-box" key={index}>
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
    </>
  );
};

export default Awards;
