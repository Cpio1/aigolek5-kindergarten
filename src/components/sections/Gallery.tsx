import type { Dictionary, GalleryImage } from "@/content";
import { PhotoPlaceholder } from "../decor/Illustrations";
import { Flower, Sparkle, Star } from "../decor/Shapes";
import { Section, SectionHeading } from "../ui/Section";
import { GalleryGrid } from "./GalleryGrid";

const placeholders = [
  { span: "col-span-2 row-span-2", tone: "#43b3ee", bg: "bg-sky-soft" },
  { span: "", tone: "#ff6f9f", bg: "bg-rose-soft" },
  { span: "", tone: "#f2a50c", bg: "bg-sun-soft" },
  { span: "", tone: "#4fbf73", bg: "bg-leaf-soft" },
  { span: "", tone: "#8f7cf0", bg: "bg-lilac-soft" },
  { span: "sm:hidden", tone: "#ff8a3d", bg: "bg-peach-soft" },
];

export function Gallery({ t, images }: { t: Dictionary["gallery"]; images: GalleryImage[] }) {
  return (
    <Section
      id="gallery"
      decor={
        <>
          <Star className="absolute top-12 left-[6%] w-5 animate-sway" color="#ff6f9f" />
          <Flower className="absolute right-[5%] bottom-10 hidden w-7 animate-spin-slow md:block" petal="#43b3ee" />
        </>
      }
    >
      <SectionHeading id="gallery" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="lilac" />

      {images.length > 0 ? (
        <GalleryGrid images={images} t={t} />
      ) : (
        <div data-reveal className="relative">
          <ul aria-hidden className="grid auto-rows-[5.5rem] grid-cols-3 gap-3 sm:auto-rows-[8rem] sm:grid-cols-4 lg:auto-rows-[9.5rem] sm:gap-4">
            {placeholders.map((p, i) => (
              <li
                key={i}
                className={`grid place-items-center rounded-2xl ${p.bg} ${p.span} ${i % 2 ? "rounded-tr-[2.2rem]" : "rounded-bl-[2.2rem]"}`}
              >
                <PhotoPlaceholder tone={p.tone} className="w-12 opacity-80 sm:w-16" />
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute inset-0 grid place-items-center p-4">
            <div className="max-w-sm rounded-3xl bg-white/95 px-5 py-4 text-center shadow-pop ring-1 ring-ink/5 backdrop-blur">
              <Sparkle className="mx-auto w-6" color="#8f7cf0" />
              <p className="mt-1.5 font-black text-ink">{t.emptyTitle}</p>
              <p className="mt-1 text-sm leading-snug text-ink-soft">{t.emptyText}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
