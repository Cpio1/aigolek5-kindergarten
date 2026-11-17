import type { ReactNode } from "react";
import { Sparkle } from "../decor/Shapes";

export type Tone = "sun" | "sky" | "leaf" | "peach" | "rose" | "lilac";

export const toneClasses: Record<Tone, { chip: string; text: string; soft: string; solid: string; ring: string }> = {
  sun: { chip: "bg-sun-soft text-sun-deep", text: "text-sun-deep", soft: "bg-sun-soft", solid: "bg-sun", ring: "ring-sun/40" },
  sky: { chip: "bg-sky-soft text-sky-deep", text: "text-sky-deep", soft: "bg-sky-soft", solid: "bg-sky", ring: "ring-sky/40" },
  leaf: { chip: "bg-leaf-soft text-leaf-deep", text: "text-leaf-deep", soft: "bg-leaf-soft", solid: "bg-leaf", ring: "ring-leaf/40" },
  peach: { chip: "bg-peach-soft text-peach-deep", text: "text-peach-deep", soft: "bg-peach-soft", solid: "bg-peach", ring: "ring-peach/40" },
  rose: { chip: "bg-rose-soft text-rose-deep", text: "text-rose-deep", soft: "bg-rose-soft", solid: "bg-rose", ring: "ring-rose/40" },
  lilac: { chip: "bg-lilac-soft text-lilac", text: "text-lilac", soft: "bg-lilac-soft", solid: "bg-lilac", ring: "ring-lilac/40" },
};

const sparkleColor: Record<Tone, string> = {
  sun: "#f2a50c",
  sky: "#43b3ee",
  leaf: "#4fbf73",
  peach: "#ff8a3d",
  rose: "#ff6f9f",
  lilac: "#8f7cf0",
};

export function Section({
  id,
  children,
  className = "",
  decor,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  decor?: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative isolate py-12 sm:py-16 lg:py-20 ${className}`}>
      {decor && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {decor}
        </div>
      )}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  tone = "sky",
  align = "center",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: Tone;
  align?: "center" | "left";
}) {
  const t = toneClasses[tone];
  const center = align === "center";
  return (
    <header data-reveal className={`mb-8 sm:mb-10 ${center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-extrabold ${t.chip}`}>
        <Sparkle width={12} height={12} color={sparkleColor[tone]} />
        {eyebrow}
      </span>
      <h2 id={`${id}-title`} className="mt-3 text-[1.75rem] leading-[1.15] font-black tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      <div className={`squiggle mt-3 h-2 w-20 ${center ? "mx-auto" : ""}`} aria-hidden />
      {lead && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p>}
    </header>
  );
}
