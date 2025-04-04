import { Link } from "react-router-dom";
import "./Skills.css";
import {
  author_skills_first_row,
  author_skills_second_row,
} from "@/assets/assets";

const MySkills = () => {
  return (
    <div className="skill-wrapper">
      <div className="scroll" style={{ "--time": "25s" }}>
        <div>
          {author_skills_first_row.map((skills, index) => (
            <Link to={skills.skill_link} key={index} className="skill-box">
              {<skills.skill_icon />}
              <h1>{skills.skill_name}</h1>
            </Link>
          ))}
        </div>
        <div id="div-2">
          {author_skills_first_row.map((skills, index) => (
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
            author_skills_second_row.map((skills, index) =>(
                <Link to={skills.skill_link} key={index} className="skill-box">
                    {<skills.skill_icon/>}
                    <h1>{skills.skill_name}</h1>
                </Link>
            ))
        }
      </div>
      <div id="div-2">
        {
            author_skills_second_row.map((skills, index) =>(
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
