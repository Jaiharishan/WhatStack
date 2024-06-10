import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import { revalidatePath } from "next/cache";
import handleSignIn from "../../actions/handleSignIn";
import handleSignUp from "../../actions/handleSignUp";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}): JSX.Element {
  const supabase = createClient();

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="border-1 border-gray-50animate-in flex flex-col w-full justify-center gap-2 text-foreground shadow-xl dark:shadow-none p-4 rounded-xl">
        <div className="text-6xl font-extrabold text-black dark:text-white mb-10 flex justify-center">
          WhatStack
        </div>
        <label className="text-md text-black dark:text-white" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border-2 mb-6 text-black dark:text-white border-gray-400"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label
          className="text-md text-black dark:text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border-2 mb-6 text-black dark:text-white border-gray-400"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={handleSignIn}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={handleSignUp}
          className="border border-foreground/20 text-white dark:text-black bg-black dark:bg-white rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
      </form>
      {/* <p className="flex w-full justify-center text-lg text-black dark:text-white">
        or
      </p> */}
      {/* <GoogleLoginButton /> */}
    </div>
  );
}
