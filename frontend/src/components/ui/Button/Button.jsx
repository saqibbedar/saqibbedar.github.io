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

export default Button;
