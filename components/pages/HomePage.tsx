"use client";

import { useState } from "react";
import { PlaygroundSectionSlot } from "@/components/dev/PlaygroundSectionSlot";
import { SectionSwitcher } from "@/components/dev/SectionSwitcher";
import { sectionGroups } from "@/lib/section-registry";
import {
  getPlaygroundSectionVariant,
  type PlaygroundSectionConfig,
} from "@/lib/playground-sections";
import { usePlaygroundSections } from "@/lib/use-playground-sections";

function reorderSections(
  sections: PlaygroundSectionConfig[],
  fromIndex: number,
  toIndex: number,
) {
  if (fromIndex === toIndex) return sections;

  const next = [...sections];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

export function HomePage() {
  const { sections, setSections, updateSection } = usePlaygroundSections();
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  return (
    <main id="main-content">
      {sections.map((config, index) => (
        <PlaygroundSectionSlot
          key={config.group}
          index={index}
          label={sectionGroups[config.group].label}
          compactControls={config.group === "spacer"}
          previewChecked={config.preview === true}
          onPreviewChange={(checked) => updateSection(config.group, { preview: checked })}
          isDragging={dragIndex === index}
          isDropTarget={overIndex === index && dragIndex !== null && dragIndex !== index}
          onDragStart={setDragIndex}
          onDragEnd={() => {
            setDragIndex(null);
            setOverIndex(null);
          }}
          onDragOver={setOverIndex}
          onDrop={(fromIndex, toIndex) => {
            setSections(reorderSections(sections, fromIndex, toIndex));
            setDragIndex(null);
            setOverIndex(null);
          }}
        >
          <SectionSwitcher
            group={config.group}
            defaultVariant={config.defaultVariant}
            variant={getPlaygroundSectionVariant(config)}
            onVariantChange={(variantId) => updateSection(config.group, { variant: variantId })}
          />
        </PlaygroundSectionSlot>
      ))}
    </main>
  );
}
