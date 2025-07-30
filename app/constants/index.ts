import type { NavigationItem, ProductKey } from "../types/product";

export const NAVIGATION: NavigationItem[] = [
  { name: "Overview", href: "#overview", current: true },
  { name: "Products", href: "#products", current: false },
  { name: "Contact Us", href: "#contact", current: false },
];

export const FADE_DELAY = 400;

export const PRODUCT_KEYS: ProductKey[] = [
  'Skintact',
  'SkintactFSVB', 
  'SkintactFSTC1',
  'SonyType1',
  'SonyType2',
  'SonyType5',
  'Sonomed',
  'SonomedType5',
  'BosoTM',
  'BosoMedistar',
  'BosoMedicusFamilyFour',
  'BosoMedicusX',
  'BosoMedicusPrestigeS',
  'BosoNovaS',
  'Kenz'
];
