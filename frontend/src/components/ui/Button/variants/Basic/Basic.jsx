const Basic = ({
  label,
  onClick,
  children,
  size = "medium",
  isLoading = false,
  icon,
  className,
  ...props
}) => {
  return (
    <button 
      type="button" 
      onClick={onClick}
      className={`button basic ${size} ${className}`}
      disabled={isLoading}
      {...props}
    > 
      {isLoading ? "Loading..." : children || label}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Basic;