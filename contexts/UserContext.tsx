import { createContext, useContext, useState } from "react";

export const UserContext = createContext<any>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>();
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        {children}
      </UserContext.Provider>
    </>
  );
}