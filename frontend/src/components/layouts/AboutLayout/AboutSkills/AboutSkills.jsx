import "./AboutSkills.css"
import { Link } from 'react-router-dom';
import { aboutSkills } from '@/assets/assets';

const AboutSkills = () => {

  return (
    <div className="animate-[var(--fadeIn)] mt-8 mb-12 overflow-hidden">
      <div className="section-info">
        <h1>Skills</h1>
      </div>
      <div className="about-page-skill-box-wrapper">
        {aboutSkills.map(({ link, name, Icon }) => (
          <Link
            key={name}
            to={link}
            className="about-page-skill-box"
          >
            <h1>{ name }</h1>
            <Icon /> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
