"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const loginWithGoogle = async (): Promise<any> => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });

  if (data) {
    console.log(data);
    redirect(data.url ? data.url : "/login");
  } else {
    redirect("/login");
  }
};

export default loginWithGoogle;
