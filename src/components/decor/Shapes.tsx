import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = { "aria-hidden": true, focusable: false } as const;

export function Cloud(props: P) {
  return (
    <svg viewBox="0 0 120 64" {...base} {...props}>
      <path
        d="M30 58h62a22 22 0 0 0 2-44 28 28 0 0 0-52-4 20 20 0 0 0-14 8A20 20 0 0 0 30 58Z"
        fill="#fff"
      />
      <path
        d="M30 58h62a22 22 0 0 0 2-44"
        fill="none"
        stroke="#d7ecfb"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sun(props: P) {
  return (
    <svg viewBox="0 0 100 100" {...base} {...props}>
      <g stroke="#ffc83d" strokeWidth="6" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const x1 = 50 + Math.cos(a) * 34;
          const y1 = 50 + Math.sin(a) * 34;
          const x2 = 50 + Math.cos(a) * 46;
          const y2 = 50 + Math.sin(a) * 46;
          return <line key={i} x1={x1.toFixed(2)} y1={y1.toFixed(2)} x2={x2.toFixed(2)} y2={y2.toFixed(2)} />;
        })}
      </g>
      <circle cx="50" cy="50" r="25" fill="#ffd45c" />
      <circle cx="42" cy="47" r="2.6" fill="#23324a" />
      <circle cx="58" cy="47" r="2.6" fill="#23324a" />
      <path d="M42 56q8 7 16 0" fill="none" stroke="#23324a" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="36" cy="55" r="3.5" fill="#ff9bbd" opacity=".7" />
      <circle cx="64" cy="55" r="3.5" fill="#ff9bbd" opacity=".7" />
    </svg>
  );
}

export function Star({ color = "#ffc83d", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path
        d="M20 3.5l4.9 10 11 1.6-8 7.8 1.9 11L20 28.7l-9.8 5.2 1.9-11-8-7.8 11-1.6Z"
        fill={color}
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ color = "#43b3ee", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M20 2c1.6 9.5 8.5 16.4 18 18-9.5 1.6-16.4 8.5-18 18-1.6-9.5-8.5-16.4-18-18 9.5-1.6 16.4-8.5 18-18Z" fill={color} />
    </svg>
  );
}

export function Flower({ petal = "#ff6f9f", center = "#ffc83d", ...props }: P & { petal?: string; center?: string }) {
  return (
    <svg viewBox="0 0 60 60" {...base} {...props}>
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse key={i} cx="30" cy="15" rx="9" ry="13" fill={petal} transform={`rotate(${i * 60} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="9" fill={center} />
    </svg>
  );
}

export function Balloon({ color = "#ff6f9f", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 50 100" {...base} {...props}>
      <path d="M25 66c-2 10 6 14 0 22s4 10 2 12" fill="none" stroke="#9aa6b8" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="25" cy="30" rx="20" ry="25" fill={color} />
      <path d="M21 55h8l-4 8Z" fill={color} />
      <ellipse cx="17" cy="20" rx="4" ry="8" fill="#fff" opacity=".45" transform="rotate(20 17 20)" />
    </svg>
  );
}

export function Rainbow(props: P) {
  const colors = ["#ff6f9f", "#ff8a3d", "#ffc83d", "#4fbf73", "#43b3ee"];
  return (
    <svg viewBox="0 0 200 104" {...base} {...props}>
      {colors.map((c, i) => (
        <path
          key={c}
          d={`M${10 + i * 12} 100a${90 - i * 12} ${90 - i * 12} 0 0 1 ${180 - i * 24} 0`}
          fill="none"
          stroke={c}
          strokeWidth="11"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Heart({ color = "#ff6f9f", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 36" {...base} {...props}>
      <path d="M20 34S3 23.5 3 12.5A8.5 8.5 0 0 1 20 8a8.5 8.5 0 0 1 17 4.5C37 23.5 20 34 20 34Z" fill={color} />
    </svg>
  );
}

export function Blob({ color = "#fff3c9", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 200 200" {...base} {...props}>
      <path
        d="M43.5-57.3C56.3-49.6 66.2-36 70.5-20.8c4.4 15.2 3.2 32-4.7 44.6C57.9 36.4 42.9 44.9 27 52.4 11 59.9-6 66.4-21.3 62.9-36.5 59.5-50 46.1-59.6 30.8-69.2 15.5-74.9-1.7-71.3-17.2-67.7-32.7-54.8-46.5-40.2-54.1-25.6-61.6-9.4-62.9 6.6-61.3c16-1.5 24.1-3.7 36.9 4Z"
        transform="translate(100 100)"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({ color = "#43b3ee", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 80 20" {...base} {...props}>
      <path d="M3 10q9-9 18 0t18 0 18 0 18 0" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Moon({ color = "#ffc83d", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M27 4a16 16 0 1 0 9 26A13 13 0 0 1 27 4Z" fill={color} />
    </svg>
  );
}
