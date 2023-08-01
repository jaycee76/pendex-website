import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import product1 from "../assets/boso_1.jpg"
import product2 from "../assets/boso_2.jpg"
import product3 from "../assets/boso_3.jpg"
import product4 from "../assets/boso_4.jpg"
import product5 from "../assets/boso_5.jpg"


export default function CarouselComponent(props: any) {
    return (
        <Carousel
            loop={true}
            autoplay={true}
            autoplayDelay={3500}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 text-green" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <Image
                src={product1}
                alt="image 1"
                className="object-contain"
            />
            <Image
                src={product2}
                alt="image 2"
                className="object-contain"
            />            
            <Image
                src={product3}
                alt="image 3"
                className="object-contain"
            />           
             <Image
                src={product4}
                alt="image 4"
                className="object-contain"
            />         
            <Image
                src={product5}
                alt="image 5"
                className="object-contain"
            />
        </Carousel>
    );
}