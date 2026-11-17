import type { Dictionary } from "@/content";
import { Cloud, Sparkle, Squiggle, Star } from "../decor/Shapes";
import { Icon, type IconName } from "../ui/Icon";
import { Section, SectionHeading } from "../ui/Section";

const styles = [
  { icon: "bg-rose text-white", card: "hover:ring-rose/40", shape: "rounded-full" },
  { icon: "bg-sun text-ink", card: "hover:ring-sun/50", shape: "rounded-[1.1rem] rotate-6" },
  { icon: "bg-lilac text-white", card: "hover:ring-lilac/40", shape: "rounded-[40%_60%_55%_45%/55%_45%_60%_40%]" },
  { icon: "bg-leaf text-white", card: "hover:ring-leaf/40", shape: "rounded-[1.1rem] -rotate-6" },
  { icon: "bg-sky text-white", card: "hover:ring-sky/40", shape: "rounded-[60%_40%_45%_55%/45%_55%_40%_60%]" },
];

const chipStyles = ["bg-sun-soft", "bg-sky-soft", "bg-leaf-soft", "bg-rose-soft"];

export function Education({ t }: { t: Dictionary["education"] }) {
  return (
    <Section
      id="education"
      decor={
        <>
          <Cloud className="absolute top-8 right-[6%] w-20 animate-drift opacity-90 sm:w-24" />
          <Squiggle className="absolute bottom-12 left-[5%] hidden w-16 md:block" color="#ff8a3d" />
          <Star className="absolute top-1/2 left-3 w-4 animate-sway" color="#43b3ee" />
        </>
      }
    >
      <SectionHeading id="education" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="leaf" />

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {t.areas.map((a, i) => {
          const s = styles[i % styles.length];
          return (
            <li
              key={a.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              className={`group flex flex-col items-center rounded-3xl bg-white p-4 text-center shadow-soft ring-2 ring-transparent transition duration-300 hover:-translate-y-1.5 sm:p-5 ${s.card} ${
                i === t.areas.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span
                className={`grid h-14 w-14 place-items-center shadow-soft transition-transform duration-300 group-hover:scale-110 ${s.icon} ${s.shape}`}
              >
                <Icon name={a.icon as IconName} className="h-7 w-7" />
              </span>
              <h3 className="mt-3 text-base leading-tight font-black text-ink sm:text-lg">{a.title}</h3>
              <p className="mt-1.5 text-[0.85rem] leading-snug text-ink-soft sm:text-sm">{a.text}</p>
            </li>
          );
        })}
      </ul>

      <div data-reveal className="mt-8 flex flex-col items-center gap-3 rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-ink/5 sm:flex-row sm:justify-center sm:gap-4 sm:p-5">
        <p className="flex items-center gap-2 text-sm font-black text-ink">
          <Sparkle className="w-4" color="#ff6f9f" />
          {t.principlesTitle}
        </p>
        <ul className="flex flex-wrap justify-center gap-2">
          {t.principles.map((p, i) => (
            <li key={p} className={`rounded-full px-3.5 py-1.5 text-sm font-extrabold text-ink ${chipStyles[i % chipStyles.length]}`}>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
