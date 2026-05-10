import fs from "fs";
import path from "path";

import type { ProjectDetail } from "./projectDetailCopy";
import { displayNameFromSlug } from "./projects";

const PROJECTS_ROOT = path.join(process.cwd(), "data", "projects");

export type ProjectDetailBilingual = {
  zh: ProjectDetail;
  en: ProjectDetail;
};

export type ProjectFile = {
  displayName: string;
} & ProjectDetailBilingual;

let cachedEntries: { slug: string; name: string }[] | null = null;

const PROJECT_ORDER = [
  "spectral-transfer",
  "math-modeling-smoke",
  "catastrophe-warning",
  "auto-targeting-device",
  "social-media-behavior",
];

function getProjectJsonPath(slug: string): string {
  return path.join(PROJECTS_ROOT, slug, `${slug}.json`);
}

export function loadProjectFile(slug: string): ProjectFile | null {
  const filePath = getProjectJsonPath(slug);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as {
      displayName?: string;
      zh: ProjectDetail;
      en: ProjectDetail;
    };
    return {
      displayName: data.displayName ?? displayNameFromSlug(slug),
      zh: data.zh,
      en: data.en,
    };
  } catch {
    return null;
  }
}

export function listProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_ROOT)) return [];
  const slugs: string[] = [];
  for (const name of fs.readdirSync(PROJECTS_ROOT)) {
    const full = path.join(PROJECTS_ROOT, name);
    const stat = fs.statSync(full);
    if (!stat.isDirectory()) continue;
    const jsonPath = getProjectJsonPath(name);
    if (fs.existsSync(jsonPath)) {
      slugs.push(name);
    }
  }
  return slugs;
}

export function listProjectEntries(): { slug: string; name: string }[] {
  if (process.env.NODE_ENV === "production" && cachedEntries) {
    return cachedEntries;
  }
  const slugs = listProjectSlugs();
  const entries = slugs
    .map((slug) => {
      const file = loadProjectFile(slug);
      return {
        slug,
        name: file?.displayName ?? displayNameFromSlug(slug),
      };
    })
    .sort((a, b) => {
      const ai = PROJECT_ORDER.indexOf(a.slug);
      const bi = PROJECT_ORDER.indexOf(b.slug);
      if (ai !== -1 || bi !== -1) {
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      }
      return a.name.localeCompare(b.name, "zh-Hans-CN", { sensitivity: "base" });
    });
  if (process.env.NODE_ENV === "production") {
    cachedEntries = entries;
  }
  return entries;
}
