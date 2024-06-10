import { useContext, useEffect, useState } from "react";
import { PaperAirplaneIcon, Bars3Icon } from "@heroicons/react/24/outline";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { getUser } from "@/actions/getUser";

export default async function NavBar() {
  const user = await getUser();

  return (
    <div className="app w-full">
      <nav>
        <div className="w-full mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            <div className="flex items-center gap-16 my-8">
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
                <Link href="/" className="dark:text-white text-black">
                  Home
                </Link>
                <Link
                  href="https://github.com/Jaiharishan/WhatStack"
                  className="dark:text-white text-black"
                >
                  Github
                </Link>
                <Link
                  href="https://www.buymeacoffee.com/Jaiharishan"
                  className="dark:text-white text-black"
                >
                  Sponsor
                </Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="flex xs:hidden items-center gap-10">
                <div className="flex items-center gap-2">
                  <ThemeButton />
                  <p className="text-black dark:text-white">{user?.email}</p>
                </div>
                <AuthButton isUserLoggedIn={true ? user : false} />
              </div>
              {/* Mobile navigation toggle */}
              {/* <div className="lg:hidden flex items-center">
                <button onClick={() => !toggleMenu}>
                  <Bars3Icon className="h-6" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
        {/* mobile navigation
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col items-center w-full gap-8 font-bold tracking-wider text-black">
              <a href="#" className="my-2 text-xl font-semibold">
                Home
              </a>
              <a href="#" className="my-2 text-xl font-semibold">
                Github
              </a>
              <a href="#" className="my-2 text-xl font-semibold">
                Sponsor
              </a>
            </div>
          </div>
        </div> */}
      </nav>
    </div>
  );
}
