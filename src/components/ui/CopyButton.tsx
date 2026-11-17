"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function CopyButton({ text, label, done, className = "" }: { text: string; label: string; done: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={copy} className={className}>
      <Icon name={copied ? "check" : "copy"} className="h-5 w-5" />
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}
