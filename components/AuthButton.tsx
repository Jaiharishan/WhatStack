"use client";
import Link from "next/link";
import { handleSignOut } from "@/actions/handleSignOut";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export default function AuthButton(isUserLoggedIn: any) {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      {isUserLoggedIn ? (
        <div className="flex items-center gap-4">
          {/* Hey, {user.email}! */}
          <form
            action={async () => {
              const res = await handleSignOut();
              if (res) {
                setUser(null);
              }
            }}
          >
            <button
              // onClick={async () => await handleSignOut()}
              className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <Link
          href="/login"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
      )}
    </>
  );
}
