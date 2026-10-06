import CarouselComponent from "./Carousel";
import type { Product } from "../types/product";

export default function ProductInfoComponent({ product }: { product: Product }) {
  return (
    <div className="bg-white my-5">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 text-gray-500">{product.description}</p>
          <dl className="mt-5 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {product.features.map((feature) => (
              <div
                key={feature.label}
                className="border-t border-green-100 pt-4 pb-4"
              >
                <dt className="font-medium text-gray-900">{feature.label}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {Array.isArray(feature.value)
                    ? feature.value.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))
                    : feature.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="h-max border-2 rounded-xl sm:gap-6 lg:gap-8">
          <CarouselComponent images={product.images} />
        </div>
      </div>
    </div>
  );
}
