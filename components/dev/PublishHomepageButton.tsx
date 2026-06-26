"use client";

import { useState } from "react";
import { publishHomepageConfigFromStorage } from "@/lib/homepage-export-client";

const buttonClassName =
  "rounded border border-accent-purple/60 bg-accent-purple/10 px-3 py-2 font-mono text-xs tracking-wide text-accent-purple uppercase transition-colors hover:border-accent-purple hover:bg-accent-purple/20 disabled:cursor-not-allowed disabled:opacity-50";

export function PublishHomepageButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handlePublish() {
    setStatus("loading");
    setMessage(null);

    try {
      await publishHomepageConfigFromStorage();
      setStatus("done");
      setMessage("Published to lib/homepage-config.json — refresh / to see it.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Publish failed.");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={handlePublish}
        disabled={status === "loading"}
        className={buttonClassName}
      >
        {status === "loading" ? "Publishing…" : "Publish to /"}
      </button>
      {message ? (
        <span
          className={`font-mono text-xs ${status === "error" ? "text-red-300" : "text-white/60"}`}
        >
          {message}
        </span>
      ) : null}
    </div>
  );
}
