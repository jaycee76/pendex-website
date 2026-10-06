"use client";

import { Fade } from "react-awesome-reveal";
import ProductInfoComponent from "./ProductInfo";
import type { Product } from "../types/product";
import { FADE_DELAY } from "../constants";

interface ProductListProps {
  products: Product[];
}

/**
 * Product list component that renders all products with animation
 */
export function ProductList({ products }: ProductListProps) {
  return (
    <div className="row-span-1">
      {products.map((product, index) => (
        <Fade 
          key={product.id}
          direction={index % 2 === 0 ? "left" : "right"} 
          triggerOnce={true} 
          delay={FADE_DELAY}
        >
          <ProductInfoComponent product={product} />
        </Fade>
      ))}
    </div>
  );
}
