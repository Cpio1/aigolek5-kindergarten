"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import type { Dictionary } from "@/content";
import { site } from "@/content";
import { Logo } from "./decor/Illustrations";
import { Icon } from "./ui/Icon";

const chipColors = [
  "bg-sun-soft text-sun-deep",
  "bg-sky-soft text-sky-deep",
  "bg-leaf-soft text-leaf-deep",
  "bg-peach-soft text-peach-deep",
  "bg-rose-soft text-rose-deep",
  "bg-lilac-soft text-lilac",
  "bg-sky-soft text-sky-deep",
  "bg-leaf-soft text-leaf-deep",
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  } else {
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  history.replaceState(null, "", `#${id}`);
}

export function Header({ t }: { t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Көлеңке
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Белсенді бөлім
  useEffect(() => {
    const sections = t.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActive(top.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [t.nav]);

  // Мобильді мәзір ашық кезде фонды бұғаттау, Esc арқылы жабу
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const onNav = useCallback((e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    document.documentElement.style.overflow = "";
    requestAnimationFrame(() => scrollToId(id));
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-white/90 shadow-[0_6px_24px_-14px_rgb(35_50_74/0.35)] backdrop-blur-md" : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => onNav(e, "home")}
          aria-label={t.a11y.home}
          className="group flex min-w-0 items-center gap-2.5 lg:shrink-0"
        >
          <Logo className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:rotate-[60deg] lg:h-11 lg:w-11" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-xl font-black lg:overflow-visible lg:whitespace-nowrap tracking-tight text-ink lg:text-[1.35rem]">
              <span className="text-peach">{t.brand.number}</span> {t.brand.name}
            </span>
            <span className="mt-1 truncate text-[0.72rem] font-bold text-ink-soft">{t.brand.kind}</span>
          </span>
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {t.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => onNav(e, item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-full px-2.5 py-2 text-[0.9rem] font-extrabold whitespace-nowrap transition-colors xl:px-3 ${
                      isActive ? "bg-sun-soft text-ink" : "text-ink-soft hover:bg-sky-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 rounded-full bg-leaf px-4 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf-deep xl:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {t.header.call}
          </a>
          <a
            href={site.phone.href}
            aria-label={`${t.header.call}: ${site.phone.display}`}
            className="grid h-11 w-11 place-items-center rounded-full bg-leaf text-white shadow-soft transition active:scale-95 lg:hidden"
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full bg-sun text-ink shadow-soft transition active:scale-95 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

    </header>
      {/* Мобильді мәзір */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-cream/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label={t.a11y.mainNav} className="mx-auto max-w-md px-4 pt-5 pb-10">
          <ul className="grid grid-cols-2 gap-3">
            {t.nav.map((item, i) => (
              <li key={item.id} className="animate-[menuIn_.35s_ease_both]" style={{ animationDelay: `${i * 30}ms` }}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => onNav(e, item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`flex min-h-14 items-center justify-center rounded-2xl px-3 py-3 text-center text-base font-extrabold shadow-soft ring-2 transition active:scale-[0.97] ${
                    chipColors[i % chipColors.length]
                  } ${active === item.id ? "ring-ink/20" : "ring-transparent"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phone.href}
            className="mt-5 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-leaf px-4 text-lg font-black text-white shadow-pop"
          >
            <Icon name="phone" className="h-5 w-5" />
            {site.phone.display}
          </a>
        </nav>
      </div>
    </>
  );
}
