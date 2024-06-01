import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";

export default async function ProtectedPage() {
  const supabase = createClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      Protected
    </div>
  );
}
