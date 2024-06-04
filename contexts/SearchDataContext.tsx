import { createContext, useContext, useState } from "react";

export const SearchDataContext = createContext<any>([]);

export function SearchDataContextProvider({ children }: any) {
  const [searchData, setSearchData] = useState<any>([]);
  return (
    <>
      <SearchDataContext.Provider value={[searchData, setSearchData]}>
        {children}
      </SearchDataContext.Provider>
    </>
  );
}
