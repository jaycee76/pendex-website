// Product-related type definitions

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export interface ProductFeature {
  label: string;
  labelDescription: string;
}

export interface ProductImage {
  image: string;
}

export interface ProductData {
  productNames?: string;
  description?: string;
  features?: ProductFeature[];
  productImages?: ProductImage[];
}

export interface ProcessedProduct {
  name: string;
  description: string;
  details: ProductFeature[];
  images: ProductImage[];
  key: string;
}

export type ProductKey = 
  | 'Skintact'
  | 'SkintactFSVB' 
  | 'SkintactFSTC1'
  | 'SonyType1'
  | 'SonyType2'
  | 'SonyType5'
  | 'Sonomed'
  | 'SonomedType5'
  | 'BosoTM'
  | 'BosoMedistar'
  | 'BosoMedicusFamilyFour'
  | 'BosoMedicusX'
  | 'BosoMedicusPrestigeS'
  | 'BosoNovaS'
  | 'Kenz';
