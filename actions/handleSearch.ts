"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const handleSearch = async (formData: FormData) => {
  const supabase = createClient();
  const keyword = formData.get("input") as string;

  const { data, error } = await supabase
    .from("Tools")
    .select("*")
    .ilike("name", `%${keyword}%`);

  if (data) {
    return data;
  }
  return [];
};
