import { ProjectResults, CertificateResults } from "../ResultSections";
import { CategoryTabs } from "@/components/ui";
import { icons } from "@/assets/assets";
import { useState } from "react";

const SearchResults = ({ results, loading, error, searchQuery, clearSearch, totalResults, hasResults }) => {

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="overflow-y-scroll overflow-x-hidden mt-7 w-[90%] media1:w-[90%] m-auto search-results-hide-scroll-class">
      {/* 2. Result Header */}
      {searchQuery && (
        <div className="flex gap-2 justify-between items-center mb-2 border-b border-b-black">
          <div className="font-normal text-[32px]">
            About {totalResults} results {searchQuery && `for "${searchQuery}"`}
          </div>
          <div className="relative">
            <button className="bg-[var(--light-theme-secondary-background)] p-[8px] rounded-md">
              {
                openFilter ?
                <icons.close onClick={()=>setOpenFilter(!openFilter)} className="fill-white h-5 w-5" title="close" /> :
                <icons.filter onClick={()=>setOpenFilter(!openFilter)} className="-rotate-90 h-5 w-5 fill-white" title="filters"/>
              }
            </button>
            <div className={`${openFilter? 'flex': 'hidden'} absolute bg-zinc-300`}>
              <div>
                <p>Search filters</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. Categories Button */}
      {hasResults && (
        <CategoryTabs
          categories={["All", "Projects", "Certificates"]}
          align="start"
          className="mb-4 mt-3"
        />
      )}

      {/* Results container */}
      <div className="flex flex-col gap-1 mb-8">
        {/* 3. Certificates */}
        <CertificateResults certificates={results.certificates} />

        {/* 4. projects */}
        <ProjectResults projects={results.projects} />
      </div>
    </div>
  );
};

export default SearchResults;
