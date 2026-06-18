import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PreviewGradientDirection } from "@/lib/preview-gradient";
import { getPreviewGradientBackground } from "@/lib/preview-gradient";
import {
  defaultServicesV1LayoutWidth,
  getServicesV1CardClassName,
  getServicesV1ContainerClassName,
  getServicesV1GridClassName,
  type ServicesV1LayoutWidth,
} from "@/lib/services-v1-preview";

export type { ServicesV1LayoutWidth };

export type ServicesV1GradientDirection = PreviewGradientDirection;

export type ServicesV1Background = {
  from: string;
  to: string;
  direction: ServicesV1GradientDirection;
};

export type ServiceV1 = {
  title: string;
  description: string;
  bullets: string[];
  /** Public asset path (e.g. /demo-icon-square-green.png) or emoji fallback */
  icon: string;
  /** Descriptive alt text for logo images — omit for decorative icons */
  iconAlt?: string;
};

function ServiceIcon({ icon, alt }: { icon: string; alt?: string }) {
  if (icon.startsWith("/")) {
    const isLogo = /logo/i.test(icon);

    return (
      <Image
        src={icon}
        alt={alt ?? ""}
        width={isLogo ? 120 : 44}
        height={isLogo ? 40 : 44}
        className={cn(
          "shrink-0 object-contain",
          isLogo
            ? "h-8 w-auto max-w-[4.5rem] sm:h-9 sm:max-w-[5rem]"
            : "h-8 w-8 sm:h-9 sm:w-9",
        )}
        aria-hidden={alt ? undefined : true}
      />
    );
  }

  return (
    <span className="shrink-0 text-3xl leading-none sm:text-4xl" role="img" aria-hidden="true">
      {icon}
    </span>
  );
}

export type ServicesV1Cta = {
  headline: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
};

type ServicesV1Props = {
  heading?: string;
  subheading?: string;
  services: ServiceV1[];
  cta?: ServicesV1Cta;
  layoutWidth?: ServicesV1LayoutWidth;
  background?: ServicesV1Background;
};

export function ServicesV1({
  heading = "Services",
  subheading,
  services,
  cta,
  layoutWidth = defaultServicesV1LayoutWidth,
  background,
}: ServicesV1Props) {
  const sectionStyle = background
    ? {
        background: getPreviewGradientBackground(
          background.from,
          background.to,
          background.direction,
        ),
      }
    : undefined;

  return (
    <section id="services" className="scroll-mt-24 py-[calc(6rem-15px)]" style={sectionStyle}>
      <Container className={cn(getServicesV1ContainerClassName(layoutWidth))}>
        <div className="text-left">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 max-w-2xl text-muted">{subheading}</p>
          )}
        </div>

        <div className={cn("mt-12 gap-5", getServicesV1GridClassName(layoutWidth))}>
          {services.map((service) => (
            <article
              key={service.title}
              className={cn(
                "rounded-xl border border-border border-l-[5px] border-l-accent-blue bg-surface/50 p-5 transition-colors hover:border-accent-blue/30 lg:p-6",
                getServicesV1CardClassName(layoutWidth),
              )}
            >
              <h3 className="flex items-start gap-2.5 font-serif text-base font-medium uppercase tracking-wide text-foreground sm:text-lg">
                <ServiceIcon icon={service.icon} alt={service.iconAlt} />
                <span>{service.title}</span>
              </h3>
              <p className="mt-2.5 text-sm leading-snug text-muted sm:text-base">{service.description}</p>
              <ul className="mt-4 space-y-0.5 border-t border-border pt-4">
                {service.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-snug text-foreground/90 before:shrink-0 before:content-['•'] before:text-accent-blue sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          {cta && (
            <div
              className={cn(
                "flex flex-col justify-center py-2 pl-6 uppercase sm:pl-8 lg:pl-10 lg:py-4",
                getServicesV1CardClassName(layoutWidth),
              )}
            >
              <h3 className="font-serif text-xl font-light leading-snug text-foreground sm:text-2xl lg:text-3xl">
                {cta.headline}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-muted sm:text-xl lg:text-2xl">{cta.text}</p>
              <Link href={cta.ctaHref} className="mt-6 normal-case">
                <Button size="lg">{cta.ctaLabel}</Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
