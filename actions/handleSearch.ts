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
    .contains("categories", [`${keyword}`])
    .or(`name.ilike.${keyword}, categories.cs.{${keyword}}`);

  if (data) {
    return data;
  }
  return [];
};
