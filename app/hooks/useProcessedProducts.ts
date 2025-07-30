import { useMemo } from "react";
import products from "@/app/products.json";
import type { ProductData, ProcessedProduct } from "../types/product";
import { 
  extractProductDetails, 
  extractProductImages, 
  extractProductName, 
  extractProductDescription 
} from "../utils/productUtils";
import { PRODUCT_KEYS } from "../constants";

/**
 * Custom hook for processing all products data
 * @returns Array of processed products with standardized structure
 */
export function useProcessedProducts(): ProcessedProduct[] {
  return useMemo(() => {
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
  }, []);
}
