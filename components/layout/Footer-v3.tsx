"use client";

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { useFooterV3Preview } from "@/components/dev/FooterV3PreviewContext";
import { siteConfig } from "@/config/site";
import { FooterBrand } from "@/components/ui/FooterBrand";
import { Container } from "@/components/ui/Container";
import {
  defaultFooterV3PreviewSettings,
  getFooterV3ContainerClassName,
} from "@/lib/footer-v3-preview";
import { scrollToHashHref } from "@/lib/scroll-to-hash";
import { cn } from "@/lib/utils";

type SocialItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialLinks: SocialItem[] = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: <FacebookIcon /> },
];

type FooterV3Props = {
  description?: string;
};

/**
 * Reimagined footer — curved cap, bento grid, pill nav, prominent contact.
 */
export function FooterV3({ description }: FooterV3Props) {
  const year = new Date().getFullYear();
  const activeSocial = socialLinks.filter((link) => link.href);
  const preview = useFooterV3Preview();
  const hasPreviewColors = Boolean(preview);
  const layoutWidth =
    preview?.settings.layoutWidth ?? defaultFooterV3PreviewSettings.layoutWidth;
  const footerTheme = preview?.settings.theme ?? defaultFooterV3PreviewSettings.theme;
  const hasPreviewTheme = Boolean(preview);

  const previewStyle = preview
    ? ({
        "--footer-v3-copyright-color": preview.settings.copyrightColor,
        "--footer-v3-domain-color": preview.settings.domainColor,
        "--footer-v3-social-color": preview.settings.socialColor,
        "--footer-v3-social-hover-color": preview.settings.socialHoverColor,
      } as CSSProperties)
    : undefined;

  return (
    <footer
      className={cn("footer-v3 relative mt-16", hasPreviewColors && "footer-v3--preview-colors")}
      style={previewStyle}
      {...(hasPreviewTheme && { "data-footer-v3-theme": footerTheme })}
    >
      <div
        className="pointer-events-none absolute -top-8 left-1/2 h-16 w-[120%] -translate-x-1/2 rounded-[50%] bg-accent-purple-deep/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="footer-v3-surface relative overflow-hidden rounded-t-[2.5rem] border border-b-0 border-accent-purple/15 bg-footer-surface">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent"
          aria-hidden="true"
        />

        <Container
          className={cn("py-14 lg:py-20", getFooterV3ContainerClassName(layoutWidth))}
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <Link href="/" className="inline-block">
                <FooterBrand priority width={180} height={62} />
              </Link>
              <p className="mt-6 text-lg leading-relaxed text-foreground">
                {siteConfig.tagline}
              </p>
              {description && (
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <p className="font-mono text-xs tracking-widest text-accent-purple uppercase">
                Start a project
              </p>
              {siteConfig.serviceArea && (
                <p className="footer-v3-service-area text-sm sm:text-base">{siteConfig.serviceArea}</p>
              )}
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="footer-v3-phone font-serif text-2xl transition-colors sm:text-3xl"
                >
                  {siteConfig.phone}
                </a>
              )}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent-purple transition-colors hover:text-accent-purple-light"
              >
                Contact us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-2">
            {siteConfig.primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  if (scrollToHashHref(item.href)) {
                    event.preventDefault();
                  }
                }}
                className="rounded-full border border-border bg-surface/40 px-4 py-2 text-sm text-muted transition-colors hover:border-accent-purple/30 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 text-sm">
              <p className={cn("footer-v3-copyright", !hasPreviewColors && "text-muted")}>
                &copy; {year} {siteConfig.name}
              </p>
              <p
                className={cn(
                  "footer-v3-domain font-mono text-xs tracking-wide",
                  !hasPreviewColors && "text-muted",
                )}
              >
                {siteConfig.domain}
              </p>
            </div>

            {activeSocial.length > 0 && (
              <nav className="flex items-center gap-3" aria-label="Social media">
                {activeSocial.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={cn(
                      "footer-v3-social flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent-purple/40",
                      !hasPreviewColors && "text-muted hover:text-accent-purple",
                    )}
                  >
                    {link.icon}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
