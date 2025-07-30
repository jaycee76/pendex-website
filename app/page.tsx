"use client";

import HeroComponent from "./components/HeroComponent";
import ContactComponent from "./components/ContactComponent";
import { NavigationBar } from "./components/NavigationBar";
import { ProductList } from "./components/ProductList";
import { useProcessedProducts } from "./hooks/useProcessedProducts";

/**
 * Main home page component for Phendex website
 * Features a responsive navigation, hero section, product showcase, and contact information
 */
export default function PhendexHomePage() {
  const processedProducts = useProcessedProducts();

  return (
    <div className="min-h-full">
      <NavigationBar />
      
      <main>
        {/* Overview Section */}
        <section className="mx-auto max-w-7xl pt-1 sm:px-6 lg:px-8" id="overview">
          <div className="row-span-1">
            <HeroComponent />
          </div>
        </section>

        {/* Products Section */}
        <section className="mx-auto max-w-7xl pt-1 sm:px-6 lg:px-8" id="products">
          <ProductList products={processedProducts} />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactComponent />
        </section>
      </main>
    </div>
  );
}
