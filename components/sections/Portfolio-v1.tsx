"use client";

import Image from "next/image";
import Link from "next/link";
import { usePortfolioPreview } from "@/components/dev/PortfolioPreviewContext";
import { Container } from "@/components/ui/Container";
import { defaultPortfolioPreviewSettings } from "@/lib/portfolio-preview";

type Project = {
  title: string;
  tags: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type PortfolioV1Props = {
  heading?: string;
  projects: Project[];
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Featured work grid — inspired by agency portfolio strips.
 */
export function PortfolioV1({
  heading = "Projects",
  projects,
  ctaLabel = "View All Projects",
  ctaHref,
}: PortfolioV1Props) {
  const preview = usePortfolioPreview();
  const theme = preview?.settings.theme ?? defaultPortfolioPreviewSettings.theme;

  return (
    <section id="portfolio" className="portfolio-v1 scroll-mt-24 py-[calc(6rem-15px)]" data-portfolio-theme={theme}>
      <Container>
        <div className="text-left">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border-2 border-border bg-surface/50 transition-[border-color,box-shadow] hover:border-accent-blue/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-gradient-to-br from-subtle-from to-subtle-to">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs tracking-widest text-muted/50 uppercase">
                      Project Image
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tags}</p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-accent-blue transition-colors hover:text-accent-blue-dark"
                  >
                    View project →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {ctaHref && (
          <div className="mt-12 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
            >
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
