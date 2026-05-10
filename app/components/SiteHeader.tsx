"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const name = "黄子谊";
  const nav = [
    { href: "/", label: "主页" },
    { href: "/intro", label: "介绍" },
    { href: "/research", label: "科研" },
    { href: "/projects", label: "项目" },
    { href: "/life", label: "生活" },
    { href: "/friends", label: "友链" },
    { href: "/settings", label: "设置" },
  ];

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/projects/");
    }
    return pathname === href;
  };

  return (
    <header
      data-lively-exclude
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <nav
          className="hidden min-w-0 flex-1 items-center gap-2 text-sm font-medium text-foreground sm:flex sm:gap-3 sm:text-base"
          aria-label="主导航"
        >
          <Link
            href="/"
            className="shrink-0 font-semibold tracking-tight text-foreground transition-colors hover:text-muted-foreground"
          >
            {name}
          </Link>
          <span className="shrink-0 text-border" aria-hidden>
            |
          </span>
          <ul className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-5">
            {nav.map((item) => (
              <Fragment key={item.href}>
                {item.href === "/settings" && (
                  <li className="shrink-0 text-border" aria-hidden>
                    |
                  </li>
                )}
                <li>
                  <Link
                    href={item.href}
                    className={
                      isActive(item.href)
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center gap-3 sm:hidden">
          <Link href="/" className="font-semibold tracking-tight text-foreground">
            {name}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-card-foreground shadow-sm sm:hidden"
          aria-label="打开菜单"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden">
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden
          />
          <div className="fixed top-0 left-0 z-50 h-screen w-[80vw] max-w-xs overflow-y-auto bg-card shadow-2xl">
            <div className="sticky top-0 flex h-14 items-center justify-between border-b border-border bg-card px-4">
              <span className="font-semibold text-foreground">菜单</span>
              <button
                type="button"
                onClick={closeMobile}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
                aria-label="关闭菜单"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-6" aria-label="移动端导航">
              <ul className="space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={`block rounded-xl px-4 py-3.5 text-lg font-medium transition ${
                        isActive(item.href)
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}