import "./LayoutInfoTemplate";

const LayoutInfoTemplate = ({
  layoutHeading,
  layoutDescription,
  isLoading,
}) => {
  return (
    <div className="layout-info">
      <div className={isLoading ? "layout-heading skeleton" : "layout-heading"}>
        {layoutHeading}
      </div>
      <div
        className={
          isLoading ? "layout-description skeleton" : "layout-description"
        }
      >
        {layoutDescription}
      </div>
    </div>
  );
};

export default LayoutInfoTemplate;
