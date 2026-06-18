"use client";

import { useCallback, useEffect, useState } from "react";
import type { SectionGroupId } from "@/lib/section-registry";
import {
  defaultPlaygroundSections,
  getPreviewSections,
  mergePlaygroundSectionOrder,
  playgroundSectionOrderKey,
  type PlaygroundSectionConfig,
} from "@/lib/playground-sections";

export function usePlaygroundSections() {
  const [sections, setSectionsState] = useState(defaultPlaygroundSections);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(playgroundSectionOrderKey);
    if (stored) {
      try {
        setSectionsState(mergePlaygroundSectionOrder(JSON.parse(stored)));
      } catch {
        setSectionsState(defaultPlaygroundSections);
      }
    }
    setReady(true);
  }, []);

  const setSections = useCallback((next: PlaygroundSectionConfig[]) => {
    setSectionsState(next);
    localStorage.setItem(playgroundSectionOrderKey, JSON.stringify(next));
  }, []);

  const updateSection = useCallback(
    (group: SectionGroupId, patch: Partial<PlaygroundSectionConfig>) => {
      setSectionsState((current) => {
        const next = current.map((section) =>
          section.group === group ? { ...section, ...patch } : section,
        );
        localStorage.setItem(playgroundSectionOrderKey, JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  return {
    sections,
    setSections,
    updateSection,
    previewSections: getPreviewSections(sections),
    ready,
  };
}
