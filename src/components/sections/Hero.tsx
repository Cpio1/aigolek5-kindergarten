import type { Dictionary } from "@/content";
import { KindergartenScene } from "../decor/Illustrations";
import { Cloud, Flower, Heart, Moon, Sparkle, Star } from "../decor/Shapes";
import { Icon } from "../ui/Icon";

const statStyles = [
  "bg-sun-soft text-sun-deep ring-sun/30",
  "bg-sky-soft text-sky-deep ring-sky/30",
  "bg-leaf-soft text-leaf-deep ring-leaf/30",
  "bg-rose-soft text-rose-deep ring-rose/30",
];

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative isolate overflow-hidden pt-[var(--header-h)]"
    >
      {/* фон */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_30%,#e1f3fd_0%,transparent_70%),radial-gradient(50%_45%_at_10%_80%,#fff3c9_0%,transparent_70%),radial-gradient(40%_40%_at_50%_100%,#ffe6ef_0%,transparent_70%)]" />
        <Cloud className="absolute top-[18%] left-[3%] w-16 animate-drift opacity-90 sm:w-24" />
        <Cloud className="absolute top-[10%] right-[38%] hidden w-20 animate-drift opacity-80 [animation-delay:-8s] lg:block" />
        <Star className="absolute top-[14%] right-[6%] w-5 animate-sway sm:w-6" color="#ff8a3d" />
        <Sparkle className="absolute bottom-[12%] left-[46%] hidden w-5 animate-float lg:block" color="#8f7cf0" />
        <Heart className="absolute bottom-[8%] left-[4%] hidden w-6 animate-float sm:block" color="#ff6f9f" />
        <Moon className="absolute top-[56%] right-[2%] hidden w-6 animate-sway md:block" />
        <Flower className="absolute bottom-[6%] right-[8%] hidden w-7 animate-spin-slow md:block" petal="#4fbf73" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-x-10 gap-y-4 px-4 pt-4 pb-8 sm:gap-y-5 sm:px-6 sm:pt-8 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-10">
        {/* мәтін */}
        <div className="text-center lg:text-left">
          <span data-reveal className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-extrabold text-peach-deep shadow-soft ring-1 ring-peach/20">
            <Star className="h-4 w-4" color="#ff8a3d" />
            {t.badge}
          </span>

          <h1 id="home-title" data-reveal className="mt-3 font-black tracking-tight text-ink sm:mt-4" style={{ ["--reveal-delay" as string]: "60ms" }}>
            <span className="block text-[2.3rem] leading-[1.05] min-[400px]:text-[2.6rem] sm:text-6xl lg:text-[4.2rem]">
              <span className="text-peach">№5</span>{" "}
              <span className="bg-[linear-gradient(transparent_62%,#ffe08a_62%)] px-1">«Айгөлек»</span>
            </span>
            <span className="mt-1 block text-[1.45rem] leading-tight min-[400px]:text-[1.65rem] text-sky-deep sm:text-4xl lg:text-[2.6rem]">{t.titleBottom}</span>
          </h1>

          <p data-reveal className="mt-2 text-lg font-extrabold text-rose-deep sm:mt-3 sm:text-2xl" style={{ ["--reveal-delay" as string]: "120ms" }}>
            {t.subtitle}
          </p>

          <p data-reveal className="mx-auto mt-2 max-w-xl text-[0.92rem] leading-snug sm:mt-3 sm:text-lg sm:leading-relaxed text-ink-soft lg:mx-0" style={{ ["--reveal-delay" as string]: "160ms" }}>
            {t.text}
          </p>

          <div data-reveal className="mt-6 hidden flex-wrap gap-3 lg:flex" style={{ ["--reveal-delay" as string]: "200ms" }}>
            <CtaButtons t={t} />
          </div>

          <ul data-reveal className="mt-8 hidden grid-cols-4 gap-3 lg:grid" style={{ ["--reveal-delay" as string]: "240ms" }}>
            <Stats t={t} />
          </ul>
        </div>

        {/* иллюстрация */}
        <div data-reveal className="relative mx-auto w-full max-w-[15rem] [@media(max-height:720px)]:max-w-[12rem] sm:max-w-md sm:[@media(max-height:720px)]:max-w-sm lg:max-w-[33rem]" style={{ ["--reveal-delay" as string]: "120ms" }}>
          <KindergartenScene className="h-auto w-full drop-shadow-[0_18px_30px_rgb(35_50_74/0.12)]" />
        </div>

        {/* мобильді көрсеткіштер мен батырмалар */}
        <div className="lg:hidden">
          <ul className="grid grid-cols-4 gap-2 sm:gap-3">
            <Stats t={t} />
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mx-auto sm:max-w-md">
            <CtaButtons t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats({ t }: { t: Dictionary["hero"] }) {
  return (
    <>
      {t.stats.map((s, i) => (
        <li
          key={s.label}
          className={`flex min-w-0 flex-col items-center justify-center rounded-2xl px-1 py-2.5 text-center shadow-soft ring-1 sm:py-3.5 ${statStyles[i]}`}
        >
          <span className="text-xl leading-none font-black sm:text-3xl">{s.value}</span>
          <span className="mt-1 text-[0.7rem] leading-tight font-extrabold text-ink-soft sm:text-sm">{s.label}</span>
        </li>
      ))}
    </>
  );
}

function CtaButtons({ t }: { t: Dictionary["hero"] }) {
  return (
    <>
      <a
        href="#about"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-peach px-6 text-base font-extrabold text-white shadow-pop transition hover:-translate-y-0.5 hover:bg-peach-deep active:scale-[0.98]"
      >
        {t.ctaPrimary}
        <Icon name="arrow" className="h-5 w-5" />
      </a>
      <a
        href="#contacts"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-extrabold text-ink shadow-soft ring-2 ring-sky/40 transition hover:-translate-y-0.5 hover:ring-sky active:scale-[0.98]"
      >
        <Icon name="pin" className="h-5 w-5 text-sky-deep" />
        {t.ctaSecondary}
      </a>
    </>
  );
}
