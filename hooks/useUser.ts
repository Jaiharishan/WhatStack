import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function useUser() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    supabase.auth.onAuthStateChange(async () => {
      try {
        const result = await supabase.auth.getUser();
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }, []);

  return [user, setUser];
}
