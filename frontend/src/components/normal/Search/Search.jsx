import "./Search.css";
import { useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import { ErrorImages, icons } from "@/assets/assets";
import { SearchResults } from '@/components/reusable/reusable';
import { useGlobalSearch } from '@/context/GlobalSearchContext';

const Search = ({ handleSearch, customClass }) => {

  const { searchGlobally, searchResults } = useGlobalSearch();
  const [query, setQuery] = useState("");

  const handleGlobalSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchGlobally(query);
    }
  }

  return (
    <div>
      <div className={`search-box ${customClass}`}>
        <form onSubmit={handleGlobalSearch} className="relative bg-white flex items-center justify-center mt-7 w-[90%] media1:w-[96%] m-auto rounded-full overflow-hidden">
          <input
            type="text"
            title="search input"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="outline-none text-[17px] w-full py-[16px] media:py-[18px] pl-6"
          />
          <button
            onClick={handleGlobalSearch}
            title="search button"
            className="group absolute right-0 bg-zinc-300 w-[53px] h-full rounded-full flex items-center justify-center"
          >
            <icons.search className="h-7 w-7 stroke-[.5] group-hover:rotate-90 transition-[var(--transition)]" />
          </button>
        </form>

        <>
          {
            // if: searchTerm is empty, show a default message
            query === "" ? (
              <ErrorPage
                img={""}
                title={
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: "800",
                      display: "flex",
                      color: "var(--link-color)",
                    }}
                  >
                    Hello <div className="animatedHand">👋</div>
                  </span>
                }
                description={"Start searching your favorite"}
                isButton={false}
              />
            ) : searchResults.certificates.length === 0 &&
              searchResults.projects.length === 0 ? ( // If no results
              <ErrorPage
                img={ErrorImages.no_result2}
                imgContainerHeight={"auto"}
                imgContainerWidth={"auto"}
                title={"No result found"}
                description={
                  "We couldn't find what you searched for. Try searching again."
                }
                isButton={false}
              />
            ) : (
              // Show results if data is found
              <SearchResults results={searchResults} />
            )
          }
        </>

        <div onClick={handleSearch} id="close">
          <icons.close title="close" />
        </div>
      </div>
    </div>
  );
};

export default Search;
