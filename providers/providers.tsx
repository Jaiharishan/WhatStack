"use client";
import { SearchDataContextProvider } from "@/contexts/SearchDataContext";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: any) {
  return (
    <ThemeProvider attribute="class">
      <SearchDataContextProvider>{children}</SearchDataContextProvider>
    </ThemeProvider>
  );
}
