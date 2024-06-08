"use server";
import { createClient } from "@/utils/supabase/server";

export const getUser = async (): Promise<any> => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
