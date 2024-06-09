import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export const UserContext = createContext<any>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const [user, setUser] = useState<any>(supabase.auth.getUser());

  const fn = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      return user;
    }
    return null;
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async () => {
      const user = await fn();

      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        {children}
      </UserContext.Provider>
    </>
  );
}
