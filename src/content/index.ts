import { kk, type Dictionary } from "./kk";

export const locales = ["kk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "kk";

const dictionaries: Record<Locale, Dictionary> = { kk };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export { site, twoGisLink } from "./site";
export * from "./data";
