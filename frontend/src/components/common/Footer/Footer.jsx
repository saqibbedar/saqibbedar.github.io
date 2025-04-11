import { footer, author } from "@/assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[var(--featured-bg)] px-[26px] media1:px-[80px] mediaXl:px-8 mediaXXl:px-20">
      <div className="flex flex-col-reverse justify-start items-start gap-5 py-10 media1:flex-row media1:justify-between media1:items-center media1:py-[30px]">
        <div className="copyright-area text-[#b4b4b4] text-[.8425rem]">
          <Link to={"/About"}>{author.name}</Link> ©{" "}
          <span className="text-inherit">2024-2024</span>
        </div>
        <div className="social-media-links gap-5 media1:gap-[25px] flex justify-center items-center">
          {footer.map((data, index) => (
            <Link key={index} to={data.link} target="_blank">
              <data.icon fill={"rgb(236, 236, 236)"} className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
