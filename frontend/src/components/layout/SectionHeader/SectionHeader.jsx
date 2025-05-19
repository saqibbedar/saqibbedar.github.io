import "./SectionHeader.css";

const SectionHeader = ({layoutHeading, layoutDescription, ...props}) => {
  return (
    <div className="layout-info">
      <div className="layout-heading">
        {layoutHeading}
      </div>
      <div className="layout-description">
        {layoutDescription}
      </div>
    </div>
  );
};

export default SectionHeader;
