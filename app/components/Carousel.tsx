"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import type { ProductImage } from "../types/product";

export default function CarouselComponent({ images }: { images: ProductImage[] }) {
    return (
        <Carousel
            loop={true}
            autoplay={true}
            autoplayDelay={5000}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black/50" : "w-4 bg-black/20"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {images.map((productImg) => (
                <Image
                    src={productImg.src}
                    key={productImg.src}
                    alt={productImg.alt}
                    className="aspect-video h-full w-full"
                    width={600}
                    height={300}
                />
            ))}

        </Carousel>
    );
}