import React from "react";
import NavBar from "@/components/NavBar";
import ToolCardSection from "@/components/ToolCardSection";

export default function SearchResults(request: any): JSX.Element {
  const keyword = request.searchParams.keyword;
  console.log(keyword);

  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full px-28 mt-10">
        <div className="text-2xl dark:text-white text-black my-4 font-bold">
          Search Results
        </div>

        <ToolCardSection keyword={keyword} />
      </div>
    </>
  );
}
