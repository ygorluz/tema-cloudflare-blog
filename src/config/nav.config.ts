/**
 * Navigation configuration — Centralized navigation structure
 * Defines main navigation links and footer sections
 * Used by Header and Footer components for consistent navigation
 */

export interface NavItem {
  /** Navigation link URL */
  href: string;
  /** Translation key for localized label */
  labelKey: string;
  /** Optional icon name for icon-only navigation items */
  icon?: string;
  /** Whether this is an external link (opens in new tab) */
  external?: boolean;
  /** Sub-navigation items for dropdown menus */
  children?: NavItem[];
}

/** Main navigation items for header */
export const mainNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/sobre", labelKey: "nav.about" },
  { href: "/contato", labelKey: "nav.contact" },
] as const;

/** Footer navigation grouped by section */
export const footerNav = {
  /** Links editoriais */
  product: [
    { href: "/", labelKey: "nav.home" },
    { href: "/blog", labelKey: "nav.blog" },
    { href: "/sobre", labelKey: "nav.about" },
    { href: "/contato", labelKey: "nav.contact" },
  ] as const,
  /** Legal pages and terms */
  legal: [
    { href: "/privacidade", labelKey: "footer.privacy" },
    { href: "/termos", labelKey: "footer.terms" },
  ] as const,
  /** Social media and contact links */
  social: [
    {
      href: "https://github.com/ygorluz/tema-cloudflare-blog",
      labelKey: "footer.github",
    },
    {
      href: "https://twitter.com",
      labelKey: "footer.twitter",
    },
  ] as const,
} as const;

/** Helper function to get navigation items by section */
export function getFooterNav(section: keyof typeof footerNav): NavItem[] {
  return footerNav[section] as unknown as NavItem[];
}
