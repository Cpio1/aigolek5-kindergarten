import type { SVGProps } from "react";

const paths = {
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4" /><circle cx="12" cy="15" r="1.4" fill="currentColor" /></>,
  groups: <><circle cx="8" cy="8.5" r="3" /><circle cx="16.5" cy="9.5" r="2.5" /><path d="M2.5 19.5c.6-3.4 3-5.5 5.5-5.5s4.9 2.1 5.5 5.5M13.5 15.2c.9-.8 1.9-1.2 3-1.2 2.2 0 4.1 1.8 4.6 4.8" /></>,
  language: <><path d="M4 5.5h16v10H11l-4.5 3.8v-3.8H4Z" /><path d="M8.5 10.5h7M8.5 8h4" /></>,
  week: <><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4M7.5 14h1M11.5 14h1M15.5 14h1M7.5 17h1M11.5 17h1" /></>,
  seat: <><path d="M6 11V7.5a2.5 2.5 0 0 1 2.5-2.5h7A2.5 2.5 0 0 1 18 7.5V11" /><path d="M4 11.5a2 2 0 0 1 4 0V14h8v-2.5a2 2 0 0 1 4 0V17H4ZM6.5 17v2.5M17.5 17v2.5" /></>,
  house: <><path d="M3.5 11 12 4l8.5 7" /><path d="M5.5 9.5v10h13v-10" /><path d="M10 19.5v-5h4v5" /></>,
  speech: <><path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-7L7 20v-3.5H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z" /><path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.6" /></>,
  bulb: <><path d="M9 17.5h6M10 20.5h4M12 3.5a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.4 1.1 2.2v1h5v-1c0-.8.5-1.7 1.1-2.2A6 6 0 0 0 12 3.5Z" /></>,
  palette: <><path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.3 0 2-.8 2-1.8 0-1.4-1.2-1.7-1.2-3 0-1 .8-1.7 1.8-1.7h2.2a3.7 3.7 0 0 0 3.7-3.7C20.5 6.7 16.7 3.5 12 3.5Z" /><circle cx="7.8" cy="11" r="1.2" fill="currentColor" /><circle cx="10.5" cy="7.3" r="1.2" fill="currentColor" /><circle cx="15" cy="7.6" r="1.2" fill="currentColor" /></>,
  ball: <><circle cx="12" cy="12" r="8.5" /><path d="M3.8 9.5c5 1.5 11.4 1.5 16.4 0M3.8 14.5c5-1.5 11.4-1.5 16.4 0M12 3.5c-3 5-3 12 0 17M12 3.5c3 5 3 12 0 17" /></>,
  hands: <><path d="M12 20s-7.5-4.3-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.7-7.5 10-7.5 10Z" /></>,
  grow: <><path d="M12 20.5v-9" /><path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5ZM12 14.5C12 11 10 9 6 9c0 3.6 2 5.5 6 5.5Z" /><path d="M7 20.5h10" /></>,
  shield: <><path d="M12 3.5 19 6v5.5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6Z" /><path d="m9 12 2.2 2.2L15.5 10" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  phone: <><path d="M6.5 3.5h3l1.5 4-2 1.3a10 10 0 0 0 6.2 6.2l1.3-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" /></>,
  pin: <><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></>,
  user: <><circle cx="12" cy="8.5" r="4" /><path d="M4.5 20c1-3.8 4-5.8 7.5-5.8s6.5 2 7.5 5.8" /></>,
  map: <><path d="M3.5 6.5 9 4l6 2.5 5.5-2.5v13.5L15 20l-6-2.5-5.5 2.5Z" /><path d="M9 4v13.5M15 6.5V20" /></>,
  copy: <><rect x="8.5" y="8.5" width="11" height="11" rx="2.5" /><path d="M15.5 8.5V6A2.5 2.5 0 0 0 13 3.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5" /></>,
  check: <><path d="m5 12.5 4.5 4.5L19 7.5" /></>,
  file: <><path d="M13.5 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9.5Z" /><path d="M13.5 3.5v6h6M8.5 13.5h7M8.5 16.5h5" /></>,
  folder: <><path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h3.5l2 2.5H18A2.5 2.5 0 0 1 20.5 9.5V17a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 17Z" /></>,
  badge: <><circle cx="12" cy="9.5" r="5.5" /><path d="m8.8 14 -1.3 6.5L12 18l4.5 2.5-1.3-6.5" /></>,
  bell: <><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15Z" /><path d="M10 20.5a2 2 0 0 0 4 0" /></>,
  download: <><path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h10" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  left: <><path d="M14.5 5.5 8 12l6.5 6.5" /></>,
  right: <><path d="M9.5 5.5 16 12l-6.5 6.5" /></>,
  up: <><path d="M12 19V5M6 11l6-6 6 6" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  expand: <><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" /></>,
  id: <><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><circle cx="9" cy="11" r="2" /><path d="M6 15.5c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 10h4M14 13h3" /></>,
  whatsapp: <><path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" /><path d="M9.2 8.8c0 3.2 2.8 6 6 6l1.2-1.4-1.9-1-1 .8a4.4 4.4 0 0 1-2.5-2.5l.8-1-1-1.9Z" /></>,
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      width="1em"
      height="1em"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
