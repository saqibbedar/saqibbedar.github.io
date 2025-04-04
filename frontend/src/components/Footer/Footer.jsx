import "./Footer.css";
import { footer, author } from "@/assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="copyright-area">
          <Link to={"/About"}>{author.name}</Link> © <span>2024-2024</span></div>
        <div className="social-media-links">
          {footer.map((data, index) => (
            <Link key={index} to={data.link} target="_blank">
              <data.icon/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
