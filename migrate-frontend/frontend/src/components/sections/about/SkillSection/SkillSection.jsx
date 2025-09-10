import "./SkillSection.css"
import { aboutSkills } from '@/assets/assets';

const SkillSection = () => {

  return (
    <div className="animate-[var(--fadeIn)] mt-8 mb-12 overflow-hidden">
      <div className="section-info">
        <h1>Skills</h1>
      </div>
      <div className="about-page-skill-box-wrapper">
        {aboutSkills.map(({ name, Icon }) => (
          <div
            key={name}
            className="about-page-skill-box"
          >
            <h1>{ name }</h1>
            <Icon /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
