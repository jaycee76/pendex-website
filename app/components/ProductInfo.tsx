import CarouselComponent from "./Carousel"
import products from '@/app/products.json'

const features = [
    { name: 'Origin', description: 'By boso (BOSCH+SOHN)' },
    { name: 'Dimensions', description: 'Cuffs for adults (can be washed off, latex-free)- Size M (13 x 62 | 20 – 31) - Size L (16 x 68 | 28 – 38 ) - Cuffs, optional: S (10 x 38 | 15 – 22), XL (17 x 76 | 36 – 50"' },
    { name: 'Manual Included For', description: '- boso TM-2450 - profil-manager XD - Important notes- Battery charge' },
  ]
  
  export default function ProductInfoComponent(props: { carouselPosition: string, prodName: string, prodDesc: string }) {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">{props.prodName!}</h2>
            <p className="mt-4 text-gray-500">
              {props.prodDesc}
            </p>
  
            <dl className="mt-5 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4 pb-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="h-max border-2 border-gray-200 sm:gap-6 lg:gap-8">
                <CarouselComponent />
          </div>
        </div>
      </div>
    )
  }
  