import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "@/providers/providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "WhatStack",
  description: "A goto place to find the stack that suits you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Providers>
          <main className="min-h-screen flex flex-col items-center dark:bg-black bg-white text-foreground">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
