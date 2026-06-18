"use client";

import type { ReactNode } from "react";
import { ContactModal } from "@/components/contact/ContactModal";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
import { CreativeBar } from "@/components/dev/CreativeBar";
import { CreativeProvider } from "@/components/dev/CreativeProvider";
import { ContactV1PreviewProvider } from "@/components/dev/ContactV1PreviewContext";

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
      <ContactV1PreviewProvider>
        <ContactModalProvider>
          {showControls && <CreativeBar />}
          {children}
          <ContactModal />
        </ContactModalProvider>
      </ContactV1PreviewProvider>
    </CreativeProvider>
  );
}
