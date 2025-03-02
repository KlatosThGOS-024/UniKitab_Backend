import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  if (req.nextUrl.pathname.startsWith("/document") && !accessToken) {
    console.log("No accessToken found. Redirecting to home...");
    return NextResponse.redirect(new URL("/home", req.url));
  }

  console.log("AccessToken found or route not protected. Proceeding...");
  return NextResponse.next();
}

export const config = {
  matcher: ["/document/:path*"],
};
