"use client";

import { introCopy, INTRO_CV_PATH } from "@/lib/siteCopy";
import { useSite } from "../components/SiteProvider";

const profileRows = [
  ["出生年月", "2005.05"],
  ["籍贯", "江苏宿迁"],
  ["政治面貌", "中共党员"],
  ["专业排名", "2/73（已确定获得保研资格）"],
  ["本科专业", "电子信息工程"],
] as const;

export function IntroCvLink() {
  const { locale } = useSite();
  const t = introCopy[locale];

  return (
    <div className="mt-6 space-y-5">
      <div className="flex flex-wrap gap-4">
        <a
          href={INTRO_CV_PATH}
          download="huang-ziyi-cv.pdf"
          className="inline-flex text-lg font-medium text-link underline decoration-link/40 underline-offset-[5px] transition-colors hover:text-link-hover hover:decoration-link-hover/40"
        >
          {t.cvLinkLabel}
        </a>
        <a
          href={`${INTRO_CV_PATH}?preview&v=2`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-lg font-medium text-link underline decoration-link/40 underline-offset-[5px] transition-colors hover:text-link-hover hover:decoration-link-hover/40"
        >
          {t.cvPreviewLabel}
        </a>
      </div>

      <div className="space-y-3 text-base leading-7 text-muted-foreground">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {t.profileHeading}
        </h3>
        <dl className="grid gap-3 sm:grid-cols-2">
          {profileRows.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-border bg-card/50 px-4 py-3">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="mt-1 font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}