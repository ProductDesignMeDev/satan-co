"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PrizeCard } from "@/components";
import {
  CopaMar,
  CopaHumo,
  CopaMendoza,
  CopaNecochea,
  CopaFlorece,
  Flechadere,
  FlechaIzque
} from "@/public";


export default function AwardsCards() {

  const premiosData = [
    { title: "Mendoza Cultiva 2023", position: "2DO PUESTO EXTERIOR", seedName: "Sunset Fire", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaMendoza,},
    { title: "Mendoza Cultiva 2023", position: "MENCION ESPECIAL AROMA", seedName: "Satangie", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaMendoza,},
    { title: "Mendoza Cultiva 2023", position: "MENCION ESPECIAL PRESENTACION", seedName: "Mooncake", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaMendoza,},
    { title: "Copa Poco Humo 2023", position: "3ER PUESTO EXTERIOR", seedName: "Sunset Fire", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaHumo,},
    { title: "Copa Poco Humo 2023", position: "MENCION ESPECIAL MEJOR SABOR", seedName: "Satangie", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaHumo,},
    { title: "Copa del Mar 2024", position: "1ER PUESTO EXTERIOR", seedName: "Sunset Fire", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaMar,},
    { title: "Copa del Mar 2024", position: "MENCION ESPECIAL", seedName: "Budín", growerInfo: "Cultivador: Ata - Staff Satan&Co", imageUrl: CopaMar,},
    { title: "Copa del Mar 2024", position: "MENCION ESPECIAL SABOR", seedName: "Satangie", growerInfo: "Cultivador: Isa - Staff Satan&Co", imageUrl: CopaMar,},
    { title: "Copa del Mar 2024", position: "MENCION ESPECIAL PRESENTACION", seedName: "Satangie", growerInfo: "Cultivador: Ramiro - Staff Satan&Co", imageUrl: CopaMar,},
    { title: "Copa Poco Humo 2024", position: "MENCION ESPECIAL", seedName: "SF Budín", growerInfo: "Cultivador: El Flaco - Tester Satan&Co", imageUrl: CopaHumo,},
    { title: "Invernal Necochea 2024",position: "1ER PUESTO EXTERIOR",seedName: "Satangie", growerInfo: "Cultivador: El Gerente - Staff Satan&Co",imageUrl: CopaNecochea,},
    { title: "Invernal Necochea 2024", position: "MENCION ESPECIAL", seedName: "SF Rabona", growerInfo: "Cultivador: Dar-MDS", imageUrl: CopaNecochea,},
    { title: "Invernal Necochea 2024", position: "3ER PUESTO EXTERIOR", seedName: "SF Budín", growerInfo: "Cultivador: Juli Maconhia", imageUrl: CopaNecochea,},
    { title: "Copa Tresa Florece 2024", position: "1ER PUESTO EXTERIOR", seedName: "Satangie", growerInfo: "Cultivador: El Gerente - Staff Satan&Co", imageUrl: CopaFlorece,},
    { title: "Copa Tresa Florece 2024", position: "2ER PUESTO EXTERIOR", seedName: "SF Budín", growerInfo: "Cultivador: Juli Maconhia", imageUrl: CopaFlorece,},
    { title: "Copa Tresa Florece 2024", position: "1ER PUESTO EXTERIOR", seedName: "Mooncake", growerInfo: "Cultivador: El Flaco - Tester Satan&Co", imageUrl: CopaFlorece,}
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleLeftClick = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (selectedIndex < premiosData.length - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    }
  };

  const scrollToSelected = (index: number) => {
    if (carouselRef.current) {
      const selectedElement = carouselRef.current.children[index] as HTMLElement;
      selectedElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  // Actualizar la posición del carrusel cuando selectedIndex cambie
  useEffect(() => {
    scrollToSelected(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handleLeftClick();
      } else if (event.key === "ArrowRight") {
        handleRightClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="w-full max-w-[1050px] h-[600px] mx-auto flex flex-col sm:flex-row justify-center items-center rounded-lg relative p-4">
      <Image
        src={FlechaIzque}
        alt="Flecha izquierda"
        width={48}
        height={48}
        className={`cursor-pointer absolute -ml-32 left-4 z-10 hidden sm:block md:left-6 lg:w-[38px] lg:h-[38px] ${
          selectedIndex === 0 ? "opacity-50 cursor-default" : ""
        }`}
        onClick={handleLeftClick} 
      />
      
      <div

        ref={carouselRef}
        className="flex w-full items-center p-4 gap-3 md:gap-4 lg:gap-4 overflow-x-auto overflow-y-hidden sm:overflow-hidden snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {premiosData.map((premio, index) => {
          const isSelected = index === selectedIndex;

          return (
            <div
              key={index}
              className={`snap-center shrink-0 transition-all duration-300 ${
                isSelected
                  ? "sm:scale-110 sm:z-10 md:scale-105"
                  : "sm:backdrop-blur-sm sm:opacity-50 sm:scale-90 md:opacity-75"
              }`}
              style={{
                width: "100%",
                maxWidth: "328px",
                height: "335px",
              }}
            >
              <PrizeCard
                title={premio.title}
                position={premio.position}
                seedName={premio.seedName}
                growerInfo={premio.growerInfo}
                imageUrl={premio.imageUrl}
              />
            </div>
          );
        })}
      </div>
       <Image
        src={Flechadere}
        alt="Flecha derecha"
        width={48}
        height={48}
        className={`cursor-pointer absolute  right-16 md:right-[-5.5rem]   z-10 hidden sm:block  lg:w-[48px] lg:h-[48px] ${
          selectedIndex === premiosData.length - 1
            ? "opacity-50 cursor-default"
            : ""
        }`}
        onClick={handleRightClick}
      /> 
    </div>
  );
}
