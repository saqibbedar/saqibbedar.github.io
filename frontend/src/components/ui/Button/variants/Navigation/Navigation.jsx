import { Link } from "react-router-dom";
import { icons } from "@/assets/assets";

const Navigation = ({
  to,
  label,
  children,
  size = "medium",
  className,
  ...props
}) => {
  return (
    <Link 
      to={to}
      className={`button navigation ${size} ${className}`}
      {...props}
    >
      {children || label}
      <icons.rightArrow className="button-icon" />
    </Link>
  );
};

export default Navigation;