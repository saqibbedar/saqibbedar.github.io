import { useParams, useSearchParams } from "react-router-dom";
import { SearchInput } from "@/components/templates/templates";

const Search = () => {
  const { query } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = query || searchParams.get("q") || "";
  return (
    <div>
      <title>Saqib Bedar "{searchQuery}" | Global Results</title>
      <SearchInput initialQuery={searchQuery} />
    </div>
  );
}

export default Search;
