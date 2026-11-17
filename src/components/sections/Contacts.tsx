import type { Dictionary } from "@/content";
import { site, twoGisLink } from "@/content";
import { Balloon, Cloud, Heart } from "../decor/Shapes";
import { CopyButton } from "../ui/CopyButton";
import { Icon, type IconName } from "../ui/Icon";
import { Section, SectionHeading } from "../ui/Section";
import { TwoGisMap } from "./TwoGisMap";

export function Contacts({ t, about }: { t: Dictionary["contacts"]; about: Dictionary["about"] }) {
  const items: { icon: IconName; label: string; value: string; href?: string; tone: string }[] = [
    { icon: "pin", label: t.addressLabel, value: t.address, tone: "bg-rose-soft text-rose-deep" },
    { icon: "phone", label: t.phoneLabel, value: site.phone.display, href: site.phone.href, tone: "bg-leaf-soft text-leaf-deep" },
    { icon: "user", label: t.headLabel, value: about.headName, tone: "bg-sky-soft text-sky-deep" },
    { icon: "week", label: t.scheduleLabel, value: t.schedule, tone: "bg-sun-soft text-sun-deep" },
  ];

  const btn =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-3 py-2 text-center text-sm leading-tight font-extrabold transition sm:px-5 sm:text-[0.95rem] hover:-translate-y-0.5 active:scale-[0.98]";

  return (
    <Section
      id="contacts"
      decor={
        <>
          <Cloud className="absolute top-10 left-[3%] w-20 animate-drift opacity-90" />
          <Balloon className="absolute top-16 right-[4%] hidden w-8 animate-float md:block" color="#ffc83d" />
          <Heart className="absolute bottom-8 left-[46%] w-5 animate-sway" color="#ff8a3d" />
        </>
      }
    >
      <SectionHeading id="contacts" eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="rose" />

      <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:gap-6">
        <div data-reveal className="flex flex-col gap-4">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((it, i) => (
              <li
                key={it.label}
                className={`flex items-start gap-3 rounded-3xl bg-white p-4 shadow-soft ring-1 ring-ink/5 ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${it.tone}`}>
                  <Icon name={it.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-extrabold text-ink-soft">{it.label}</span>
                  {it.href ? (
                    <a href={it.href} className="mt-0.5 block text-lg font-black whitespace-nowrap text-ink hover:text-leaf-deep">
                      {it.value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block text-[0.95rem] leading-snug font-bold text-ink">{it.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a href={site.phone.href} className={`${btn} col-span-2 bg-leaf text-white shadow-pop hover:bg-leaf-deep sm:col-span-1`}>
              <Icon name="phone" className="h-5 w-5" />
              {t.call}
            </a>
            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn} col-span-2 bg-[#25d366] text-white shadow-soft sm:col-span-1`}
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                {t.whatsapp}
              </a>
            )}
            <a href={twoGisLink} target="_blank" rel="noopener noreferrer" className={`${btn} bg-white text-ink shadow-soft ring-2 ring-sky/40 hover:ring-sky`}>
              <Icon name="map" className="h-5 w-5 text-sky-deep" />
              {t.openMap}
            </a>
            <CopyButton
              text={t.address}
              label={t.copy}
              done={t.copied}
              className={`${btn} bg-white text-ink shadow-soft ring-2 ring-sun/50 hover:ring-sun`}
            />
          </div>
        </div>

        <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }} className="h-72 sm:h-80 lg:h-auto">
          <TwoGisMap
            lat={site.geo.lat}
            lon={site.geo.lon}
            zoom={site.geo.zoom}
            title={t.mapTitle}
            apiKey={site.twoGis.apiKey}
            firmId={site.twoGis.firmId}
            placeLabel={t.addressShort}
            loadingLabel={t.mapLoading}
            errorLabel={t.mapError}
            openLabel={t.openMap}
            openHref={twoGisLink}
          />
        </div>
      </div>
    </Section>
  );
}
