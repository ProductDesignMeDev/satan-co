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
    <div className="relative flex justify-center items-center" style={{ width: '328px' }}>
  <TestimonyCard
    image={testimonies[currentIndex].image}
    name={testimonies[currentIndex].name}
    testimonial={testimonies[currentIndex].testimonial}
  />

  {/* Botón Anterior */}
  <button
    onClick={handlePrev}
    className="absolute left-0 transform -translate-y-1/2 flex items-center justify-center text-white text-3xl rounded-full mt-3 ml-3"
    style={{ top: '50%' }}
  >
    <Image src={FlechaMobile} alt="Prev" width={24} height={24} />
  </button>

  {/* Botón Siguiente */}
  <button
    onClick={handleNext}
    className="absolute right-0 transform -translate-y-1/2 rotate-180 flex items-center justify-center text-white text-3xl rounded-full mt-3 mr-3"
    style={{ top: '50%' }}
  >
    <Image src={FlechaMobile} alt="Next" width={24} height={24} />
  </button>
</div>
  );
}
