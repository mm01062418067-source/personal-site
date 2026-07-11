import { NextRequest, NextResponse } from "next/server";
import { SITE_SESSION_COOKIE, verifySiteSession } from "@/lib/siteSession";

const PUBLIC_PATHS = new Set([
  "/login",
  "/api/auth/verify",
  "/favicon.ico",
  "/robots.txt",
]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PUBLIC_PATHS.has(pathname)) return NextResponse.next();

  const secret = process.env.AUTH_SECRET ?? "";
  const configured = Boolean(process.env.SITE_PASSWORD?.trim() && secret);

  // Keep local setup usable until both required environment variables exist.
  if (!configured && process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const authenticated = await verifySiteSession(
    request.cookies.get(SITE_SESSION_COOKIE)?.value,
    secret,
  );
  if (authenticated) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/webpack-hmr).*)"],
};
