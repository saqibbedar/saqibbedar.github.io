import { Link } from "react-router-dom";
import Card from "../Card/Card";

const categoryButtons = ["All", "Projects", "Certificates"]

const SearchResults = ({ results }) => {
  
  return (
    <div className="overflow-y-scroll overflow-x-hidden mt-28 w-[90%] media1:w-[90%] m-auto search-results-hide-scroll-class">
      {
        <div className="flex gap-4">
          {categoryButtons.map((button, index) => (
            <button key={index} className="text-white">
              {button}
            </button>
          ))}
        </div>
      }

      {results.certificates.length > 0 && (
        <div className="flex gap-5 overflow-x-scroll search-results-hide-scroll-class mt-4">
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
        <div className="flex gap-4 overflow-x-scroll search-results-hide-scroll-class mt-4">
          {results.projects.map((project, index) => (
            <Link
              key={index}
              to={project.url}
              className="flex flex-col gap-2 w-[340px] bg-white overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt=""
                className="aspect-video rounded-md"
              />
              <div className="px-3">
                <h1 className="text-[var(--cards-text-title-size)]">
                  {project.name}
                </h1>
                <p className="text-[var(--cards-text-description-foreground)] line-clamp-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {
                    // categories are in string, convert them to array and render each category separately
                    project.category.split(" ").map((category, index) => (
                      <span key={index}>{category}</span>
                    ))
                  }
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
