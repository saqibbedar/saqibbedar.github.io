import { Link } from "react-router-dom";
import Card from "../Card/Card";

const SearchResults = ({results}) => {
  return (
    <>
      {results.certificates.length > 0 && (
        <div>
          {results.certificates.map((certificate, index) => (
            <Card
              key={index}
              image={certificate.image}
              title={certificate.title}
              description={certificate.description}
              providerName={certificate.providerName}
              providerLogo={certificate.providerLogo}
              credentialUrl={certificate.credentialUrl}
            />
          ))}
        </div>
      )}

      {/* Same for projects */}
      {results.projects.length > 0 && (
        <div>
          {results.projects.map((project, index) => (
            <Link key={index} to={project.url}>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <img src={project.image} alt="" />
              <div>{project.category}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
