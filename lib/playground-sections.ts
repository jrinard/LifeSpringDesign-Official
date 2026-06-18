import type { SectionGroupId } from "@/lib/section-registry";

export type PlaygroundSectionConfig = {
  group: SectionGroupId;
  defaultVariant?: string;
  /** Selected variant in playground (persisted for /preview). */
  variant?: string;
  /** When true, section appears on /preview. */
  preview?: boolean;
};

export const playgroundSectionOrderKey = "lifespring-playground-section-order";

export const defaultPlaygroundSections: PlaygroundSectionConfig[] = [
  { group: "header", defaultVariant: "header-v3", preview: false },
  { group: "hero", defaultVariant: "heroWashing-v1", preview: false },
  { group: "spacer", defaultVariant: "spacer-v1", preview: false },
  { group: "flipCards", preview: false },
  { group: "services", defaultVariant: "services-v1", preview: false },
  { group: "reviewbox", defaultVariant: "reviewbox-v1", preview: false },
  { group: "portfolio", preview: false },
  { group: "testimonials", defaultVariant: "testimonials-v3", preview: false },
  { group: "cta", preview: false },
  { group: "footer", defaultVariant: "footer-v4", preview: false },
];

export function getPlaygroundSectionVariant(config: PlaygroundSectionConfig): string | undefined {
  return config.variant ?? config.defaultVariant;
}

export function getPreviewSections(sections: PlaygroundSectionConfig[]): PlaygroundSectionConfig[] {
  return sections.filter((section) => section.preview === true);
}

export function mergePlaygroundSectionOrder(stored: unknown): PlaygroundSectionConfig[] {
  if (!Array.isArray(stored)) {
    return defaultPlaygroundSections;
  }

  const knownGroups = new Set(defaultPlaygroundSections.map((section) => section.group));
  const merged: PlaygroundSectionConfig[] = [];

  for (const item of stored) {
    if (
      item &&
      typeof item === "object" &&
      "group" in item &&
      typeof item.group === "string" &&
      knownGroups.has(item.group as SectionGroupId)
    ) {
      const fallback = defaultPlaygroundSections.find((section) => section.group === item.group);

      merged.push({
        group: item.group as SectionGroupId,
        defaultVariant:
          "defaultVariant" in item && typeof item.defaultVariant === "string"
            ? item.defaultVariant
            : fallback?.defaultVariant,
        variant: "variant" in item && typeof item.variant === "string" ? item.variant : undefined,
        preview:
          "preview" in item && typeof item.preview === "boolean"
            ? item.preview
            : fallback?.preview ?? false,
      });
      knownGroups.delete(item.group as SectionGroupId);
    }
  }

  for (const group of knownGroups) {
    const fallback = defaultPlaygroundSections.find((section) => section.group === group);
    if (fallback) merged.push(fallback);
  }

  return merged.length > 0 ? merged : defaultPlaygroundSections;
}
