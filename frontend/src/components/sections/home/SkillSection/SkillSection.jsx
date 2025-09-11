import { skills } from "@/assets/assets";
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom"

const SkillSection = () => {
  return (
    <div className="mt-10">
      <div className="">

        <div className="">
          <Marquee pauseOnHover={true} autoFill={true} speed={70}>
              <div className="flex">
                {skills.first_row.map((skill, index) => (
                  <Link to={`/search?q=${skill.name}`} key={index} className="flex items-center justify-center px-20 py-10 border border-[var(--dt-border-color)] hover:bg-[var(--dt-bdr-clr-xtra)]" title={skill.name}>
                    {<skill.icon className="h-14 w-14"/>}
                  </Link>
                ))}
              </div>
          </Marquee>

          <Marquee pauseOnHover={true} autoFill={true} speed={70} direction="right">
              <div className="flex">
                {skills.second_row.map((skill, index) => (
                  <Link to={`/search?q=${skill.name}`} key={index} className="flex items-center justify-center px-20 py-10 border border-[var(--dt-border-color)] hover:bg-[var(--dt-bdr-clr-xtra)]" title={skill.name}>
                    {<skill.icon className="h-14 w-14"/>}
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
