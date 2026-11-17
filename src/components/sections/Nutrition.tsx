import type { Dictionary, Meal } from "@/content";
import { Apple, Bread, Carrot, Cucumber, Milk, Pear, Plate, Strawberry } from "../decor/Illustrations";
import { Heart, Sparkle } from "../decor/Shapes";
import { Icon, type IconName } from "../ui/Icon";
import { Section, SectionHeading } from "../ui/Section";

const cardStyles = [
  { icon: "bg-leaf text-white", bg: "bg-leaf-soft" },
  { icon: "bg-rose text-white", bg: "bg-rose-soft" },
  { icon: "bg-sky text-white", bg: "bg-sky-soft" },
];

/** Табақ пен айналасындағы жемістер композициясы */
function FoodPlate() {
  const items = [
    { C: Apple, cls: "top-[2%] left-[14%] w-[19%] animate-float" },
    { C: Carrot, cls: "top-[6%] right-[10%] w-[20%] animate-sway" },
    { C: Milk, cls: "top-[40%] right-[-2%] w-[13%] animate-float [animation-delay:-1.5s]" },
    { C: Strawberry, cls: "bottom-[6%] right-[14%] w-[16%] animate-sway [animation-delay:-2s]" },
    { C: Pear, cls: "bottom-[2%] left-[22%] w-[16%] animate-float [animation-delay:-3s]" },
    { C: Bread, cls: "top-[42%] left-[-3%] w-[19%] animate-float [animation-delay:-4s]" },
    { C: Cucumber, cls: "bottom-[26%] left-[2%] w-[16%] hidden sm:block animate-sway" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[17rem] sm:max-w-[22rem] lg:max-w-[26rem]">
      <div className="absolute inset-[16%] rounded-full bg-white shadow-pop ring-8 ring-peach-soft" />
      <div className="absolute inset-[22%] rounded-full border-[3px] border-dashed border-peach/40" />
      <Plate className="absolute top-1/2 left-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2" />
      <svg viewBox="0 0 20 80" aria-hidden className="absolute top-1/2 left-[9%] h-[30%] -translate-y-1/2">
        <path d="M5 4v18a5 5 0 0 0 10 0V4M10 4v18M10 27v49" stroke="#9aa6b8" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
      <svg viewBox="0 0 20 80" aria-hidden className="absolute top-1/2 right-[9%] h-[30%] -translate-y-1/2">
        <ellipse cx="10" cy="14" rx="7" ry="11" fill="#9aa6b8" />
        <path d="M10 25v51" stroke="#9aa6b8" strokeWidth="4" strokeLinecap="round" />
      </svg>
      {items.map(({ C, cls }, i) => (
        <C key={i} className={`absolute h-auto drop-shadow-[0_6px_8px_rgb(35_50_74/0.15)] ${cls}`} />
      ))}
      <Heart className="absolute top-[30%] left-[30%] w-[6%]" color="#ff6f9f" />
      <Sparkle className="absolute right-[30%] bottom-[28%] w-[6%]" color="#ffc83d" />
    </div>
  );
}

export function Nutrition({ t, menu }: { t: Dictionary["nutrition"]; menu: Meal[] }) {
  return (
    <Section
      id="nutrition"
      className="bg-[linear-gradient(180deg,transparent,#fff1e6cc_12%,#fff1e6cc_88%,transparent)]"
      decor={
        <>
          <Apple className="absolute top-10 right-[4%] hidden w-8 rotate-12 opacity-80 md:block" />
          <Carrot className="absolute bottom-12 left-[3%] hidden w-9 opacity-80 md:block" />
        </>
      }
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="order-2 lg:order-1" data-reveal>
          <FoodPlate />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading id="nutrition" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="rose" align="left" />

          <ul className="grid gap-3 sm:grid-cols-3">
            {t.cards.map((c, i) => {
              const s = cardStyles[i % cardStyles.length];
              return (
                <li
                  key={c.title}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                  className={`flex items-start gap-3 rounded-2xl p-4 sm:flex-col sm:gap-2.5 ${s.bg}`}
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${s.icon}`}>
                    <Icon name={c.icon as IconName} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-black text-ink">{c.title}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{c.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.6fr]">
        <div data-reveal className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5">
          <p className="flex items-center gap-2 font-black text-ink">
            <Sparkle className="w-4" color="#ff8a3d" />
            {t.habitsTitle}
          </p>
          <ol className="mt-3 space-y-2">
            {t.habits.map((h, i) => (
              <li key={h} className="flex items-center gap-3 text-[0.95rem] font-bold text-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sun text-sm font-black text-ink">{i + 1}</span>
                {h}
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
          {menu.length > 0 ? (
            <div className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5">
              <p className="font-black text-ink">{t.menuTitle}</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {menu.map((m) => (
                  <li key={m.title} className="rounded-2xl bg-cream p-3.5 ring-1 ring-peach/20">
                    <p className="flex items-baseline justify-between gap-2">
                      <span className="font-black text-ink">{m.title}</span>
                      {m.time && <span className="text-sm font-extrabold text-peach-deep">{m.time}</span>}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">{m.items.join(", ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex h-full items-center gap-4 rounded-3xl border-[3px] border-dashed border-peach/35 bg-white/60 p-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-peach-soft">
                <Plate className="w-12" />
              </span>
              <div>
                <p className="font-black text-ink">{t.menuEmptyTitle}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{t.menuEmptyText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
