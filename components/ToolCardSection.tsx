"use client";
import React from "react";
import { useContext } from "react";
import { SearchDataContext } from "../contexts/SearchDataContext";
import ToolCard from "./ToolCard";
import { ITool } from "../interfaces/ITool";
import { ISearchDataContext } from "../interfaces/ISearchDataContext";

const ToolCardSection = (): JSX.Element => {
  const [searchData, setSearchData] =
    useContext<ISearchDataContext>(SearchDataContext);

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {searchData?.map((T, index) => {
        return (
          <ToolCard
            id={T.id}
            name={T.name}
            url={T.url}
            image_uri={T.image_uri}
            likes={T.likes}
            categories={T.categories}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ToolCardSection;
