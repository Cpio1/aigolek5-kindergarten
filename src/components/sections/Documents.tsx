import type { Dictionary, DocumentCategory, SiteDocument } from "@/content";
import { site } from "@/content";
import { Sparkle, Star } from "../decor/Shapes";
import { Icon, type IconName } from "../ui/Icon";
import { Section, SectionHeading } from "../ui/Section";

const categoryMeta: Record<DocumentCategory, { icon: IconName; tone: string; ring: string }> = {
  organization: { icon: "folder", tone: "bg-sky-soft text-sky-deep", ring: "ring-sky/20" },
  certificates: { icon: "badge", tone: "bg-sun-soft text-sun-deep", ring: "ring-sun/30" },
  notices: { icon: "bell", tone: "bg-leaf-soft text-leaf-deep", ring: "ring-leaf/20" },
};

export function Documents({
  t,
  about,
  contacts,
  docs,
}: {
  t: Dictionary["documents"];
  about: Dictionary["about"];
  contacts: Dictionary["contacts"];
  docs: SiteDocument[];
}) {
  const rows: { label: string; value: string; mono?: boolean }[] = [
    { label: t.requisites.name, value: about.officialName },
    { label: t.requisites.bin, value: site.bin, mono: true },
    { label: t.requisites.address, value: contacts.address },
    { label: t.requisites.head, value: about.headName },
    { label: t.requisites.founded, value: String(site.foundedYear) },
  ];
  const categories = Object.keys(t.categories) as DocumentCategory[];

  return (
    <Section
      id="documents"
      className="bg-[linear-gradient(180deg,transparent,#ffffffb3_15%,#ffffffb3_85%,transparent)]"
      decor={<Star className="absolute top-14 right-[6%] w-5 animate-sway" color="#43b3ee" />}
    >
      <SectionHeading id="documents" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="sky" />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
        {/* Деректемелер */}
        <div data-reveal className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-soft ring-1 ring-sky/15 sm:p-6">
          <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#ff6f9f,#ff8a3d,#ffc83d,#4fbf73,#43b3ee)]" />
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky text-white">
              <Icon name="id" className="h-6 w-6" />
            </span>
            <h3 className="text-xl font-black text-ink">{t.requisitesTitle}</h3>
            <Sparkle className="ml-auto w-5" color="#ffc83d" />
          </div>
          <dl className="mt-4 divide-y divide-dashed divide-ink/10">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-0.5 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                <dt className="text-sm font-extrabold text-ink-soft">{r.label}</dt>
                <dd className={`text-[0.95rem] leading-snug font-bold text-ink ${r.mono ? "tracking-wider tabular-nums" : ""}`}>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Құжат санаттары */}
        <ul className="grid gap-4">
          {categories.map((cat, i) => {
            const meta = categoryMeta[cat];
            const c = t.categories[cat];
            const list = docs.filter((d) => d.category === cat);
            return (
              <li
                key={cat}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                className={`rounded-3xl bg-white p-4 shadow-soft ring-1 sm:p-5 ${meta.ring}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${meta.tone}`}>
                    <Icon name={meta.icon} className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-black text-ink">{c.title}</h3>
                    <p className="text-sm leading-snug text-ink-soft">{c.text}</p>
                  </div>
                </div>

                {list.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {list.map((d) => (
                      <DocRow key={d.title} doc={d} t={t} />
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 flex items-center gap-2 rounded-2xl border-2 border-dashed border-ink/10 px-3 py-2.5 text-sm font-bold text-ink-soft">
                    <Icon name="file" className="h-4 w-4 shrink-0" />
                    {t.emptyDoc}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

function DocRow({ doc, t }: { doc: SiteDocument; t: Dictionary["documents"] }) {
  const meta = [doc.date, doc.size].filter(Boolean).join(" · ");
  return (
    <li className="flex flex-col gap-2 rounded-2xl bg-cream px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
      <span className="flex min-w-0 items-center gap-2">
        <Icon name="file" className="h-5 w-5 shrink-0 text-peach" />
        <span className="min-w-0">
          <span className="block text-sm font-extrabold text-ink">{doc.title}</span>
          {meta && <span className="block text-xs font-semibold text-ink-soft">{meta}</span>}
        </span>
      </span>
      {doc.file ? (
        <span className="flex shrink-0 gap-2">
          <a
            href={doc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-white px-3.5 text-sm font-extrabold text-sky-deep ring-1 ring-sky/30 transition hover:bg-sky-soft"
          >
            <Icon name="eye" className="h-4 w-4" />
            {t.view}
          </a>
          <a
            href={doc.file}
            download
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-sky px-3.5 text-sm font-extrabold text-white transition hover:bg-sky-deep"
          >
            <Icon name="download" className="h-4 w-4" />
            {t.download}
          </a>
        </span>
      ) : (
        <span className="text-xs font-bold text-ink-soft">{t.emptyDoc}</span>
      )}
    </li>
  );
}
