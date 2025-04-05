import "./Skills.css";
import { Link } from "react-router-dom";
import { skills } from "@/assets/assets";

const MySkills = () => {
  return (
    <div className="skill-wrapper">
      <div className="scroll" style={{ "--time": "25s" }}>
        <div>
          {skills.first_row.map((skills, index) => (
            <Link to={skills.skill_link} key={index} className="skill-box">
              {<skills.skill_icon />}
              <h1>{skills.skill_name}</h1>
            </Link>
          ))}
        </div>
        <div id="div-2">
          {skills.first_row.map((skills, index) => (
            <Link to={skills.skill_link} key={index} className="skill-box">
              {<skills.skill_icon />}
              <h1>{skills.skill_name}</h1>
            </Link>
          ))}
        </div>
      </div>
      <div className="scroll" style={{"--time":"25s"}}>
      <div>
        {
            skills.second_row.map((skills, index) =>(
                <Link to={skills.skill_link} key={index} className="skill-box">
                    {<skills.skill_icon/>}
                    <h1>{skills.skill_name}</h1>
                </Link>
            ))
        }
      </div>
      <div id="div-2">
        {
            skills.second_row.map((skills, index) =>(
                <Link to={skills.skill_link} key={index} className="skill-box">
                    {<skills.skill_icon/>}
                    <h1>{skills.skill_name}</h1>
                </Link>
            ))
        }
      </div>
    </div>
    </div>
  );
};

export default MySkills;
