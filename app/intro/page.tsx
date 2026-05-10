import type { Metadata } from "next";
import { IntroPageClient } from "./IntroPageClient";

export const metadata: Metadata = {
  title: "介绍",
  description: "黄子谊的个人信息、教育经历、奖项荣誉与科研成果。",
};

export default function IntroPage() {
  return <IntroPageClient />;
}
