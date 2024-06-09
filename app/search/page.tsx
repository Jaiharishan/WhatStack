import React from "react";
import NavBar from "@/components/NavBar";
import ToolCardSection from "@/components/ToolCardSection";

const testData = [{ name: "React", link: "http", categories: ["a", "b", "c"] }];

export default function SearchResults(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full px-28 mt-10">
        <div className="text-2xl dark:text-white text-black my-4 font-bold">
          Search Results
        </div>

        <ToolCardSection />
        {/* {searchData && <pre>{JSON.stringify(searchData, null, 2)}</pre>} */}
      </div>
    </>
  );
}
