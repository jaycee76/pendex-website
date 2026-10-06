import products from "@/app/products.json";
import type { ProductData, ProcessedProduct } from "../types/product";
import {
  extractProductDetails,
  extractProductImages,
  extractProductName,
  extractProductDescription
} from "./productUtils";
import { PRODUCT_KEYS } from "../constants";

/**
 * Processes all products data into a standardized structure.
 * Pure function so it can run in a server component at build time.
 */
export function getProcessedProducts(): ProcessedProduct[] {
  return PRODUCT_KEYS.map((key) => {
    const productData = products[key] as ProductData[];
    return {
      name: extractProductName(productData),
      description: extractProductDescription(productData),
      details: extractProductDetails(productData),
      images: extractProductImages(productData),
      key: key
    };
  });
}
