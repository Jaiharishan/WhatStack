"use client";
import React from "react";
import { useContext } from "react";
import { SearchDataContext } from "@/contexts/SearchDataContext";
import NavBar from "@/components/NavBar";
import ToolCard from "@/components/ToolCard";
import ToolCardSection from "@/components/ToolCardSection";
import { UserContext } from "@/contexts/UserContext";

const testData = [{ name: "React", link: "http", categories: ["a", "b", "c"] }];

export default function SearchResults() {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <NavBar user={user} />
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
