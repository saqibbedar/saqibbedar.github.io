import { skills } from "@/assets/assets";
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"

const SkillSection = () => {
  return (
    <div className="block w-11/12 mx-auto border-t">
      <div className="bg-gray-100">

        <div className="marquee-wrapper">
          <Marquee pauseOnHover={true} autoFill={true} speed={25}>
              <div className="marquee-row">
                {skills.first_row.map((skill, index) => (
                  <Link to={`/search?q=${skill.name}`} key={index} className="skill-box">
                    {<skill.icon />}
                    <h1>{skill.name}</h1>
                  </Link>
                ))}
              </div>
          </Marquee>

          <Marquee pauseOnHover={true} autoFill={true} speed={25} direction="right">
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
      </div>
    </div>
  );
};

export default SkillSection;
