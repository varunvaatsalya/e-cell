"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Example() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitActions() {
    const Data = { email, password };
    let result = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(Data),
    });
    result = await result.json();
    if (result.success) {
      console.log("push")
      router.push("/admin");
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            height={200}
            width={200}
            className="mx-auto h-20 w-auto rounded-lg my-3"
            src="/logo.svg"
            alt="E-cell"
          />
          <div className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            E-CELL IET Lucknow
          </div>
          <div className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Sign in to Admin Portal
          </div>
        </div>
        <hr className="w-full border border-gray-300 dark:border-gray-700 my-4" />
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={submitActions}>
            <div>
              <label
                htmlFor="email"
                className="font-medium leading-6 text-gray-700 dark:text-gray-200"
              >
                Enter your Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  title="Enter your email address"
                  required
                  className="p-2 w-full rounded-md bg-zinc-100 dark:bg-zinc-700 shadow-inner shadow-zinc-500 dark:shadow-zinc-900 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-medium leading-6 text-gray-700 dark:text-gray-200 "
                >
                  Admin Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="p-2 w-full rounded-md bg-zinc-100 dark:bg-zinc-700 shadow-inner  shadow-zinc-500 dark:shadow-zinc-900 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-blue-600 text-sm">
              <Link href="/admin">Go to the admin page</Link>
              
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
