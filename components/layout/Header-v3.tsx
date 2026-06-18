"use client";

import Link from "next/link";
import { useState } from "react";
import { useHeaderV3Preview } from "@/components/dev/HeaderV3PreviewContext";
import { siteConfig } from "@/config/site";
import { HeaderBrand } from "@/components/ui/HeaderBrand";
import { HeaderV3Nav } from "@/components/layout/HeaderV3Nav";
import { HeaderV3NavBar } from "@/components/layout/HeaderV3NavBar";
import {
  defaultHeaderV3PreviewSettings,
  getHeaderV3InnerClassName,
} from "@/lib/header-v3-gradient";
import { cn } from "@/lib/utils";

type HeaderV3Props = {
  className?: string;
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.29 6.31-1.42-1.42L9.17 12 2.88 5.71 4.3 4.29l6.29 6.3 6.29-6.3z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
      />
    </svg>
  );
}

const utilitySocial = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: <FacebookIcon /> },
  { label: "Instagram", href: siteConfig.social.instagram, icon: <InstagramIcon /> },
];

const headerV3Nav = siteConfig.primaryNav;

function HeaderV3UtilityContent({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-end gap-x-5 gap-y-2", className)}>
      {(siteConfig.serviceArea || siteConfig.phone) && (
        <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-base lg:text-lg">
          {siteConfig.serviceArea && (
            <span className="header-v3-service-area mr-3 lg:mr-4">{siteConfig.serviceArea}</span>
          )}
          {siteConfig.phone && (
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="header-v3-phone-link font-bold transition-colors"
            >
              {siteConfig.phone}
            </a>
          )}
        </div>
      )}
      {utilitySocial.length > 0 && (
        <div className="flex items-center gap-3.5 border-l border-border pl-5">
          {utilitySocial.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function HeaderV3MobilePhone() {
  if (!siteConfig.phone) return null;

  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
      className="header-v3-phone-link text-center text-base font-bold transition-colors md:hidden"
    >
      {siteConfig.phone}
    </a>
  );
}

/** Logo left, utility + social top-right, primary nav on a darker strip below. */
export function HeaderV3({ className }: HeaderV3Props) {
  const preview = useHeaderV3Preview();
  const [mobileOpen, setMobileOpen] = useState(false);
  const layoutWidth =
    preview?.settings.layoutWidth ?? defaultHeaderV3PreviewSettings.layoutWidth;

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className={cn("border-b border-border bg-background/80 backdrop-blur-sm", className)}>
      <div className={getHeaderV3InnerClassName(layoutWidth)}>
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link href="/" className="my-2.5 shrink-0">
              <HeaderBrand priority className="h-[4.25rem]" width={240} height={82} />
            </Link>
          </div>

          <div className="relative mt-2 flex items-center justify-center">
            <HeaderV3MobilePhone />
            <button
              type="button"
              className="header-v3-menu-toggle absolute right-0 top-1/2 inline-flex shrink-0 -translate-y-1/2 items-center justify-center rounded-sm border border-border p-2.5 text-foreground transition-colors hover:bg-hover-overlay"
              aria-expanded={mobileOpen}
              aria-controls="header-v3-mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex lg:gap-10">
          <Link href="/" className="my-2.5 shrink-0 self-center">
            <HeaderBrand priority className="h-[4.25rem] lg:h-20" width={240} height={82} />
          </Link>

          <div className="min-w-0 flex-1 flex-col">
            <div className="header-v3-utility-bar mt-2 flex flex-wrap items-center justify-end gap-x-5 gap-y-2 border-b border-border pb-3">
              <HeaderV3UtilityContent />
            </div>

            <HeaderV3NavBar className="mt-2.5 flex justify-end rounded-sm px-4 py-3 lg:px-5 lg:py-3.5">
              <HeaderV3Nav items={headerV3Nav} ariaLabel="Primary navigation" />
            </HeaderV3NavBar>
          </div>
        </div>

        <div
          id="header-v3-mobile-menu"
          className={cn(
            "header-v3-mobile-menu border-t border-border md:hidden",
            mobileOpen ? "block" : "hidden",
          )}
        >
          <HeaderV3NavBar className="mt-2 rounded-sm px-2 py-4">
            <HeaderV3Nav
              items={headerV3Nav}
              ariaLabel="Mobile primary navigation"
              orientation="vertical"
              onNavigate={closeMobileMenu}
            />
          </HeaderV3NavBar>
        </div>
      </div>
    </header>
  );
}
