"use client";

import type { ReactNode } from "react";
import { CreativeBar } from "@/components/dev/CreativeBar";
import { CreativeProvider } from "@/components/dev/CreativeProvider";

type PreviewShellProps = {
  children: ReactNode;
  showControls?: boolean;
};

/**
 * Wraps preview routes with theme context. Control panel is playground-only.
 */
export function PreviewShell({ children, showControls = false }: PreviewShellProps) {
  return (
    <CreativeProvider>
      {showControls && <CreativeBar />}
      {children}
    </CreativeProvider>
  );
}
