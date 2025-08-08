import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({
  to,
  label,
  children,
  size = "medium",
  className,
  fg, // foreground
  bg, // background
  hoverFg, // hoverForeground
  hoverBg, // hoverBackground
  ...props
}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`button navigation ${size} ${className ? className : ""}`}
      aria-label={label || "Navigation Button"}
      {...props}
      style={{ color: isHovered ? hoverFg : fg, background: isHovered ? hoverBg : bg}}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={()=> setIsHovered(!isHovered)}
    >
      {label}
      {children}
    </Link>
  );
};

// Navigation PropTypes
Navigation.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  fg: PropTypes.string,
  bg: PropTypes.string,
  hoverFg: PropTypes.string,
  hoverBg: PropTypes.string
}

// Default Props
Navigation.defaultProps = {
  size: "medium",
  className: "",
};

export default Navigation;