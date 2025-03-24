import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");

  if (
    (req.nextUrl.pathname.startsWith("/document") ||
      req.nextUrl.pathname.startsWith("/litecode")) &&
    !accessToken
  ) {
    return NextResponse.redirect(new URL("/home?authRequired=true", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/document/:path*", "/pdf-ai/:path*", "/study/:path*"],
};
