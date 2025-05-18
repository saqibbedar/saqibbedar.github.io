import { useState, useRef, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import SearchResults from "./SearchResults/SearchResults";
import { useGlobalSearch } from "@/context/GlobalSearchContext";
import { icons } from '@/assets/assets';

const SearchInput = ({initialQuery=""}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const { searchGlobally, searchResults } = useGlobalSearch();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const urlQuery = searchParams.get("q") || initialQuery;
    setQuery(urlQuery);

    if (urlQuery.trim()) {
      searchGlobally(urlQuery);
    }
  }, [searchParams, initialQuery])

  // Handle Search Submission
  const handleSearch = (e) => {
        e?.preventDefault();
        if (!query.trim()) return;
        searchGlobally(query);
        setSearchParams({ q: query });
  };

  return (
    <div className="mt-2 h-full">
      <form className="flex w-full p-1 overflow-hidden" onSubmit={handleSearch}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          translate="off"
          autoCorrect="off"
          autoCapitalize="off"
          autoSave="off"
          spellCheck="false"
          className="w-[85%] media-469:w-[88%] media-669:w-[90%] media-769:w-[92%] media-1069:w-[94%] media-1369:w-[95%] media-1569:w-[95.5%] text-[1.2rem] py-[10px] media-769:py-3 px-4 rounded-l-lg shadow outline-none"
        />
        <button type="submit" className="w-[15%] media-469:w-[12%] media-669:w-[10%] media-769:w-[8%] media-1069:w-[6%] media-1369:w-[5%] media-1569:w-[4.5%] bg-[var(--button-primary-background)] hover:bg-[var(--button-primary-background-hover)] flex items-center justify-center rounded-r-lg shadow group">
          <icons.search className="w-6 h-6 fill-[var(--button-primary-foreground)] group-active:scale-105 media-769:group-active:scale-125 transition-transform"/>
        </button>
      </form>
    <SearchResults results={searchResults} />
    </div>
  );
};

export default SearchInput;