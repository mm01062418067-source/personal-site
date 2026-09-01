export const SITE_SESSION_COOKIE = "site_access_session";
export const SITE_SESSION_MAX_AGE = 60 * 60 * 24 * 30;

const SESSION_MESSAGE = "personal-site:authenticated:v1";

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hmac(value: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return bytesToHex(new Uint8Array(signature));
}

function safeEqual(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

export async function createSiteSession(secret: string): Promise<string> {
  return hmac(SESSION_MESSAGE, secret);
}

export async function verifySiteSession(
  cookieValue: string | undefined,
  secret: string,
): Promise<boolean> {
  if (!cookieValue || !secret) return false;
  const expected = await createSiteSession(secret);
  return safeEqual(cookieValue, expected);
}

export async function verifyPassword(
  candidate: string,
  passwords: string[],
  secret: string,
): Promise<boolean> {
  if (!candidate || passwords.length === 0 || !secret) return false;
  const candidateHash = await hmac(candidate, secret);
  for (const password of passwords) {
    const passwordHash = await hmac(password, secret);
    if (safeEqual(candidateHash, passwordHash)) return true;
  }
  return false;
}
