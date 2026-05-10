import fs from "fs";
import path from "path";

export type FriendEntry = {
  slug: string;
  name: string;
  url: string;
  avatarPath: string;
};

const FRIENDS_ROOT = path.join(process.cwd(), "data", "friends");

function parseLinkMarkdown(raw: string): { nameHint?: string; url?: string } {
  const heading = raw.match(/^\s*#\s+(.+)\s*$/m)?.[1]?.trim();
  const mdLink = raw.match(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/i);
  if (mdLink) {
    return { nameHint: mdLink[1].trim() || heading, url: mdLink[2].trim() };
  }
  const url = raw.match(/https?:\/\/[^\s)]+/i)?.[0]?.trim();
  return { nameHint: heading, url };
}

let cachedFriends: FriendEntry[] | null = null;

/**
 * 约定：`data/friends/<slug>/` 下需要同时存在：
 * - `link.md`：包含外链（可写裸 URL，或 `[name](url)`）
 * - `avatar.jpg`：头像文件
 */
export function listFriendEntries(): FriendEntry[] {
  if (process.env.NODE_ENV === "production" && cachedFriends) {
    return cachedFriends;
  }

  if (!fs.existsSync(FRIENDS_ROOT)) {
    return [];
  }

  const out: FriendEntry[] = [];
  for (const dirent of fs.readdirSync(FRIENDS_ROOT, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue;
    const slug = dirent.name;
    if (slug.startsWith("_")) continue;

    const base = path.join(FRIENDS_ROOT, slug);
    const linkMd = path.join(base, "link.md");
    const avatar = path.join(base, "avatar.jpg");
    if (!fs.existsSync(linkMd) || !fs.existsSync(avatar)) continue;

    let raw = "";
    try {
      raw = fs.readFileSync(linkMd, "utf8");
    } catch {
      continue;
    }

    const parsed = parseLinkMarkdown(raw);
    if (!parsed.url) continue;
    const name = parsed.nameHint && parsed.nameHint !== "" ? parsed.nameHint : slug;

    out.push({
      slug,
      name,
      url: parsed.url,
      avatarPath: `/api/friends/file/${encodeURIComponent(slug)}/avatar.jpg`,
    });
  }

  if (process.env.NODE_ENV === "production") cachedFriends = out;
  return out;
}
