/**
 * Site configuration — Centralized site settings following Astro Rocket reference
 * This is the source of truth for all site-wide configuration
 * It mirrors current SITE_CONFIG but with additional fields for future enhancements
 */

/** Site configuration interface */
export interface SiteConfig {
  /* Core site metadata */
  url: string;
  name: string;
  description: string;
  author: string;
  email: string;
  authorImage?: string;

  /* Social media and contact links */
  socialLinks: Array<{
    platform: string;
    url: string;
    icon?: string;
    label?: string;
  }>;

  /* Header configuration */
  header: {
    showSocialLinks: boolean;
    twitter?: string;
  };

  /* Search engine verification */
  verification: {
    google: string;
    bing: string;
  };

  /* Open Graph and social image */
  ogImage: string;

  /* Blog configuration */
  blog: {
    postsPerPage: number;
    tagCloudLimit: number;
  };

  /* Services configuration */
  services: {
    perPage: number;
    tagCloudLimit: number;
  };

  /* Article features */
  articleFeatures: {
    toc: {
      enabled: boolean;
      layout: "sidebar" | "inline" | "none";
      sidebarPosition: "left" | "right";
      minHeadings: number;
      maxDepth: number;
    };
    comments: { enabled: boolean };
  };

  /* Blog image overlay */
  blogImageOverlay: boolean;

  /* Branding configuration */
  branding: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      foreground: string;
      border: string;
      ring: string;
    };
    logo: { light: string; dark: string };
    favicon: string;
  };

  /* i18n configuration */
  i18n: {
    enabled: boolean;
    locales: string[];
    defaultLocale: string;
    routing: { prefixDefaultLocale: boolean };
  };
}

import rawSiteConfig from "../data/siteConfig.json";

export const siteConfig: SiteConfig = {
  url: rawSiteConfig.url || "https://tema-cloudflare-blog.pages.dev",
  name: rawSiteConfig.name || "Cloudflare Editorial",
  description: rawSiteConfig.description || "Um blog moderno, ultra-rápido e focado em engenharia de software, edge computing e inteligência artificial.",
  author: rawSiteConfig.author || "Redação Editorial",
  email: rawSiteConfig.contact?.email || "contato@exemplo.com",
  authorImage: "/images/author.jpg",

  /* Social links */
  socialLinks: [
    {
      platform: "github",
      url: rawSiteConfig.social?.github || "https://github.com/ygorluz/tema-cloudflare-blog",
      label: "GitHub",
    },
    {
      platform: "twitter",
      url: rawSiteConfig.social?.twitter || "https://twitter.com",
      label: "Twitter",
    },
    {
      platform: "linkedin",
      url: rawSiteConfig.social?.linkedin || "https://linkedin.com",
      label: "LinkedIn",
    },
    { platform: "email", url: `mailto:${rawSiteConfig.contact?.email || "contato@exemplo.com"}`, label: "Email" },
  ],

  /* Header settings */
  header: {
    showSocialLinks: true,
  },

  /* Search engine verification */
  verification: {
    google: "",
    bing: "",
  },

  /* Social image */
  ogImage: "/preview.png",

  /* Blog configuration */
  blog: {
    postsPerPage: 10,
    tagCloudLimit: 20,
  },

  /* Services configuration */
  services: {
    perPage: 12,
    tagCloudLimit: 20,
  },

  /* Article features */
  articleFeatures: {
    toc: {
      enabled: true,
      layout: "sidebar",
      sidebarPosition: "right",
      minHeadings: 2,
      maxDepth: 3,
    },
    comments: { enabled: false },
  },

  /* Blog image overlay */
  blogImageOverlay: true,

  /* Branding */
  branding: {
    colors: {
      primary: rawSiteConfig.theme?.primary || "#f38020",
      secondary: "#737373",
      accent: rawSiteConfig.theme?.accent || "#0051c3",
      background: "#ffffff",
      foreground: "#171717",
      border: "#e5e5e5",
      ring: "#f38020",
    },
    logo: {
      light: "/logos/logo-light.svg",
      dark: "/logos/logo-dark.svg",
    },
    favicon: "/favicon.svg",
  },

  /* i18n configuration (matches i18n.config.ts) */
  i18n: {
    enabled: true,
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
    routing: { prefixDefaultLocale: false },
  },
} as const;

export default siteConfig;

