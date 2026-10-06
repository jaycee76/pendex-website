"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProductImage } from "../types/product";

const AUTOPLAY_DELAY_MS = 5000;
const SWIPE_THRESHOLD_PX = 50;

export default function CarouselComponent({ images }: { images: ProductImage[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const pointerStartX = useRef<number | null>(null);
    const count = images.length;

    const goTo = (index: number) => setActiveIndex(((index % count) + count) % count);

    // Autoplay with looping. Re-runs on every slide change so a manual
    // navigation restarts the timer. Disabled for a single slide, while
    // hovered/focused, and for users who prefer reduced motion.
    useEffect(() => {
        if (count < 2 || paused) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setInterval(
            () => setActiveIndex((current) => (current + 1) % count),
            AUTOPLAY_DELAY_MS
        );
        return () => clearInterval(id);
    }, [count, paused, activeIndex]);

    const handlePointerUp = (clientX: number) => {
        if (pointerStartX.current === null) return;
        const deltaX = clientX - pointerStartX.current;
        pointerStartX.current = null;
        if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX) {
            goTo(activeIndex + (deltaX < 0 ? 1 : -1));
        }
    };

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Product images"
            className="relative w-full overflow-hidden rounded-xl touch-pan-y"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onPointerDown={(e) => { pointerStartX.current = e.clientX; }}
            onPointerUp={(e) => handlePointerUp(e.clientX)}
            onPointerCancel={() => { pointerStartX.current = null; }}
        >
            <div
                className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((productImg, i) => (
                    <div
                        key={productImg.src}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${count}`}
                        aria-hidden={i !== activeIndex}
                        className="w-full flex-none"
                    >
                        <Image
                            src={productImg.src}
                            alt={productImg.alt}
                            className="aspect-video h-full w-full"
                            width={600}
                            height={300}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {images.map((productImg, i) => (
                    <button
                        key={productImg.src}
                        type="button"
                        aria-label={`Show image ${i + 1} of ${count}`}
                        aria-current={activeIndex === i}
                        onClick={() => goTo(i)}
                        className={`relative block h-1 cursor-pointer rounded-2xl transition-all before:absolute before:inset-x-0 before:-inset-y-2 before:content-[''] ${activeIndex === i ? "w-8 bg-black/50" : "w-4 bg-black/20"}`}
                    />
                ))}
            </div>
        </div>
    );
}
