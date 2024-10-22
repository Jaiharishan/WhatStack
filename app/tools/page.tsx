import { createClient } from "@/utils/supabase/server";
import { data } from "autoprefixer";

type ITools = {
  name: string;
  categories: string[];
  link: string;
};

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase
    .from("Tools")
    .select("*")
    .or('name.ilike.frontend, categories.cs.{"Frontend"}');
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
