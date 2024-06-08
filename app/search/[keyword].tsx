import { SearchDataContext } from "@/contexts/SearchDataContext";
import { createClient } from "@/utils/supabase/server";
import { createContext, useContext } from "react";

const SearchResults = ({ data }: any) => {
  // const [searchData, setSearchData] = useContext<any>(SearchDataContext);

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
};

export async function getStaticProps({ params }: any) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Tools")
    .select("*")
    .contains("categories", [`${params.keyword}`])
    .or(`name.ilike.frontend, categories.cs.{"${params.keyword}"}`);

  if (data) {
    return {
      props: {
        data,
      },
    };
  }
  return {
    props: {
      data: [],
    },
  };
}

export default SearchResults;
