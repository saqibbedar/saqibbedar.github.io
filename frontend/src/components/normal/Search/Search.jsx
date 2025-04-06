import "./Search.css";
import { useState, Suspense, useEffect, useRef } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import { ErrorImages, icons } from "@/assets/assets";
import { SearchResults } from '@/components/reusable/reusable';
import { useGlobalSearch } from '@/context/GlobalSearchContext';

const Search = ({ toggleSearchComponentVisibility, customClass, isSearchComponentActive }) => {

  const { searchGlobally, searchResults } = useGlobalSearch();
  const [query, setQuery] = useState(""); // store input value state
  const [isSearchPerformed, setIsSearchedPerformed] = useState(false); // state for no result found
  const inputRef = useRef(); // for focus on input when SearchComponent gets Active: useEffect handle this

  // Perform Search
  const handleGlobalSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearchedPerformed(true); // update state after search performed
      searchGlobally(query); // Perform global Search
    }
  }

  useEffect(() => {
    // if search component is active then focus the input
    if (isSearchComponentActive && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100)
    }
  }, [isSearchComponentActive]);

  // Search when user press enter
  const searchOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGlobalSearch(e);
    }
  }

  // Close Search and clean search results to default
  // const closeSearchComponent = () => {
  //   toggleSearchComponentVisibility();
  //   setQuery("");
  //   isSearchPerformed(false);
  // }

  return (
    <div>
      <div className={`search-box ${customClass}`}>
        {/* Search Input Form */}
        <form
          onSubmit={handleGlobalSearch}
          className="fixed bg-black/90 flex items-center justify-center pt-7 pb-4 z-20 w-full"
        >
          <div className="relative flex items-center justify-center w-[90%] media1:w-[96%] m-auto rounded-full overflow-hidden h-[53px] backdrop-blur-sm">
            <input
              type="text"
              title="search input"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={searchOnKeyPress}
              placeholder="Search"
              className="outline-none text-[17px] w-full py-[16px] media:py-[18px] pl-6"
              ref={inputRef}
              autoFocus={true}
              autoComplete="off"
            />
            <button
              onClick={handleGlobalSearch}
              title="search button"
              className="group absolute right-0 bg-zinc-300 w-[53px] h-full rounded-full flex items-center justify-center"
            >
              <icons.search className="h-7 w-7 stroke-[.5] group-hover:rotate-90 transition-[var(--transition)]" />
            </button>
          </div>
        </form>

        {/* Search Result Components */}
        <Suspense fallback={<div>Searching...</div>}>
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
            ) : isSearchPerformed &&
              searchResults.certificates.length === 0 &&
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
        </Suspense>

        <div onClick={toggleSearchComponentVisibility} id="close">
          <icons.close title="close" />
        </div>
      </div>
    </div>
  );
};

export default Search;
