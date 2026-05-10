import type { Metadata } from "next";

import { listProjectEntries } from "@/lib/projectDetailLoad";
import { ProjectsPageClient } from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "项目",
  description: "黄子谊的数学建模、挑战杯、电子设计竞赛与系统实现项目。",
};

export default function ProjectsPage() {
  const all = listProjectEntries();
  const items = all.filter((p) => p.slug !== "spectral-transfer");
  return <ProjectsPageClient items={items} />;
}
