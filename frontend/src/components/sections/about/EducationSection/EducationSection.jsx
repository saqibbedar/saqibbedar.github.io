import "./EducationSection.css";

const EducationSection = ({ educational_data, isLoading }) => {

  return (
    <div className="animate-[var(--fadeIn)] mt-8 mb-12">
      <div className={isLoading ? "section-info skeleton" : "section-info"}>
        <h1>Education</h1>
      </div>
      <div className="edu-box">
        {educational_data.map((edu, index) => (
          <div key={index} className="edu-content-wrapper">
            <div className="edu-main-title">
              <h3 className={isLoading ? "edu-year skeleton":"edu-year"} >{edu.year}</h3>
              <p className={isLoading ? "skeleton" : ""}>{edu.degreeType}</p>
            </div>
            <div className={isLoading ? "edu-description skeleton" : "edu-description"}>
              {
                edu.description
              }
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
