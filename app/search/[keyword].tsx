import { SearchDataContext } from "@/contexts/SearchDataContext";
import { createContext, useContext } from "react";

const SearchResults = () => {
  const [searchData, setSearchData] = useContext<any>(SearchDataContext);

  return (
    <div>{searchData && <pre>{JSON.stringify(searchData, null, 2)}</pre>}</div>
  );
};

const page = () => {
  return <SearchResults />;
};
