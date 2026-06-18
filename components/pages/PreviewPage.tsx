"use client";

import { SectionPreview } from "@/components/dev/SectionPreview";
import { getPlaygroundSectionVariant } from "@/lib/playground-sections";
import { usePlaygroundSections } from "@/lib/use-playground-sections";

export function PreviewPage() {
  const { previewSections, ready } = usePlaygroundSections();

  if (!ready) {
    return <main id="main-content" />;
  }

  return (
    <main id="main-content">
      {previewSections.map((config) => (
        <SectionPreview
          key={config.group}
          group={config.group}
          variant={getPlaygroundSectionVariant(config)}
        />
      ))}
    </main>
  );
}
