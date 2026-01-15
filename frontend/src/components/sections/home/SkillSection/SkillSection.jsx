import { skills } from "@/assets/assets";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const SkillBadge = ({ skill }) => {
  return (
    <Link
      to={`/search?q=${skill.name}`}
      title={skill.name}
      className="group flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 mx-2 sm:mx-3
                 bg-bg-card rounded-full border border-border
                 hover:bg-btn-primary-bg hover:border-border-light
                 transition-all duration-300 ease-out"
    >
      <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 transition-transform duration-300 group-hover:scale-110" />
      <span className="text-xs sm:text-sm md:text-base font-medium text-fg-secondary group-hover:text-fg-primary transition-colors">
        {skill.name}
      </span>
    </Link>
  );
};

const SkillSection = () => {
  return (
    <section id="skills" className="scroll-mt-14 py-6 md:py-10 overflow-hidden">
      {/* First Row - Left to Right */}
      <div className="mb-4 sm:mb-6">
        <Marquee
          pauseOnHover={true}
          autoFill={true}
          speed={40}
          gradient={false}
        >
          <div className="flex py-2">
            {skills.first_row.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Second Row - Right to Left */}
      <div>
        <Marquee
          pauseOnHover={true}
          autoFill={true}
          speed={40}
          direction="right"
          gradient={false}
        >
          <div className="flex py-2">
            {skills.second_row.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SkillSection;
