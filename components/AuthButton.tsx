"use client";
import Link from "next/link";
import { handleSignOut } from "@/actions/handleSignOut";

export default function AuthButton({
  isUserLoggedIn,
}: {
  isUserLoggedIn: boolean;
}): JSX.Element {
  return (
    <>
      {isUserLoggedIn ? (
        <div className="flex items-center gap-4">
          {/* Hey, {user.email}! */}
          <form
            action={async () => {
              await handleSignOut();
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
