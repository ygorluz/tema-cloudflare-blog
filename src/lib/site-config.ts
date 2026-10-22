export type Locale = "pt-BR" | "en" | string;

export const SITE_CONFIG = {
  url: "https://tema-cloudflare-blog.pages.dev",
  /** Default locale for fallback. */
  defaultLocale: "pt-BR" as const,
  /** Supported locales. */
  locales: ["pt-BR"] as const,
  /** Human-readable locale labels. */
  localeLabels: {
    "pt-BR": "Português",
  } as const,
  /** Short locale codes for URL prefixes. */
  localePrefixes: {
    "pt-BR": "pt",
  } as const,
  /** Site name for metadata and JSON-LD. */
  name: "Cloudflare Editorial",
  /** Short description for metadata. */
  description: "Um blog moderno, ultra-rápido e focado em engenharia de software, edge computing e inteligência artificial.",
} as const;
