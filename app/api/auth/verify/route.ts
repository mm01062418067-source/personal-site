import { NextResponse } from "next/server";
import { SITE_PASSWORDS, SITE_ACCESS_KEY } from "@/lib/serverAuth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const ok =
      SITE_PASSWORDS.length === 0 ||
      (typeof body.password === "string" &&
        SITE_PASSWORDS.includes(body.password.trim()));
    return NextResponse.json({ ok });
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
  return NextResponse.json({ ok });
}
