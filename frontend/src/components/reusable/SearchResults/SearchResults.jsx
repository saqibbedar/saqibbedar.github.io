import { Link } from "react-router-dom";
import Card from "../Card/Card";

const categoryButtons = ["All", "Projects", "Certificates"]

const SearchResults = ({ results }) => {
  
  return (
    <div className="overflow-y-scroll overflow-x-hidden mt-28 w-[90%] media1:w-[96%] m-auto">

      <div className="flex gap-4">
        {
          categoryButtons.map((button, index) => (

            <button key={index} className="text-white">{ button }</button>
          ))
        }
      </div>

      {results.certificates.length > 0 && (
        <div className="flex gap-5 overflow-x-scroll">
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
        <div className="flex">
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
    </div>
  );
};

export default SearchResults;
