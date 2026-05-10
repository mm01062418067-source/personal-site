"use client";

import { introCopy, INTRO_CONTACT } from "@/lib/siteCopy";
import { useSite } from "../components/SiteProvider";

const headingClass = "text-2xl font-semibold tracking-tight text-foreground";

export function IntroContactSection() {
  const { locale } = useSite();
  const t = introCopy[locale];
  const c = INTRO_CONTACT;

  return (
    <section
      className="mt-16 border-t border-section-divider pt-12"
      aria-labelledby="intro-contact-heading"
    >
      <h2 id="intro-contact-heading" className={headingClass}>
        {t.contactHeading}
      </h2>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-6 sm:items-baseline">
          <dt className="font-medium text-muted-foreground">
            {t.contactEmailLabel}
          </dt>
          <dd className="font-mono text-foreground">{c.email}</dd>
        </div>

        <div className="grid gap-1 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-6 sm:items-baseline">
          <dt className="font-medium text-muted-foreground">
            {t.contactPhoneLabel}
          </dt>
          <dd className="font-mono text-foreground">{c.phone}</dd>
        </div>

        <div className="grid gap-1 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-6 sm:items-baseline">
          <dt className="font-medium text-muted-foreground">
            {t.contactWechatLabel}
          </dt>
          <dd className="font-mono text-foreground">{c.wechat}</dd>
        </div>

        {c.qq ? (
          <div className="grid gap-1 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-6 sm:items-baseline">
            <dt className="font-medium text-muted-foreground">
              {t.contactQqLabel}
            </dt>
            <dd className="font-mono text-foreground">{c.qq}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
