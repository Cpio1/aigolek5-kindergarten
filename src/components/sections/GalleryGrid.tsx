"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import type { Dictionary, GalleryImage } from "@/content";
import { Icon } from "../ui/Icon";

type Labels = Dictionary["gallery"];

export function GalleryGrid({ images, t }: { images: GalleryImage[]; t: Labels }) {
  const [index, setIndex] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    setIndex((i) => {
      if (i !== null) requestAnimationFrame(() => triggers.current[i]?.focus());
      return null;
    });
  }, []);

  return (
    <>
      <ul className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {images.map((img, i) => (
          <li key={img.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              ref={(el) => {
                triggers.current[i] = el;
              }}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.open}: ${img.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition group-hover:bg-ink/25 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink">
                  <Icon name="expand" className="h-5 w-5" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {index !== null && <Lightbox images={images} index={index} setIndex={setIndex} onClose={close} t={t} />}
    </>
  );
}

function Lightbox({
  images,
  index,
  setIndex,
  onClose,
  t,
}: {
  images: GalleryImage[];
  index: number;
  setIndex: (fn: (i: number | null) => number | null) => void;
  onClose: () => void;
  t: Labels;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const count = images.length;
  const img = images[index];

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + count) % count)),
    [count, setIndex],
  );

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const onTouchStart = (e: TouchEvent) => {
    const p = e.touches[0];
    touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (!touch.current) return;
    const p = e.changedTouches[0];
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) onClose();
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm animate-[menuIn_.25s_ease_both]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between px-4 pt-[max(env(safe-area-inset-top),0.75rem)] pb-2 text-white">
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-extrabold tabular-nums">
          {index + 1} {t.counterOf} {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/15 transition hover:bg-white/25"
        >
          <Icon name="close" className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          sizes="100vw"
          priority
          className="h-auto max-h-full w-auto max-w-full rounded-xl object-contain shadow-2xl animate-[menuIn_.25s_ease_both]"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t.prev}
              className="absolute top-1/2 left-2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:grid"
            >
              <Icon name="left" className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t.next}
              className="absolute top-1/2 right-2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:grid"
            >
              <Icon name="right" className="h-7 w-7" />
            </button>
          </>
        )}
      </div>

      <div className="px-4 pt-3 pb-[max(env(safe-area-inset-bottom),1rem)] text-center text-white">
        {img.caption && <p className="mb-3 text-sm font-semibold text-white/85">{img.caption}</p>}
        {count > 1 && (
          <div className="flex justify-center gap-3 sm:hidden">
            <button type="button" onClick={() => go(-1)} aria-label={t.prev} className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
              <Icon name="left" className="h-6 w-6" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t.next} className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
              <Icon name="right" className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
