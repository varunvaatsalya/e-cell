import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
console.log("middleware called")
  // return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/admin/:path*',
}