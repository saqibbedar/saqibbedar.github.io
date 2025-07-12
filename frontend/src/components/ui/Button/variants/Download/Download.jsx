import { icons } from "@/assets/assets";

const Download = ({
  href,
  fileName,
  label,
  children,
  size = "medium",
  className,
  ...props
}) => {
  return (
    <a 
      href={href}
      download={fileName}
      className={`button download ${size} ${className}`}
      {...props}
    >
      {children || label}
      <icons.rightArrow className="button-icon" />
    </a>
  );
};

export default Download;