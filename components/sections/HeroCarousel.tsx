"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { carouselImages } from "@/lib/navigation";

const slideInterval = 5200;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, slideInterval);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="group relative mx-auto aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-2xl sm:aspect-[16/9] md:rounded-[2rem] lg:mx-0 border border-mystic/20 bg-black/35 shadow-arcane backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/45 via-transparent to-black/20" />
      {carouselImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 58vw"
          className={`object-cover transition duration-1000 ease-out ${
            activeIndex === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
      <div className="absolute bottom-3 md:bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-mystic/20 bg-black/45 px-3 py-2 backdrop-blur-md">
        {carouselImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full md:h-2.5 transition-all duration-300 ${
              activeIndex === index ? "w-6 bg-ember md:w-8 shadow-gold" : "w-2.5 bg-parchment/45 hover:bg-mystic"
            }`}
            aria-label={`Exibir imagem ${index + 1} do carrossel`}
          />
        ))}
      </div>
    </div>
  );
}
