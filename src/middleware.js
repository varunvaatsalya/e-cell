import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let originalcookievalue = process.env.WEBSITE_PASSWORD;
  let cookies = request.cookies.get("uid");
  if (!cookies || cookies.value != originalcookievalue)
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/admin/:path*",
};
