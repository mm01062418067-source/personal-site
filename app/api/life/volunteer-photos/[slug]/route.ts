import fs from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";
import { isDownloadAuthorized } from "@/lib/downloadAuth";

const ROOT = path.join(process.cwd(), "data", "life_photos", "volunteer");

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  if (!isDownloadAuthorized(request)) {
    return new NextResponse(null, { status: 403 });
  }

  const { slug } = await context.params;
  if (!slug || slug.includes("..") || slug.includes("/") || slug.includes("\\")) {
    return NextResponse.json({ error: "invalid slug" }, { status: 400 });
  }

  const dirPath = path.join(ROOT, slug);
  const resolved = path.resolve(dirPath);
  const rootResolved = path.resolve(ROOT);
  if (!resolved.startsWith(rootResolved + path.sep) && resolved !== rootResolved) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let entries: string[] = [];
  try {
    entries = await fs.readdir(resolved);
  } catch {
    return NextResponse.json([], { status: 200 });
  }

  const images = entries
    .filter((name) => {
      const lower = name.toLowerCase();
      return (
        lower !== "cert.jpg" &&
        (lower.endsWith(".jpg") ||
          lower.endsWith(".jpeg") ||
          lower.endsWith(".png") ||
          lower.endsWith(".webp"))
      );
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return NextResponse.json(images);
}
