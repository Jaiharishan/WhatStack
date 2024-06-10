"use server";

import { createClient } from "@/utils/supabase/server";

// gets the input string and makes it into array and
const handleInput = (keyword: string) => {
  return keyword.split(" ");
};

export const handleSearch = async (formData: FormData): Promise<any> => {
  const supabase = createClient();
  const keyword = formData.get("input") as string;

  const input = handleInput(keyword);

  const { data, error } = await supabase
    .from("Tools")
    .select("*")
    .textSearch("description", keyword, {
      type: "websearch",
      config: "english",
    });

  if (data) {
    return data;
  }
  return [];
};
