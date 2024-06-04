"use client";
import React from "react";
import { useContext } from "react";
import { SearchDataContext } from "@/contexts/SearchDataContext";
import NavBar from "@/components/NavBar";
import ToolCard from "@/components/ToolCard";
import ToolCardSection from "@/components/ToolCardSection";

interface ITool {
  name: string;
  link: string;
  categories: string[];
}

const testData = [{ name: "React", link: "http", categories: ["a", "b", "c"] }];

export default function SearchResults() {
  const [searchData, setSearchData] = useContext<any>(SearchDataContext);

  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full px-28 mt-10">
        <div className="text-2xl dark:text-white text-black my-4 font-bold">
          Search Results
        </div>
        {/* <div className="flex items-center gap-5">Hi!</div> */}
        <ToolCardSection />
        {/* {searchData && <pre>{JSON.stringify(searchData, null, 2)}</pre>} */}
      </div>
    </>
  );
}
