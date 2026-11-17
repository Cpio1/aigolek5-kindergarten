/**
 * Кейін толтырылатын деректер: галерея, құжаттар, мәзір.
 * Барлық тізімдер әзірге бос — сайтта жалған фото, құжат немесе мәзір көрсетілмейді.
 */

/* ───────────── Галерея ─────────────
 * Фотосуреттерді /public/gallery/ қалтасына салып, осы жерге қосыңыз.
 * width/height — суреттің нақты өлшемі (кез келген пішім: тік, жатық, шаршы).
 *
 * Мысал:
 * { src: "/gallery/2025-nauryz-01.jpg", width: 1600, height: 1067, alt: "Наурыз мерекесі" },
 */
export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export const galleryImages: GalleryImage[] = [];

/* ───────────── Құжаттар ─────────────
 * PDF файлдарын /public/documents/ қалтасына салып, осы жерге қосыңыз.
 * «Қарау» және «Жүктеу» батырмалары тек `file` көрсетілгенде ғана пайда болады.
 *
 * Мысал:
 * { category: "organization", title: "Жарғы", file: "/documents/zhargy.pdf", size: "1,2 МБ", date: "2024" },
 */
export type DocumentCategory = "organization" | "certificates" | "notices";

export type SiteDocument = {
  category: DocumentCategory;
  title: string;
  file?: string;
  size?: string;
  date?: string;
};

export const documents: SiteDocument[] = [];

/* ───────────── Тамақтану ─────────────
 * Нақты мәзір бекітілген соң осы жерге қосыңыз.
 *
 * Мысал:
 * { time: "08:30", title: "Таңғы ас", items: ["..."] },
 */
export type Meal = {
  time?: string;
  title: string;
  items: string[];
};

export const menu: Meal[] = [];
