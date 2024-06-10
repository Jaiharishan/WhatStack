import SearchBar from "@/components/SearchBar";
import { createClient } from "@/utils/supabase/server";
import NavBar from "@/components/NavBar";
import TagsSection from "@/components/TagsSection";

/**
 * The main index page of the application.
 *
 * @return {Promise<JSX.Element>} The rendered index page.
 */
export default async function Index(): Promise<JSX.Element> {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log("user page", user);
  } else {
    console.log("user page not logged in");
  }

  return (
    <>
      <NavBar />
      <div className="flex-1 w-3/4 lg:w-1/2 flex flex-col mt-10 gap-12 items-center">
        <div className="text-8xl font-extrabold dark:text-white text-black">
          WhatStack
        </div>
        <div className="text-xl dark:text-white text-black">
          A goto application to find the tools that is right for you{" "}
          {/* {user?.email} */}
        </div>
        <SearchBar />
        <TagsSection />
      </div>
    </>
  );
}
