"use server";

import { createClient } from "@/utils/supabase/server";

export const incrementLikes = async (id: number, likes: number[]) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Tools")
    .update({ likes: [...likes, id] })
    .eq("id", id)
    .select();

  if (data) {
    return data;
  } else {
    return [];
  }
};
