"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleSignOut(): Promise<any> {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return redirect("/error");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log("data", user);
  }
  console.log("logged out successfully");
  revalidatePath("/", "layout");
  return redirect("/login");
}
