import "./SkillSection.css";
import { skills } from "@/assets/assets";

const SkillSection = () => {
  return (
    <div className="skill-wrapper">
      <div className="scroll" style={{ "--time": "25s" }}>
        <div>
          {skills.first_row.map((skill, index) => (
            <div key={index} className="skill-box">
              {<skill.icon />}
              <h1>{skill.name}</h1>
            </div>
          ))}
        </div>
        <div id="div-2">
          {skills.first_row.map((skill, index) => (
            <div key={index} className="skill-box">
              {<skill.icon />}
              <h1>{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll" style={{"--time":"25s"}}>
      <div>
        {
            skills.second_row.map((skill, index) =>(
                <div key={index} className="skill-box">
                    {<skill.icon/>}
                    <h1>{skill.name}</h1>
                </div>
            ))
        }
      </div>
      <div id="div-2">
        {
            skills.second_row.map((skill, index) =>(
                <div key={index} className="skill-box">
                    {<skill.icon/>}
                    <h1>{skills.name}</h1>
                </div>
            ))
        }
      </div>
    </div>
    </div>
  );
};

export default SkillSection;
