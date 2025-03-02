import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  if (req.nextUrl.pathname.startsWith("/document") && !accessToken) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/document/:path*", "/pdf-ai/:path*"],
};
