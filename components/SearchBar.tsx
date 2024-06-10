"use client";
import { handleSearch } from "@/actions/handleSearch";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SearchDataContext } from "@/contexts/SearchDataContext";

export default function SearchBar(): JSX.Element {
  const [searchData, setSearchData] = useContext<any>(SearchDataContext);
  const router = useRouter();

  return (
    <>
      <form
        className="animate-in flex flex-col w-full justify-center gap-2 text-foreground"
        action={async (FormData: FormData) => {
          console.log("clicked");
          const data: any = await handleSearch(FormData);
          if (data) {
            setSearchData(data);
            return router.push(`/search/`);
          }
        }}
      >
        <label
          className="mx-auto relative bg-white min-w-sm w-full flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl dark:shadow-none"
          htmlFor="search-bar"
        >
          <input
            type="text"
            name="input"
            id="search-bar"
            placeholder="Search for tools"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-black"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
          >
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </label>
      </form>
    </>
  );
}
