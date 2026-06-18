"use client";

import { HeroV21PreviewProvider } from "@/components/dev/HeroV21PreviewContext";
import { HeaderV3PreviewProvider } from "@/components/dev/HeaderV3PreviewContext";
import { PortfolioPreviewProvider } from "@/components/dev/PortfolioPreviewContext";
import { FooterV3PreviewProvider } from "@/components/dev/FooterV3PreviewContext";
import { ReviewboxPreviewProvider } from "@/components/dev/ReviewboxPreviewContext";
import { ServicesV1LayoutProvider } from "@/components/dev/ServicesV1LayoutContext";
import { SpacerStripePreviewProvider } from "@/components/dev/SpacerStripePreviewContext";
import {
  getSectionVariant,
  sectionGroups,
  type SectionGroupId,
} from "@/lib/section-registry";

type SectionPreviewProps = {
  group: SectionGroupId;
  variant?: string;
};

/** Renders a section variant with no playground controls. */
export function SectionPreview({ group, variant }: SectionPreviewProps) {
  const section = sectionGroups[group];
  const variantId = variant ?? section.defaultVariant;
  const activeVariant = getSectionVariant(group, variantId);
  const content = activeVariant.render();

  if (group === "services") {
    return <ServicesV1LayoutProvider>{content}</ServicesV1LayoutProvider>;
  }

  if (group === "spacer") {
    return <SpacerStripePreviewProvider>{content}</SpacerStripePreviewProvider>;
  }

  if (group === "header" && variantId === "header-v3") {
    return <HeaderV3PreviewProvider>{content}</HeaderV3PreviewProvider>;
  }

  if (group === "hero" && variantId === "hero-v2.1") {
    return <HeroV21PreviewProvider>{content}</HeroV21PreviewProvider>;
  }

  if (group === "portfolio" && variantId === "portfolio-v1") {
    return <PortfolioPreviewProvider>{content}</PortfolioPreviewProvider>;
  }

  if (group === "footer" && variantId === "footer-v3") {
    return <FooterV3PreviewProvider>{content}</FooterV3PreviewProvider>;
  }

  if (group === "reviewbox" && variantId === "reviewbox-v1") {
    return <ReviewboxPreviewProvider>{content}</ReviewboxPreviewProvider>;
  }

  return content;
}
