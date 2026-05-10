"use client";

import { useEffect, useState } from "react";
import { useSite } from "../components/SiteProvider";
import { LIFE_VOLUNTEER, LIFE_VOLUNTEER_ITEMS } from "@/lib/siteCopy";

const headingClass =
  "mt-12 text-xl font-semibold tracking-tight text-foreground";

function VolunteerPhotoGallery({
  slug,
  photos,
}: {
  slug: string;
  photos: string[];
}) {
  return (
    <div className="mt-3 grid gap-2">
      {photos.map((name, i) => (
        <img
          key={name}
          src={`/api/life/file/volunteer/${slug}/${name}`}
          alt={`活动照片 ${i + 1}`}
          loading="lazy"
          className="w-full rounded-lg border border-border object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ))}
    </div>
  );
}

export function LifeVolunteerSection() {
  const { locale } = useSite();
  const t = LIFE_VOLUNTEER[locale];
  const items = LIFE_VOLUNTEER_ITEMS[locale];
  const [photoMap, setPhotoMap] = useState<Record<string, string[]>>({});
  const [expandedPhotoSlug, setExpandedPhotoSlug] = useState<string | null>(
    null,
  );
  const [expandedCertSlug, setExpandedCertSlug] = useState<string | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const map: Record<string, string[]> = {};
      await Promise.all(
        items.map(async (item) => {
          try {
            const res = await fetch(`/api/life/volunteer-photos/${item.slug}`);
            if (res.ok) {
              const names: string[] = await res.json();
              map[item.slug] = names;
            }
          } catch {
            // ignore
          }
        }),
      );
      if (!cancelled) {
        setPhotoMap(map);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [items]);

  if (items.length === 0) {
    return (
      <section aria-labelledby="life-volunteer-heading">
        <h2 id="life-volunteer-heading" className={headingClass}>
          {t.heading}
        </h2>
        <p className="mt-6 text-sm text-muted-foreground">{t.emptyHint}</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="life-volunteer-heading">
      <h2 id="life-volunteer-heading" className={headingClass}>
        {t.heading}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        累计参与多项志愿活动，涵盖体育赛事、社区服务、校园活动等多个领域。
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const photos = photoMap[item.slug] ?? [];
          const hasPhotos = photos.length > 0;
          const thumbnailSrc = hasPhotos
            ? `/api/life/file/volunteer/${item.slug}/${photos[0]}`
            : null;
          const certSrc = `/api/life/file/volunteer/${item.slug}/cert.jpg`;
          const isPhotoExpanded = expandedPhotoSlug === item.slug;
          const isCertExpanded = expandedCertSlug === item.slug;

          return (
            <div
              key={item.slug}
              className="group rounded-xl border border-border bg-card/50 p-4 shadow-sm transition hover:border-muted-foreground/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground">
                    {item.time}
                  </div>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.role}
                  </p>
                </div>

                {thumbnailSrc && (
                  <img
                    src={thumbnailSrc}
                    alt={item.title}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-lg border border-border object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
              </div>

              <div className="mt-2 flex gap-3">
                {hasPhotos && (
                  <button
                    onClick={() =>
                      setExpandedPhotoSlug(
                        isPhotoExpanded ? null : item.slug,
                      )
                    }
                    className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                  >
                    {isPhotoExpanded ? "收起照片" : "查看活动照片"}
                  </button>
                )}
                <button
                  onClick={() =>
                    setExpandedCertSlug(isCertExpanded ? null : item.slug)
                  }
                  className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                >
                  {isCertExpanded ? "收起证书" : "查看证书"}
                </button>
              </div>

              {isPhotoExpanded && hasPhotos && (
                <VolunteerPhotoGallery slug={item.slug} photos={photos} />
              )}

              {isCertExpanded && (
                <div className="mt-3 overflow-hidden rounded-lg border border-border">
                  <img
                    src={certSrc}
                    alt={`${item.title}志愿证书`}
                    loading="lazy"
                    className="w-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).alt = "证书加载失败";
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
