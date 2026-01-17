import { useParams, useSearchParams } from "react-router-dom";
import { SearchInput } from "@/components/features";

const Search = () => {
  const { query } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = query || searchParams.get("q") || "";
  return (
    <div>
      <title>{`Saqib Bedar | Search Results for '${searchQuery}'`}</title>
      <SearchInput initialQuery={searchQuery} />
    </div>
  );
};

export default Search;
