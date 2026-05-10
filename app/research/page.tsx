import type { Metadata } from "next";

import { listProjectEntries } from "@/lib/projectDetailLoad";
import { ResearchPageClient } from "./ResearchPageClient";

export const metadata: Metadata = {
  title: "科研",
  description: "黄子谊的科研训练、学术论文与光谱迁移研究。",
};

export default function ResearchPage() {
  const all = listProjectEntries();
  const items = all.filter((p) => p.slug === "spectral-transfer");
  return <ResearchPageClient items={items} />;
}
