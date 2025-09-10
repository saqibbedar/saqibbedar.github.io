import PropTypes from "prop-types";
import { useState } from "react";

const Basic = ({
  label,
  onClick,
  children,
  size = "medium",
  isLoading = false,
  fg, // foreground
  bg, // background
  hoverFg, // hoverForeground
  hoverBg, // hoverBackground
  className,
  cursor = "auto",
  ...props
}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`button basic ${size} ${className}`}
      disabled={isLoading}
      style={{cursor: cursor, color: isHovered ? hoverFg : fg, background: isHovered ? hoverBg : bg}}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      aria-label={label || "Basic Button"}
      {...props}
    >
      {children || label}
    </button>
  );
};

// Props
Basic.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isLoading: PropTypes.bool,
  fg: PropTypes.string,
  bg: PropTypes.string,
  hoverFg: PropTypes.string,
  hoverBg: PropTypes.string,
  className: PropTypes.string,
  cursor: PropTypes.string
};

// default
Basic.defaultTypes = {
  size: "medium",
  cursor: "auto"
}

export default Basic;