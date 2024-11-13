"use client";
import React, { useState } from "react";
import Image from "next/image";
import TestimonyCard from "./TestimonyCard";
import { FlechaMobile } from "@/public";

interface TestimonyCardCarouselProps {
  testimonies: Array<{
    image: string;
    name: string;
    testimonial: string;
  }>;
}

export default function TestimonyCardCarousel({
  testimonies,
}: TestimonyCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <TestimonyCard
        image={testimonies[currentIndex].image}
        name={testimonies[currentIndex].name}
        testimonial={testimonies[currentIndex].testimonial}
      />

      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        className="absolute left-2 items-center mt-14 transform -translate-y-1/2  text-white text-3xl rounded-full  flex  justify-center"
      >
        <Image src={FlechaMobile} alt="Logo" width={24} height={24} />
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        className="absolute right-2  transform -translate-y-1/2 rotate-180  text-white rounded-full  flex items-center mt-14 justify-center"
      >
        <Image src={FlechaMobile} alt="Logo" width={24} height={24} />
      </button>
    </div>
  );
}
