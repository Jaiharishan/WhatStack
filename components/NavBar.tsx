"use client";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="app w-full">
      <nav>
        <div className="w-full mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-8">
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 dark:text-gray-200 items-center"
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                  <span>WhatStack</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <Link href="#" className="dark:text-white text-black">
                  Home
                </Link>
                <Link href="#" className="dark:text-white text-black">
                  Benefits
                </Link>
                <Link href="#" className="dark:text-white text-black">
                  Our Classes
                </Link>
                <Link href="#" className="dark:text-white text-black">
                  Contact Us
                </Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="flex xs:hidden items-center gap-10">
                <div className="flex items-center gap-2">
                  <ThemeButton
                    ToggleFunction={() => {
                      console.log("btn clicked", theme);
                      theme == "dark" ? setTheme("light") : setTheme("dark");
                    }}
                  />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 dark:border-gray-600 border-gray-300 py-2 px-4 dark:text-white text-black">
                    Sign In
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col items-center w-full gap-8 font-bold tracking-wider text-black">
              <a href="#" className="my-2 text-xl font-semibold">
                Features
              </a>
              <a href="#" className="my-2 text-xl font-semibold">
                Pricing
              </a>
              <a href="#" className="my-2 text-xl font-semibold">
                Download
              </a>
              <a href="#" className="my-2 text-xl font-semibold">
                Classic
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
