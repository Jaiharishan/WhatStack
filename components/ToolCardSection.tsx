import React from "react";

import ToolCard from "./ToolCard";
import ITool from "../interfaces/ITool";
import { createClient } from "@/utils/supabase/server";

const ToolCardSection = async ({ keyword }: { keyword: string }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Tools")
    .select("*")
    .textSearch("description", keyword, {
      type: "websearch",
      config: "english",
    });

  if (error) {
    console.log("error", error);
  }

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
  );
};

export default ToolCardSection;
