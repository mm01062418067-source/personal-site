"use client";

import Image from "next/image";
import { PageShell } from "../components/PageShell";
import { useSite } from "../components/SiteProvider";
import { introCopy } from "@/lib/siteCopy";
import { IntroBioParagraph } from "./IntroBioParagraph";
import { IntroContactSection } from "./IntroContactSection";
import { IntroEducationSection } from "./IntroEducationSection";
import { IntroSkillsSection } from "./IntroSkillsSection";
import { IntroAwardsSection } from "./IntroAwardsSection";
import { IntroResearchSection } from "./IntroResearchSection";
import { IntroCvLink } from "./IntroCvLink";
import { PasswordGuard } from "../components/PasswordGuard";

const aboutHeadingClass = "text-2xl font-semibold tracking-tight text-foreground";

export function IntroPageClient() {
  const { locale } = useSite();
  const copy = introCopy[locale];

  return (
    <PasswordGuard>
      <PageShell>
        <article>
          <h1 className="sr-only">{copy.title}</h1>

          <section className="space-y-0" aria-labelledby="intro-about-heading">
            <h2 id="intro-about-heading" className={aboutHeadingClass}>
              {copy.sectionHeading}
            </h2>

            <div className="mt-8 flex justify-center">
              <Image
                src="/intro-photo.jpg"
                alt="黄子谊"
                width={256}
                height={256}
                className="w-56 rounded-2xl object-contain bg-white shadow-sm ring-1 ring-border sm:w-64 aspect-[1048/1484]"
                priority
              />
            </div>

            <IntroBioParagraph />
            <IntroCvLink />
          </section>

          <IntroContactSection />
          <IntroEducationSection />
          <IntroSkillsSection />
          <IntroAwardsSection />
          <IntroResearchSection />
        </article>
      </PageShell>
    </PasswordGuard>
  );
}