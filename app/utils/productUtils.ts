import type { ProductData, ProductFeature, ProductImage } from "../types/product";

/**
 * Extracts and filters product details from a product array
 */
export function extractProductDetails(productArray: ProductData[]): ProductFeature[] {
  return productArray
    .flatMap((item) => item.features || [])
    .filter((feature): feature is ProductFeature => feature !== undefined);
}

/**
 * Extracts and filters product images from a product array
 */
export function extractProductImages(productArray: ProductData[]): ProductImage[] {
  return productArray
    .flatMap((item) => item.productImages || [])
    .filter((image): image is ProductImage => image !== undefined);
}

/**
 * Extracts the product name from a product array
 */
export function extractProductName(productArray: ProductData[]): string {
  return productArray
    .find((item) => item.productNames)?.productNames || "";
}

/**
 * Extracts the product description from a product array
 */
export function extractProductDescription(productArray: ProductData[]): string {
  return productArray
    .find((item) => item.description)?.description || "";
}

/**
 * Utility function for combining CSS class names
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
