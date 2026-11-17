import type { SVGProps } from "react";
import { Balloon, Cloud, Flower, Sun, Sparkle } from "./Shapes";

type P = SVGProps<SVGSVGElement>;
const base = { "aria-hidden": true, focusable: false } as const;

/** Логотип: гүл ішіндегі ай — «Айгөлек» */
export function Logo(props: P) {
  const petals = ["#ff6f9f", "#ff8a3d", "#ffc83d", "#4fbf73", "#43b3ee", "#8f7cf0"];
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      {petals.map((c, i) => (
        <ellipse key={c} cx="32" cy="14" rx="9.5" ry="13" fill={c} transform={`rotate(${i * 60} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="13" fill="#fff" />
      <path d="M36 23.5a9 9 0 1 0 5 16.2 7.4 7.4 0 0 1-5-16.2Z" fill="#ffc83d" />
    </svg>
  );
}

/** Бірінші экрандағы басты композиция: бір қабатты балабақша ғимараты */
export function KindergartenScene(props: P) {
  const arcs = ["#ff6f9f", "#ff8a3d", "#ffc83d", "#4fbf73", "#43b3ee"];
  return (
    <svg viewBox="0 0 520 420" {...base} {...props}>
      <circle cx="260" cy="225" r="190" fill="#e1f3fd" />
      {arcs.map((c, i) => {
        const r = 176 - i * 14;
        return (
          <path
            key={c}
            d={`M${260 - r} 300a${r} ${r} 0 0 1 ${r * 2} 0`}
            fill="none"
            stroke={c}
            strokeWidth="12"
            strokeLinecap="round"
            opacity=".9"
          />
        );
      })}

      <Cloud x="34" y="70" width="110" height="60" />
      <Cloud x="300" y="118" width="80" height="44" />
      <Sun x="392" y="22" width="104" height="104" />

      {/* жер */}
      <path d="M20 338c80-34 170-40 240-36s160 12 240 36v42c-80 26-160 30-240 30S90 404 20 380Z" fill="#8fd6a2" />
      <path d="M20 356c90-22 170-24 240-22s150 6 240 22v28c-80 22-160 26-240 26S90 402 20 384Z" fill="#6cc98a" />

      {/* ағаш */}
      <rect x="68" y="262" width="12" height="70" rx="5" fill="#b07a4f" />
      <circle cx="74" cy="244" r="34" fill="#4fbf73" />
      <circle cx="56" cy="262" r="20" fill="#5ccb80" />
      <circle cx="94" cy="258" r="22" fill="#45b067" />
      <circle cx="64" cy="238" r="4" fill="#ff6f9f" />
      <circle cx="88" cy="250" r="4" fill="#ff6f9f" />
      <circle cx="76" cy="226" r="4" fill="#ff6f9f" />

      {/* ғимарат */}
      <rect x="138" y="222" width="244" height="112" rx="12" fill="#fff" />
      <rect x="138" y="316" width="244" height="18" rx="6" fill="#ffe7a6" />
      <path d="M122 230 260 152l138 78Z" fill="#ff8a3d" stroke="#ff8a3d" strokeWidth="10" strokeLinejoin="round" />
      <path d="M140 232h240" stroke="#e2661a" strokeWidth="6" strokeLinecap="round" opacity=".35" />
      <circle cx="260" cy="198" r="20" fill="#fff" />
      <text x="260" y="205" textAnchor="middle" fontSize="18" fontWeight="900" fill="#e2661a" fontFamily="inherit">
        №5
      </text>

      {/* терезелер */}
      {[156, 318].map((x) => (
        <g key={x}>
          <rect x={x} y="248" width="48" height="42" rx="9" fill="#43b3ee" />
          <path d={`M${x + 24} 248v42M${x} 269h48`} stroke="#fff" strokeWidth="4" />
          <rect x={x - 4} y="290" width="56" height="10" rx="5" fill="#4fbf73" />
          <circle cx={x + 10} cy="288" r="5" fill="#ff6f9f" />
          <circle cx={x + 24} cy="286" r="5" fill="#ffc83d" />
          <circle cx={x + 38} cy="288" r="5" fill="#ff6f9f" />
        </g>
      ))}

      {/* маңдайша */}
      <rect x="212" y="236" width="96" height="24" rx="12" fill="#ffc83d" />
      <text x="260" y="253" textAnchor="middle" fontSize="14" fontWeight="900" fill="#23324a" fontFamily="inherit">
        Айгөлек
      </text>

      {/* есік */}
      <path d="M236 334v-50a24 24 0 0 1 48 0v50Z" fill="#ff6f9f" />
      <circle cx="274" cy="306" r="3.5" fill="#fff" />

      {/* гүлдер */}
      <Flower x="402" y="318" width="26" height="26" petal="#ff6f9f" />
      <Flower x="436" y="332" width="20" height="20" petal="#8f7cf0" />
      <Flower x="108" y="330" width="22" height="22" petal="#ff8a3d" />
      <Flower x="40" y="342" width="18" height="18" petal="#43b3ee" />

      {/* шарлар */}
      <g className="animate-float-slow" style={{ transformBox: "fill-box" }}>
        <Balloon x="404" y="160" width="40" height="84" color="#ff6f9f" />
        <Balloon x="436" y="182" width="36" height="74" color="#43b3ee" />
        <Balloon x="420" y="196" width="32" height="66" color="#ffc83d" />
      </g>

      <Sparkle x="182" y="104" width="20" height="20" color="#ffc83d" />
      <Sparkle x="350" y="80" width="14" height="14" color="#ff6f9f" />
      <Sparkle x="110" y="160" width="14" height="14" color="#8f7cf0" />
    </svg>
  );
}

/* ───── Тамақ иллюстрациялары ───── */

export function Apple(props: P) {
  return (
    <svg viewBox="0 0 60 64" {...base} {...props}>
      <path d="M30 16c-6-6-26-4-24 18s14 28 24 24c10 4 22-2 24-24S36 10 30 16Z" fill="#ff5d6c" />
      <path d="M30 16c0-6 2-10 6-12" fill="none" stroke="#8a5a3c" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M33 10c6-6 14-4 16-2-4 6-12 6-16 2Z" fill="#4fbf73" />
      <ellipse cx="17" cy="28" rx="3.5" ry="7" fill="#fff" opacity=".45" />
    </svg>
  );
}

export function Carrot(props: P) {
  return (
    <svg viewBox="0 0 60 64" {...base} {...props}>
      <path d="M38 22 12 56c-2 3 1 6 4 4l34-26Z" fill="#ff8a3d" />
      <path d="M22 44l5 4M28 36l5 4M17 51l3 2" stroke="#e2661a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 24c-2-10 2-16 6-18 0 8-2 12-6 18ZM42 26c8-4 14-2 16 2-6 2-10 2-16-2ZM40 24c-8-4-8-10-6-14 4 4 6 8 6 14Z" fill="#4fbf73" />
    </svg>
  );
}

export function Pear(props: P) {
  return (
    <svg viewBox="0 0 56 68" {...base} {...props}>
      <path d="M28 14c-6 0-8 6-8 12 0 6-12 12-12 24 0 10 10 16 20 16s20-6 20-16c0-12-12-18-12-24 0-6-2-12-8-12Z" fill="#b8dc4a" />
      <path d="M28 14c0-4 1-8 4-10" fill="none" stroke="#8a5a3c" strokeWidth="3" strokeLinecap="round" />
      <path d="M31 9c4-4 10-3 12-1-4 4-9 4-12 1Z" fill="#4fbf73" />
      <ellipse cx="18" cy="44" rx="3" ry="6" fill="#fff" opacity=".45" />
    </svg>
  );
}

export function Plate(props: P) {
  return (
    <svg viewBox="0 0 120 80" {...base} {...props}>
      <ellipse cx="60" cy="44" rx="56" ry="32" fill="#fff" stroke="#d7ecfb" strokeWidth="3" />
      <ellipse cx="60" cy="44" rx="38" ry="20" fill="#f3fafe" />
      <circle cx="46" cy="40" r="9" fill="#4fbf73" />
      <circle cx="62" cy="36" r="8" fill="#ffc83d" />
      <circle cx="74" cy="46" r="9" fill="#ff5d6c" />
      <circle cx="56" cy="50" r="6" fill="#ff8a3d" />
    </svg>
  );
}

export function Milk(props: P) {
  return (
    <svg viewBox="0 0 44 64" {...base} {...props}>
      <path d="M8 10h28l-3 48a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4Z" fill="#fff" stroke="#bfe3f8" strokeWidth="3" />
      <path d="M10 26h24l-1.6 31a3 3 0 0 1-3 3H14.6a3 3 0 0 1-3-3Z" fill="#e1f3fd" />
      <rect x="6" y="6" width="32" height="6" rx="3" fill="#43b3ee" />
    </svg>
  );
}

export function Bread(props: P) {
  return (
    <svg viewBox="0 0 70 56" {...base} {...props}>
      <path d="M8 26C4 12 22 4 35 4s31 8 27 22v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4Z" fill="#f2b765" />
      <path d="M14 26c-2-8 8-14 21-14s23 6 21 14v20H14Z" fill="#ffe0a3" />
    </svg>
  );
}

export function Cucumber(props: P) {
  return (
    <svg viewBox="0 0 70 40" {...base} {...props}>
      <rect x="4" y="10" width="62" height="20" rx="10" fill="#4fbf73" transform="rotate(-12 35 20)" />
      <g fill="#2e9a52" transform="rotate(-12 35 20)">
        <circle cx="18" cy="16" r="1.6" />
        <circle cx="30" cy="22" r="1.6" />
        <circle cx="42" cy="16" r="1.6" />
        <circle cx="54" cy="22" r="1.6" />
      </g>
    </svg>
  );
}

export function Strawberry(props: P) {
  return (
    <svg viewBox="0 0 50 56" {...base} {...props}>
      <path d="M25 52C10 44 4 30 8 20c3-6 10-6 17-4 7-2 14-2 17 4 4 10-2 24-17 32Z" fill="#ff5d6c" />
      <path d="M14 14c4 2 7 2 11 0 4 2 7 2 11 0-2-6-7-8-11-6-4-2-9 0-11 6Z" fill="#4fbf73" />
      <g fill="#fff2b3">
        <circle cx="18" cy="26" r="1.5" />
        <circle cx="28" cy="24" r="1.5" />
        <circle cx="34" cy="32" r="1.5" />
        <circle cx="22" cy="36" r="1.5" />
        <circle cx="28" cy="42" r="1.5" />
      </g>
    </svg>
  );
}

/** Галерея орнына суретке ұқсас бос жақтау иллюстрациясы */
export function PhotoPlaceholder({ tone = "#43b3ee", ...props }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 64 48" {...base} {...props}>
      <rect x="2" y="2" width="60" height="44" rx="10" fill="#fff" stroke={tone} strokeWidth="3" strokeDasharray="6 5" />
      <circle cx="44" cy="15" r="5" fill="#ffc83d" />
      <path d="M8 40 24 22l10 11 6-6 16 13Z" fill={tone} opacity=".75" />
    </svg>
  );
}
