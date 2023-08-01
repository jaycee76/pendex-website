import CarouselComponent from "./Carousel"

  export default function ProductInfoComponent(props: { isCarouselReversed: boolean, prodName: string, prodDesc: string, productDetails: any }) {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className={props.isCarouselReversed ? "order-last" : "order-first"}>
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">{props.prodName}</h2>
            <p className="mt-4 text-gray-500">
              {props.prodDesc}
            </p>
  
            <dl className="mt-5 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {props.productDetails.map((feature: any) => (
                <div key={feature.label} className="border-t border-gray-200 pt-4 pb-4">
                  <dt className="font-medium text-gray-900">{feature.label}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.labelDescription}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="h-max border-2 rounded-xl border-gray-200 sm:gap-6 lg:gap-8">
                <CarouselComponent />
          </div>
        </div>
      </div>
    )
  }
  