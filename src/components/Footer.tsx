import type { Dictionary } from "@/content";
import { site } from "@/content";
import { Logo } from "./decor/Illustrations";
import { Icon } from "./ui/Icon";

export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="relative mt-6 bg-ink text-white">
      <svg aria-hidden viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute -top-[39px] left-0 h-10 w-full text-ink">
        <path d="M0 40V22c120-20 240-20 360 0s240 20 360 0 240-20 360 0 240 20 360 0v18Z" fill="currentColor" />
      </svg>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <p className="leading-tight">
              <span className="block text-xl font-black">
                <span className="text-sun">{t.brand.number}</span> {t.brand.name}
              </span>
              <span className="text-sm font-bold text-white/70">{t.brand.kind}</span>
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm font-semibold text-white/75">{t.hero.subtitle}</p>
        </div>

        <nav aria-label={t.a11y.mainNav}>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-bold">
            {t.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-white/80 transition hover:text-sun">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 text-sm font-semibold text-white/80">
          <p className="flex gap-2">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
            {t.contacts.addressShort}
          </p>
          <a href={site.phone.href} className="flex items-center gap-2 font-black text-white hover:text-sun">
            <Icon name="phone" className="h-4 w-4 shrink-0 text-leaf" />
            {site.phone.display}
          </a>
          <p className="flex gap-2">
            <Icon name="id" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
            {t.documents.requisites.bin}: {site.bin}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs font-semibold text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {t.brand.number} «{t.brand.name}» {t.brand.kind}. {t.footer.rights}
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-extrabold text-white transition hover:bg-white/20">
            <Icon name="up" className="h-4 w-4" />
            {t.footer.up}
          </a>
        </div>
      </div>
    </footer>
  );
}
