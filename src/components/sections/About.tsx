import type { Dictionary } from "@/content";
import { Rainbow, Sparkle, Star, Cloud } from "../decor/Shapes";
import { Icon, type IconName } from "../ui/Icon";
import { Section, SectionHeading } from "../ui/Section";

const factStyles = [
  "bg-sun-soft text-sun-deep",
  "bg-sky-soft text-sky-deep",
  "bg-leaf-soft text-leaf-deep",
  "bg-rose-soft text-rose-deep",
  "bg-peach-soft text-peach-deep",
  "bg-lilac-soft text-lilac",
];

const shapes = ["rounded-[1.4rem_1.4rem_1.4rem_0.5rem]", "rounded-[1.4rem_0.5rem_1.4rem_1.4rem]", "rounded-[0.5rem_1.4rem_1.4rem_1.4rem]"];

export function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section
      id="about"
      decor={
        <>
          <Rainbow className="absolute -top-2 -right-6 w-28 opacity-70 sm:w-36" />
          <Star className="absolute bottom-10 left-3 w-5 animate-sway" color="#4fbf73" />
          <Cloud className="absolute top-24 left-[-1.5rem] hidden w-24 opacity-90 md:block" />
        </>
      }
    >
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div>
          <SectionHeading id="about" eyebrow={t.eyebrow} title={t.title} tone="sun" align="left" />
          <div data-reveal className="space-y-3 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p className="font-bold text-ink">{t.lead}</p>
            <p>{t.text}</p>
          </div>

          <div data-reveal className="relative mt-6 overflow-hidden rounded-3xl bg-white p-5 shadow-soft ring-1 ring-sky/15">
            <Sparkle className="absolute top-3 right-3 w-4" color="#ffc83d" />
            <p className="text-xs font-extrabold tracking-wide text-sky-deep">{t.officialLabel}</p>
            <p className="mt-1.5 text-[0.92rem] leading-snug font-semibold text-ink">{t.officialName}</p>
            <div className="mt-4 flex items-center gap-3 border-t border-dashed border-sky/30 pt-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rose-soft text-rose-deep">
                <Icon name="user" className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold text-ink-soft">{t.headLabel}</p>
                <p className="font-extrabold text-ink">{t.headName}</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-4">
          {t.facts.map((f, i) => (
            <li
              key={f.label}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              className={`group flex flex-col gap-3 bg-white p-4 shadow-soft ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-pop sm:p-5 ${shapes[i % shapes.length]} ${
                i % 2 === 1 ? "sm:translate-y-4 sm:hover:translate-y-3" : ""
              }`}
            >
              <span className={`grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-300 group-hover:rotate-[-8deg] ${factStyles[i % factStyles.length]}`}>
                <Icon name={f.icon as IconName} className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xl leading-tight font-black text-ink sm:text-2xl">{f.value}</span>
                <span className="mt-0.5 block text-sm leading-snug font-bold text-ink-soft">{f.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
