import "./SkillSection.css";
import { skills } from "@/assets/assets";
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"

const SkillSection = () => {
  return (
    <div className="skill-wrapper w-[90%] m-auto rounded-md p-10">
      <div className="">
        <h2 className="text-[48px] font-medium text-center">Tools of Trade </h2>
      </div>
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
  );
};

export default SkillSection;
