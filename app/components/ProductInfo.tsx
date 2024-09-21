import CarouselComponent from "./Carousel";

export default function ProductInfoComponent(props: {
  prodName: string;
  prodDesc: string;
  productDetails: any;
  productImageLink: any;
}) {

  return (
    <div className="bg-white my-5">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
            {props.prodName}
          </h2>
          <p className="mt-4 text-gray-500">{props.prodDesc}</p>
          <dl className="mt-5 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {props.productDetails.map((feature: any) => {
              // Replace \n with <br /> for each feature's labelDescription
              const formattedLabelDescription =
                feature.labelDescription.replace(/\n/g, "<br />");
              return (
                <div
                  key={feature.label}
                  className="border-t border-green-100 pt-4 pb-4"
                >
                  <dt className="font-medium text-gray-900">{feature.label}</dt>
                  <dd
                    className="mt-2 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: formattedLabelDescription,
                    }}
                  />
                </div>
              );
            })}
          </dl>
        </div>
        <div className="h-max border-2 rounded-xl sm:gap-6 lg:gap-8">
          <CarouselComponent
            productImage={props.productImageLink.map(
              (productImg: any) => productImg
            )}
          />
        </div>
      </div>
    </div>
  );
}
