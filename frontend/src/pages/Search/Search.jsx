// import { SearchResults } from '@/components/reusable/reusable';
// import { SearchInput } from '@/components/normal/components.js';
import { useParams, useSearchParams } from "react-router-dom";
import { SearchInput } from "@/components/templates/templates";

const Search = () => {
  const { query } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = query || searchParams.get("q") || "";
  return (
    <div>
      <title>Saqib Bedar "{searchQuery}" | Global Results</title>
      <SearchInput/>
    </div>
  );
}

export default Search;
