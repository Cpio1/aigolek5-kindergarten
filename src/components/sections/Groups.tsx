import type { Dictionary } from "@/content";
import { Balloon, Flower, Heart, Sparkle, Star } from "../decor/Shapes";
import { Icon } from "../ui/Icon";
import { Section, SectionHeading } from "../ui/Section";

/** «Бөбек» тобына: сылдырмақ пен текшелер */
function BabyArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" aria-hidden className={className}>
      <rect x="8" y="58" width="40" height="40" rx="8" fill="#ffc83d" />
      <text x="28" y="86" textAnchor="middle" fontSize="24" fontWeight="900" fill="#fff" fontFamily="inherit">Ә</text>
      <rect x="52" y="58" width="40" height="40" rx="8" fill="#ff6f9f" />
      <text x="72" y="86" textAnchor="middle" fontSize="24" fontWeight="900" fill="#fff" fontFamily="inherit">Ө</text>
      <rect x="30" y="16" width="40" height="40" rx="8" fill="#43b3ee" transform="rotate(-8 50 36)" />
      <text x="50" y="44" textAnchor="middle" fontSize="24" fontWeight="900" fill="#fff" fontFamily="inherit" transform="rotate(-8 50 36)">Ү</text>
      <g transform="rotate(24 112 56)">
        <rect x="108" y="58" width="8" height="40" rx="4" fill="#8f7cf0" />
        <circle cx="112" cy="40" r="20" fill="#ffe6ef" stroke="#ff6f9f" strokeWidth="5" />
        <circle cx="105" cy="36" r="3.5" fill="#ff6f9f" />
        <circle cx="118" cy="44" r="3.5" fill="#43b3ee" />
        <circle cx="114" cy="31" r="3" fill="#ffc83d" />
      </g>
    </svg>
  );
}

/** «Балапан» тобына: балапан */
function ChickArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 110" aria-hidden className={className}>
      <ellipse cx="70" cy="102" rx="46" ry="6" fill="#2e9a52" opacity=".15" />
      <path d="M48 36c0-14 10-24 24-24s24 10 24 24c10 4 18 14 18 28 0 20-18 34-42 34S30 84 30 64c0-14 8-24 18-28Z" fill="#ffd23f" />
      <path d="M68 12c-2-6 2-10 6-10-2 4 2 6 0 10" fill="#ff8a3d" />
      <path d="M42 66c-10-2-16 4-18 10 8 2 14 0 18-10ZM98 66c10-2 16 4 18 10-8 2-14 0-18-10Z" fill="#f5b800" />
      <circle cx="61" cy="38" r="4.5" fill="#23324a" />
      <circle cx="83" cy="38" r="4.5" fill="#23324a" />
      <circle cx="62.5" cy="36.5" r="1.4" fill="#fff" />
      <circle cx="84.5" cy="36.5" r="1.4" fill="#fff" />
      <path d="M66 46h12l-6 8Z" fill="#ff8a3d" strokeLinejoin="round" />
      <circle cx="54" cy="50" r="5" fill="#ff9bbd" opacity=".7" />
      <circle cx="90" cy="50" r="5" fill="#ff9bbd" opacity=".7" />
      <path d="M60 98v6M56 104h8M82 98v6M78 104h8" stroke="#ff8a3d" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

const themes = [
  {
    card: "bg-[linear-gradient(160deg,#e1f3fd_0%,#ffffff_55%)] ring-sky/25",
    shape: "rounded-[2rem_2rem_2rem_0.75rem]",
    badge: "bg-sky text-white",
    accent: "text-sky-deep",
    bullet: "bg-sky-soft text-sky-deep",
    art: "bg-white/80",
  },
  {
    card: "bg-[linear-gradient(160deg,#fff3c9_0%,#ffffff_55%)] ring-sun/30",
    shape: "rounded-[2rem_2rem_0.75rem_2rem]",
    badge: "bg-peach text-white",
    accent: "text-peach-deep",
    bullet: "bg-leaf-soft text-leaf-deep",
    art: "bg-white/80",
  },
];

export function Groups({ t }: { t: Dictionary["groups"] }) {
  return (
    <Section
      id="groups"
      className="bg-[linear-gradient(180deg,transparent,#ffffffb3_15%,#ffffffb3_85%,transparent)]"
      decor={
        <>
          <Balloon className="absolute top-10 left-[4%] hidden w-8 animate-float md:block" color="#43b3ee" />
          <Balloon className="absolute top-16 right-[5%] hidden w-7 animate-float [animation-delay:-2s] md:block" color="#ff8a3d" />
          <Heart className="absolute bottom-8 right-6 w-5 animate-sway" />
          <Flower className="absolute bottom-10 left-6 w-6 animate-spin-slow" petal="#8f7cf0" />
        </>
      }
    >
      <SectionHeading id="groups" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="peach" />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {t.items.map((g, i) => {
          const th = themes[i % themes.length];
          return (
            <article
              key={g.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              aria-labelledby={`group-${g.id}`}
              className={`group relative overflow-hidden p-5 shadow-soft ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-pop sm:p-7 ${th.card} ${th.shape}`}
            >
              {i === 0 ? (
                <Star className="absolute top-4 right-28 w-4 animate-sway sm:right-36" color="#ffc83d" />
              ) : (
                <Sparkle className="absolute top-4 right-28 w-4 sm:right-36" color="#4fbf73" />
              )}

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className={`inline-flex items-baseline gap-1 rounded-full px-3 py-1 text-sm font-black ${th.badge}`}>
                    <span className="text-lg leading-none">{g.age}</span> {t.ageSuffix}
                  </span>
                  <h3 id={`group-${g.id}`} className="mt-3 text-2xl leading-tight font-black text-ink sm:text-[1.9rem]">
                    {g.name} <span className={`font-extrabold ${th.accent}`}>{g.type}</span>
                  </h3>
                  <p className="mt-1 text-sm font-bold text-ink-soft sm:text-base">{g.subtitle}</p>
                </div>
                <div className={`shrink-0 rounded-3xl p-2 shadow-soft transition-transform duration-500 group-hover:rotate-[-4deg] ${th.art}`}>
                  {i === 0 ? <BabyArt className="h-20 w-24 sm:h-24 sm:w-28" /> : <ChickArt className="h-20 w-24 sm:h-24 sm:w-28" />}
                </div>
              </div>

              <p className="mt-4 text-[0.97rem] leading-relaxed text-ink-soft">{g.text}</p>

              <p className={`mt-5 text-sm font-black ${th.accent}`}>{t.focusTitle}</p>
              <ul className="mt-2.5 grid gap-2 sm:grid-cols-1">
                {g.focus.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.95rem] font-bold text-ink">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${th.bullet}`}>
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p data-reveal className="mt-6 text-center text-sm font-semibold text-ink-soft/80">{t.note}</p>
    </Section>
  );
}
