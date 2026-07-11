import { NextResponse } from "next/server";
import { SITE_PASSWORDS, SITE_ACCESS_KEY } from "@/lib/serverAuth";
import {
  createSiteSession,
  SITE_SESSION_COOKIE,
  SITE_SESSION_MAX_AGE,
  verifyPassword,
  verifySiteSession,
} from "@/lib/siteSession";

function setSessionCookie(response: NextResponse, value: string) {
  response.cookies.set({
    name: SITE_SESSION_COOKIE,
    value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SITE_SESSION_MAX_AGE,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const secret = process.env.AUTH_SECRET ?? "";
    const existingCookie = request.headers
      .get("cookie")
      ?.match(/(?:^|;\s*)site_access_session=([^;]+)/)?.[1];
    const alreadyAuthenticated = await verifySiteSession(existingCookie, secret);
    const ok =
      alreadyAuthenticated ||
      (typeof body.password === "string" &&
        (await verifyPassword(body.password.trim(), SITE_PASSWORDS, secret)));
    const response = NextResponse.json({ ok }, { status: ok ? 200 : 401 });
    if (ok && !alreadyAuthenticated) {
      setSessionCookie(response, await createSiteSession(secret));
    }
    return response;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const ok =
    typeof key === "string" &&
    key.trim() === SITE_ACCESS_KEY &&
    SITE_ACCESS_KEY !== "";
  const response = NextResponse.json({ ok });
  const secret = process.env.AUTH_SECRET ?? "";
  if (ok && secret) setSessionCookie(response, await createSiteSession(secret));
  return response;
}
