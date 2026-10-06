// Product-related type definitions

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export interface ProductFeature {
  label: string;
  /** A string, or an array of strings rendered one per line */
  value: string | string[];
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: ProductFeature[];
  images: ProductImage[];
}
