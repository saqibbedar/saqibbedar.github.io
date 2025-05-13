import { Link } from "react-router-dom";
import { CertificateCard } from "@/components/ui";
import { useState } from "react";
import { icons } from "@/assets/assets";
import { useScrollRefs } from "./useScrollRefs";
import { ResourceStatus } from '@/components/ui';

const categoryButtons = ["All", "Projects", "Certificates"];

const SearchResults = ({ results }) => {
  const { certificatesScrollRef, projectsScrollRef, scroll } = useScrollRefs();
  const [categoryButton, setCategoryButton] = useState("All"); // state to store/handle category buttons

  return (
    <div className="overflow-y-scroll overflow-x-hidden mt-7 w-[90%] media1:w-[90%] m-auto search-results-hide-scroll-class">
      {/* 1. Categories Button */}
      {results.certificates.length > 0 && results.projects.length > 0 && (
        <div className="flex gap-3 mb-2 mt-1">
          {categoryButtons.map((button, index) => (
            <button
              onClick={() => setCategoryButton(button)}
              key={index}
              className={`rounded-lg px-3 py-[7px] transition-[var(--transition)] text-[15px] text-nowrap ${
                button === categoryButton
                  ? "bg-[var(--button-primary-background)] text-[var(--button-primary-foreground)]"
                  : "text-[var(--button-secondary-foreground)] bg-[var(--button-secondary-background)]"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
      )}

      {/* Results container */}
      <div className="flex flex-col gap-5 mb-8">

        {/* 2. Welcome message - show only if no search performed */}
        {(results.certificates.length === 0 && results.projects.length === 0) &&
          <ResourceStatus
            containerHeight={"75vh"}
            img={""}
            title={ <span style={{fontSize: "40px", fontWeight: "800", display: "flex", color: "var(--link-color)",}}>
                    Hello <div className="animatedHand">👋</div></span> }
          description={"Start searching your favorite"}
          desColor={"black"}
            isButton={false}
          />
        }
        
        {/* 3. Certificates */}
        {(categoryButton === categoryButtons[0] || categoryButton === "Certificates") && results.certificates.length > 0 && (
            <div className="flex flex-col gap-5 overflow-hidden mt-4 animate-[var(--fadeIn)]">
              <div className="flex items-center justify-between w-full mb-1 border-[var(--light-theme-border-primary-border)] border-b pb-2 media1:pb-[.9rem]">
                {/* Section title */}
                <h1 className="text-[var(--light-theme-primary-foreground)] text-2xl media2:text-4xl font-light">
                  Certificates
                  <span className="text-[var(--light-theme-primary-foreground)]">
                    {" "}
                    - {results.certificates.length}
                  </span>
                </h1>
                {/* Navigation buttons */}
                <div className="flex items-center gap-2">
                  <button
                    className="bg-[var(--button-primary-background)] p-3 group rounded-full transition-transform"
                    onClick={() => scroll("left", certificatesScrollRef)}
                  >
                    <icons.leftArrow className="fill-[var(--button-primary-foreground)] group-active:scale-110" />
                  </button>
                  <button
                    className="bg-[var(--button-primary-background)] p-3 group rounded-full transition-transform"
                    onClick={() => scroll("right", certificatesScrollRef)}
                  >
                    <icons.rightArrow className="fill-[var(--button-primary-foreground)] group-active:scale-110" />
                  </button>
                </div>
              </div>

              <div
                className="flex gap-5 overflow-x-scroll search-results-hide-scroll-class"
                ref={certificatesScrollRef}
              >
                {results.certificates.map((certificate) => (
                  <CertificateCard
                    key={certificate._id}
                    image={certificate.image}
                    title={certificate.title}
                    description={certificate.description}
                    providerName={certificate.providerName}
                    providerLogo={certificate.providerLogo}
                    credentialUrl={certificate.credentialUrl}
                  />
                ))}
              </div>
            </div>
        )}

        {/* 4. projects */}
        {(categoryButton === categoryButtons[0] || categoryButton === "Projects") && results.projects.length > 0 && (
            <div className="flex flex-col gap-5 mt-4 animate-[var(--fadeIn)]">
              <div className="flex items-center justify-between w-full mb-1 border-[var(--light-theme-border-primary-border)] border-b pb-2 media1:pb-[.9rem]">
                <h1 className="text-[var(--light-theme-primary-foreground)] text-2xl media2:text-4xl font-light">
                  Projects
                  <span className="text-[var(--light-theme-primary-foreground)]">
                    {" "}
                    - {results.projects.length}
                  </span>
                </h1>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-[var(--button-primary-background)] p-3 group rounded-full transition-transform"
                    onClick={() => scroll("left", projectsScrollRef)}
                  >
                    <icons.leftArrow className="fill-[var(--button-primary-foreground)] group-active:scale-105 media-769:group-active:scale-110" />
                  </button>
                  <button
                    className="bg-[var(--button-primary-background)] p-3 group rounded-full transition-transform"
                    onClick={() => scroll("right", projectsScrollRef)}
                  >
                    <icons.rightArrow className="fill-[var(--button-primary-foreground)] group-active:scale-105 media-769:group-active:scale-110" />
                  </button>
                </div>
              </div>
              <div
                ref={projectsScrollRef}
                className="flex gap-5 overflow-x-scroll search-results-hide-scroll-class"
              >
                {results.projects.map((project, index) => (
                  <Link
                    key={index}
                    to={project.url}
                    className="flex-shrink-0 w-[300px] bg-white overflow-hidden rounded-lg"
                  >
                    <img
                      src={project.image}
                      alt=""
                      className="aspect-video rounded-t-md"
                    />
                    <div className="px-3 mt-5">
                      <h1 className="text-[var(--cards-text-title-size)]">
                        {project.name}
                      </h1>
                      <p className="mt-2 text-[var(--cards-text-description-foreground)] line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-3 flex gap-[6px] flex-wrap text-xs mb-3 leading-3">
                        {" "}
                        <span className="text-sm">Tags:</span>
                        {
                          // tags are in string, convert them to array and render each tag separately
                          project.tags.split(" ").map((tag, index) => (
                            <span
                              className={`py-1 px-2 rounded-full ${
                                tag.toLowerCase() === "free"
                                  ? "bg-green-100 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                                  : tag.toLowerCase() === "premium"
                                  ? "bg-orange-100 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                                  : tag.toLowerCase() === "featured"
                                  ? "bg-[#2563eb]/10 border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                                  : "bg-violet-100 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
                              }`}
                              key={index}
                            >
                              {tag.toUpperCase()}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default SearchResults;
