import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // console.log(req);
  // const {pathname,origin} =req.nextUrl;
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.rewrite(url);
    }
    
    // if (!session) return NextResponse.redirect("/home");
    // If user is authenticated, continue.
  }
}
