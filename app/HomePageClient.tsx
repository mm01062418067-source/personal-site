"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypewriterText } from "./components/TypewriterText";

const copy = {
  name: "黄子谊",
  tagline: "一颗向好的心，从未停下脚步。",
  subtitle: "",
  nav: [
    { href: "/intro", label: "介绍" },
    { href: "/research", label: "科研" },
    { href: "/projects", label: "项目" },
    { href: "/life", label: "生活" },
    { href: "/friends", label: "友链" },
  ],
};

export function HomePageClient() {
  const [line1Done, setLine1Done] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-28 pt-20 text-center sm:pt-32">
      <Image
        src="/logo.png"
        alt="黄子谊"
        width={96}
        height={96}
        className="h-20 w-20 rounded-full object-cover shadow-sm ring-1 ring-border sm:h-24 sm:w-24"
        priority
      />

      <h1 className="mt-6 text-6xl font-semibold tracking-tight text-foreground sm:text-7xl">
        <TypewriterText
          text={copy.name}
          speed={180}
          onDone={() => setLine1Done(true)}
        />
      </h1>

      <p className="mt-6 min-h-8 text-xl leading-relaxed text-muted-foreground sm:min-h-9 sm:text-2xl">
        {line1Done && <TypewriterText text={copy.tagline} speed={90} />}
      </p>

      <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        {copy.subtitle}
      </p>

      <nav
        className={`mt-12 flex flex-wrap justify-center gap-3 transition-opacity duration-700 sm:gap-4 ${
          line1Done ? "opacity-100" : "opacity-0"
        }`}
      >
        {copy.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-base font-medium text-card-foreground shadow-sm ring-1 ring-border/60 transition hover:scale-[1.04] hover:border-muted-foreground/30 hover:shadow-md sm:px-6 sm:py-3"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}