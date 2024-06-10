import React from "react";
import ToolCard from "./ToolCard";
import { createClient } from "@/utils/supabase/server";
import { ITool } from "@/interfaces/ITool";

const TopToolsSection = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Tools")
    .select("*")
    .order("likes", { ascending: false });

  if (data) {
    console.log("Trending data", data.length);
  } else {
    console.log("Not able to receive data", error);
  }

  return (
    <div className="flex flex-col w-full px-24 my-10">
      <div className="text-2xl text-black dark:text-white font-semibold my-5">
        Trending in Frameworks
      </div>

      <div className="flex items-center gap-6 overflow-x-scroll">
        {data?.map((T: ITool, index: number) => {
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
    </div>
  );
};

export default TopToolsSection;
