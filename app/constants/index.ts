import type { NavigationItem } from "../types/product";

export const NAVIGATION: NavigationItem[] = [
  { name: "Overview", href: "#overview", current: true },
  { name: "Products", href: "#products", current: false },
  { name: "Contact Us", href: "#contact", current: false },
];

export const FADE_DELAY = 400;
