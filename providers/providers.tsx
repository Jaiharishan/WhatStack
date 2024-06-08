"use client";
import { SearchDataContextProvider } from "@/contexts/SearchDataContext";
import { UserContextProvider } from "@/contexts/UserContext";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: any) {
  return (
    <ThemeProvider attribute="class">
      <UserContextProvider>
        <SearchDataContextProvider>{children}</SearchDataContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}
