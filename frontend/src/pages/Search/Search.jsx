import { useParams, useSearchParams } from "react-router-dom";
import { SearchInput } from "@/components/features";
import { PageMeta } from "@/components/ui";
import { getPageMeta } from "@/assets";

const Search = () => {
  const { query } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = query || searchParams.get("q") || "";
  const meta = getPageMeta("search", { query: searchQuery });

  return (
    <div>
      <PageMeta {...meta} />
      <SearchInput initialQuery={searchQuery} />
    </div>
  );
};

export default Search;
