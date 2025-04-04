import "./Footer.css";
import React from "react";
import { footer_data, brand_name } from "../../assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="copyright-area">
          <Link to={"/About"}>{brand_name.author_name}</Link> © <span>2024-2024</span></div>
        <div className="social-media-links">
          {footer_data.map((data, index) => (
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
