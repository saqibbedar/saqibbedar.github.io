import PropTypes from "prop-types";
import "./Button.css";
import { Basic, Navigation, Download } from "./variants";

const Button = ({
  variant = "basic",
  size = "medium",
  ...props
}) => {

  const VARIANTS = {
    basic: Basic,
    navigation: Navigation,
    download: Download
  };

  const Component = VARIANTS[variant.toLowerCase()] || Basic;
  return <Component size={size} {...props} />
};

// Props
Button.propTypes = {
  variant: PropTypes.oneOf(["basic", "navigation", "download"]),
  size: PropTypes.oneOf(["small", "medium", "large"])
}

// default
Button.defaultProps = {
  variant: "basic",
  size: "medium"
}

export default Button;
