import { Fade } from "react-awesome-reveal";
import ProductInfoComponent from "./ProductInfo";
import type { ProcessedProduct } from "../types/product";
import { FADE_DELAY } from "../constants";

interface ProductListProps {
  products: ProcessedProduct[];
}

/**
 * Product list component that renders all products with animation
 */
export function ProductList({ products }: ProductListProps) {
  return (
    <div className="row-span-1">
      {products.map((product, index) => (
        <Fade 
          key={product.key}
          direction={index % 2 === 0 ? "left" : "right"} 
          triggerOnce={true} 
          delay={FADE_DELAY}
        >
          <ProductInfoComponent
            prodName={product.name}
            prodDesc={product.description}
            productDetails={product.details}
            productImageLink={product.images}
          />
        </Fade>
      ))}
    </div>
  );
}
