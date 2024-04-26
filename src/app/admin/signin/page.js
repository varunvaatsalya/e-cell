import Image from "next/image";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="font-medium leading-6 text-gray-700 dark:text-gray-200 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email"
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
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 hover:text-indigo-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "E-CELL Admin Login",
    description:
      "This is official website of EnterpreneurShip cell of IET Lucknow",
  };
}
