"use client";

import Link from "next/link";
import { PageShell } from "../components/PageShell";

const headingClass =
  "text-2xl font-semibold tracking-tight text-foreground";

const bubbleClass =
  "inline-flex max-w-full items-center justify-center rounded-full border border-border bg-gradient-to-br from-card to-muted px-5 py-3 text-center text-sm font-medium text-foreground shadow-sm ring-1 ring-border/60 transition hover:scale-[1.03] hover:border-muted-foreground/30 hover:shadow-md sm:px-6 sm:text-base";

type Props = {
  items: { slug: string; name: string }[];
};

export function ResearchPageClient({ items }: Props) {
  return (
    <PageShell>
      <h1 className={headingClass}>科研</h1>

      <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:gap-5">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            data-lively-exclude
            className={bubbleClass}
          >
            {p.name}
          </Link>
        ))}
      </div>

      <p className="mt-12 text-center text-muted-foreground">
        更多科研内容正在整理中，敬请期待……
      </p>
    </PageShell>
  );
}
