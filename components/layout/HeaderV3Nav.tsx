"use client";

import Link from "next/link";
import { useHeaderV3Preview } from "@/components/dev/HeaderV3PreviewContext";
import type { NavItem } from "@/components/layout/Nav";
import { scrollToHashHref } from "@/lib/scroll-to-hash";
import { cn } from "@/lib/utils";

type HeaderV3NavProps = {
  items: readonly NavItem[];
  ariaLabel?: string;
};

export function HeaderV3Nav({ items, ariaLabel = "Primary navigation" }: HeaderV3NavProps) {
  const preview = useHeaderV3Preview();
  const isCustom = Boolean(preview);

  if (items.length === 0) return null;

  return (
    <nav
      className={cn(
        "header-v3-nav flex w-full flex-wrap items-center justify-end gap-1.5 lg:gap-2",
      )}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(event) => {
            if (scrollToHashHref(item.href)) {
              event.preventDefault();
            }
          }}
          className={cn(
            "font-medium uppercase tracking-wide",
            isCustom
              ? "header-v3-nav-link radial-hover-shine"
              : "text-sm text-muted transition-colors hover:text-foreground lg:text-base",
          )}
        >
          {isCustom ? (
            <span className="relative z-[1]">{item.label}</span>
          ) : (
            item.label
          )}
        </Link>
      ))}
    </nav>
  );
}
