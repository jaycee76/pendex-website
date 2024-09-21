"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProductInfoComponent from "./components/ProductInfo";
import logo from "./assets/phendex_logo.png";
import Image from "next/image";
import products from "@/app/products.json";
import HeroComponent from "./components/HeroComponent";
import { Fade } from "react-awesome-reveal";
import ContactComponent from "./components/ContactComponent";

const navigation = [
  { name: "Overview", href: "#overview", current: true },
  { name: "Products", href: "#products", current: false },
  { name: "Contact Us", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Helper functions
const extractAndFilterDetails = (productArray: any[]) => {
  return productArray
    .flatMap((item: any) => item!.features)
    .filter((feature: undefined) => feature !== undefined);
};

const extractAndFilterImageLinks = (productArray: any[]) => {
  return productArray
    .flatMap((item: { productImages: any }) => item.productImages)
    .filter((image: undefined) => image !== undefined);
};

// SKINTACT PRODUCTS
let skinTactProductDetails = extractAndFilterDetails(products.Skintact);
let skinTactProductImageLink = extractAndFilterImageLinks(products.Skintact);

// SKINTACT FSVB PRODUCTS
let skinTactFsvbProductDetails = extractAndFilterDetails(products.SkintactFSVB);
let skinTactFsvbProductImageLink = extractAndFilterImageLinks(products.SkintactFSVB);

// SKINTACT FSTC1 PRODUCTS
let skinTactFstc1ProductDetails = extractAndFilterDetails(products.SkintactFSTC1);
let skinTactFstc1ProductImageLink = extractAndFilterImageLinks(products.SkintactFSTC1);

// SONY 1 PRODUCTS
let sonyType1ProductDetails = extractAndFilterDetails(products.SonyType1);
let sonyType1ProductImageLink = extractAndFilterImageLinks(products.SonyType1);

// SONY 2 PRODUCTS
let sonyType2ProductDetails = extractAndFilterDetails(products.SonyType2);
let sonyType2ProductImageLink = extractAndFilterImageLinks(products.SonyType2);

// SONY 5 PRODUCTS
let sonyType5ProductDetails = extractAndFilterDetails(products.SonyType5);
let sonyType5ProductImageLink = extractAndFilterImageLinks(products.SonyType5);

// SONOMED PRODUCTS
let sonomedProductDetails = extractAndFilterDetails(products.Sonomed);
let sonomedProductImageLink = extractAndFilterImageLinks(products.Sonomed);

// SONOMED TYPE 5PRODUCTS
let sonomedType5ProductDetails = extractAndFilterDetails(products.SonomedType5);
let sonomedType5ProductImageLink = extractAndFilterImageLinks(products.SonomedType5);

// BOSO PRODUCTS
let bosoProductDetails = extractAndFilterDetails(products.BosoTM);
let bosoProductImageLink = extractAndFilterImageLinks(products.BosoTM);

// BOSO MEDISTAR PRODUCT
let bosoMedistarProductDetails = extractAndFilterDetails(products.BosoMedistar);
let bosoMedistarProductImageLink = extractAndFilterImageLinks(
  products.BosoMedistar
);

// BOSO MEDICUS FAMILY 4 PRODUCT
let bosoMedicusProductDetails = extractAndFilterDetails(
  products.BosoMedicusFamilyFour
);
let bosoMedicusProductImageLink = extractAndFilterImageLinks(
  products.BosoMedicusFamilyFour
);

// BOSO MEDICUS X PRODUCT
let bosoMedicusXProductDetails = extractAndFilterDetails(products.BosoMedicusX);
let bosoMedicusXProductImageLink = extractAndFilterImageLinks(
  products.BosoMedicusX
);

// BOSO MEDICUS PRESTIGE S PRODUCT
let bosoMedicusPrestigeSProductDetails = extractAndFilterDetails(
  products.BosoMedicusPrestigeS
);
let bosoMedicusPrestigeSProductImageLink = extractAndFilterImageLinks(
  products.BosoMedicusPrestigeS
);

// BOSO NOVA S PRODUCT
let bosoNovaSProductDetails = extractAndFilterDetails(products.BosoNovaS);
let bosoNovaSProductImageLink = extractAndFilterImageLinks(products.BosoNovaS);

// KENZ PRODUCTS
let kenzProductDetails = extractAndFilterDetails(products.Kenz);
let kenzProductImageLink = extractAndFilterImageLinks(products.Kenz);

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow z-50">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex justify-center align-center mt-1">
                      <Image src={logo} alt="Phendex Logo" priority />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="mr-12 pr-12 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-green-900 text-white"
                              : "text-green-700 hover:bg-green-900/40 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6"></div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-green-800 p-2 text-white hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-200">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-green-900 text-white"
                          : "text-green-700 hover:bg-green-900 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl pt-1 sm:px-6 lg:px-8" id="overview">
            <div className="row-span-1">
              <HeroComponent />
            </div>
          </div>
          <div className="mx-auto max-w-7xl pt-1 sm:px-6 lg:px-8" id="products">
            <div className="row-span-1">
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.Skintact.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.Skintact.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={skinTactProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={skinTactProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.SkintactFSVB.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.SkintactFSVB.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={skinTactFsvbProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={skinTactFsvbProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.SkintactFSTC1.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.SkintactFSTC1.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={skinTactFstc1ProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={skinTactFstc1ProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.SonyType1.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.SonyType1.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={sonyType1ProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={sonyType1ProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.SonyType2.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.SonyType2.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={sonyType2ProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={sonyType2ProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.SonyType5.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.SonyType5.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={sonyType5ProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={sonyType5ProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.Sonomed.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.Sonomed.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={sonomedProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={sonomedProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.SonomedType5.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.SonomedType5.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={sonomedType5ProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={sonomedType5ProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.BosoTM.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.BosoTM.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={bosoProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={bosoProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.BosoMedistar.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.BosoMedistar.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={bosoMedistarProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={bosoMedistarProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.BosoMedicusFamilyFour.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.BosoMedicusFamilyFour.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={bosoMedicusProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={bosoMedicusProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.BosoMedicusX.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.BosoMedicusX.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={bosoMedicusXProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={bosoMedicusXProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.BosoMedicusPrestigeS.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.BosoMedicusPrestigeS.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={bosoMedicusPrestigeSProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={bosoMedicusPrestigeSProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="left" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.BosoNovaS.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.BosoNovaS.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={bosoNovaSProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={bosoNovaSProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
              <Fade direction="right" triggerOnce={true} delay={400}>
                <ProductInfoComponent
                  prodName={
                    products.Kenz.flatMap(
                      (prodName) => prodName.productNames
                    ) as unknown as string
                  }
                  prodDesc={
                    products.Kenz.flatMap(
                      (prodDesc) => prodDesc.description
                    ) as unknown as string
                  }
                  productDetails={kenzProductDetails.map(
                    (productDetail: any) => productDetail
                  )}
                  productImageLink={kenzProductImageLink.map(
                    (productImg: any) => productImg
                  )}
                />
              </Fade>
            </div>
          </div>
          <div id="contact">
            <ContactComponent />
          </div>
        </main>
      </div>
    </>
  );
}
