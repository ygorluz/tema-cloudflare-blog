import type { Locale } from "../lib/site-config";
import ptBR from "./pt-BR.json";
import en from "./en.json";

export type TranslationDict = Record<string, string>;

export const translations: Record<string, TranslationDict> = {
  "pt-BR": ptBR,
  pt: ptBR,
  en,
};

/**
 * Get a translated string for the given locale and key.
 * Falls back to pt-BR then en then key itself.
 */
export function t(locale: Locale | string = "pt-BR", key: string): string {
  const dict = translations[locale] || translations["pt-BR"] || translations.en;
  return dict?.[key] ?? translations["pt-BR"]?.[key] ?? translations.en?.[key] ?? key;
}
