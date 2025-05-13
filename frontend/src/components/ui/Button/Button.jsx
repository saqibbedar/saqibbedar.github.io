import "./Button.css";
import { Link } from "react-router-dom";
import { icons } from "@/assets/assets";
import { useState } from "react";

const Button = ({
  btnValue,
  btnLink,
  btnBg,
  hoverColor,
  isDownloadBtn,
  children,
  variant = "primary",
  size = "medium",
  href,
  download = false,
  onClick,
  isLoading = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={btnLink && btnLink}
      className={"hero-btn"}
      style={{
        background: btnBg && btnBg,
        ...(isHovered && hoverColor && { background: hoverColor }),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{children || props.value || "Button"}</span>
      <span id="hero-btn-svg">
        <icons.rightArrow
          style={{
            transform: isDownloadBtn && isHovered ? "rotate(90deg)" : "",
          }}
        />
      </span>
    </Link>
  );
};

export default Button;
