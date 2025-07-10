import "./SkillSection.css";
import { skills } from "@/assets/assets";
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"

const SkillSection = () => {
  return (
    <div className="skill-wrapper">
      <Marquee pauseOnHover={true} autoFill={true}>
          <div className="marquee-row">
            {skills.first_row.map((skill, index) => (
              <Link to={`/search?q=${skill.name}`} key={index} className="skill-box">
                {<skill.icon />}
                <h1>{skill.name}</h1>
              </Link>
            ))}
          </div>
      </Marquee>

      <Marquee pauseOnHover={true} autoFill={true}>
          <div className="marquee-row">
            {skills.second_row.map((skill, index) => (
              <Link to={`/search?q=${skill.name}`} key={index} className="skill-box">
                {<skill.icon />}
                <h1>{skill.name}</h1>
              </Link>
            ))}
          </div>
      </Marquee>
    </div>
  );
};

export default SkillSection;
