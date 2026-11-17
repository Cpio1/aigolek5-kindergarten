"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../ui/Icon";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    mapgl?: any;
  }
}

/**
 * 2GIS интерактивті картасы.
 * 1) firmId берілсе — 2GIS ресми виджеті (кілтсіз) көрсетіледі.
 * 2) apiKey берілсе — 2GIS MapGL JS API арқылы маркері бар карта.
 * 3) Екеуі де жоқ болса — мекенжай мен «2GIS-те ашу» батырмасы бар безендірілген карточка.
 */

const MAPGL_SRC = "https://mapgl.2gis.com/api/js/v1";
let mapglPromise: Promise<void> | null = null;

function loadMapgl(): Promise<void> {
  if (window.mapgl) return Promise.resolve();
  if (mapglPromise) return mapglPromise;
  mapglPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = MAPGL_SRC;
    s.async = true;
    s.onload = () => (window.mapgl ? resolve() : reject(new Error("mapgl")));
    s.onerror = () => {
      mapglPromise = null;
      reject(new Error("mapgl"));
    };
    document.head.appendChild(s);
  });
  return mapglPromise;
}

type Props = {
  lat: number;
  lon: number;
  zoom: number;
  apiKey?: string | null;
  firmId?: string | null;
  title: string;
  placeLabel: string;
  loadingLabel: string;
  errorLabel: string;
  openLabel: string;
  openHref: string;
};

const frame =
  "relative h-full min-h-[16rem] overflow-hidden rounded-3xl bg-sky-soft shadow-soft ring-4 ring-white sm:min-h-[20rem]";

export function TwoGisMap(props: Props) {
  const { firmId, apiKey } = props;

  if (firmId) {
    const options = encodeURIComponent(
      JSON.stringify({ pos: { lat: props.lat, lon: props.lon, zoom: props.zoom }, opt: { city: "aktobe" }, org: firmId }),
    );
    return (
      <div className={frame}>
        <iframe
          title={props.title}
          src={`https://widgets.2gis.com/widget?type=firmsonmap&options=${options}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  if (apiKey) return <MapglMap {...props} apiKey={apiKey} />;

  return <StaticLocation {...props} />;
}

function MapglMap({ lat, lon, zoom, apiKey, title, loadingLabel, errorLabel, openLabel, openHref }: Props & { apiKey: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "ready" | "error">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let map: any;
    let cancelled = false;

    const init = () =>
      loadMapgl()
        .then(() => {
          if (cancelled || !ref.current) return;
          map = new window.mapgl.Map(ref.current, {
            center: [lon, lat],
            zoom,
            key: apiKey,
            zoomControl: "topLeft",
            cooperativeGestures: true,
          });
          new window.mapgl.Marker(map, { coordinates: [lon, lat] });
          setState("ready");
        })
        .catch(() => !cancelled && setState("error"));

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          init();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      map?.destroy?.();
    };
  }, [lat, lon, zoom, apiKey]);

  return (
    <div className={frame}>
      <div ref={ref} role="region" aria-label={title} className="absolute inset-0 z-0" />
      {state !== "ready" && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-[radial-gradient(circle_at_50%_40%,#fff_0%,#e1f3fd_70%)] p-6 text-center">
          <div>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-rose shadow-soft">
              <Icon name="pin" className={`h-7 w-7 ${state === "idle" ? "animate-bounce" : ""}`} />
            </span>
            <p className="mt-3 text-sm font-extrabold text-ink">{state === "idle" ? loadingLabel : errorLabel}</p>
            {state === "error" && <OpenButton href={openHref} label={openLabel} />}
          </div>
        </div>
      )}
    </div>
  );
}

function OpenButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-leaf px-5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf-deep"
    >
      <Icon name="map" className="h-4 w-4" />
      {label}
    </a>
  );
}

/** Кілт пен firmId жоқ кезде: безендірілген орналасу карточкасы (нақты карта емес) */
function StaticLocation({ title, placeLabel, openLabel, openHref }: Props) {
  return (
    <div className={frame}>
      <svg aria-hidden viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <rect width="400" height="300" fill="#eef7e9" />
        <path d="M-10 220C80 180 120 240 210 200s150-60 210-30v140H-10Z" fill="#d9efce" />
        <circle cx="70" cy="70" r="40" fill="#d9efce" />
        <circle cx="340" cy="60" r="30" fill="#d9efce" />
        <path d="M-10 150h420M200-10v320" stroke="#fff" strokeWidth="16" />
        <path d="M-10 150h420M200-10v320" stroke="#ffe7a6" strokeWidth="3" strokeDasharray="10 10" />
        <path d="M60 -10 140 310M300 -10l40 320" stroke="#fff" strokeWidth="8" opacity=".9" />
        <rect x="216" y="104" width="44" height="30" rx="6" fill="#fff" />
        <path d="M212 108l26-16 26 16Z" fill="#ff8a3d" />
      </svg>
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center p-6 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-rose shadow-pop">
          <Icon name="pin" className="h-7 w-7 animate-bounce" />
        </span>
        <p className="mt-3 rounded-2xl bg-white/90 px-4 py-2 text-sm font-extrabold text-ink shadow-soft backdrop-blur">
          <span className="sr-only">{title}. </span>
          {placeLabel}
        </p>
        <OpenButton href={openHref} label={openLabel} />
      </div>
    </div>
  );
}
