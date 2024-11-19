"use client";

import { useState } from "react";
import Image from "next/image";
import { PrizeCard } from "@/components";
import { CopaMar, CopaHumo, Flechadere, FlechaIzque } from "@/public";

export default function AwardsCards() {
  const premiosData = [
    {
      title: "Copa del Mar 2023",
      position: "3er puesto exterior",
      seedName: "Sunset Fire",
      growerInfo: "Cultivador: Ramiro - Staff Satan&Co",
      imageUrl: CopaMar,
    },
    {
      title: "Copa Poco Humo 2023",
      position: "3er puesto exterior",
      seedName: "Sunset Fire",
      growerInfo: "Cultivador: Ramiro - Staff Satan&Co",
      imageUrl: CopaHumo,
    },
    {
      title: "Copa del Mar 2024",
      position: "3er puesto exterior",
      seedName: "Sunset Fire",
      growerInfo: "Cultivador: Ramiro - Staff Satan&Co",
      imageUrl: CopaMar,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div className="w-full max-w-[1194px] h-[458px] mx-auto flex flex-col sm:flex-row justify-center items-center rounded-lg relative p-4">
      <Image
        src={FlechaIzque}
        alt="Flecha izquierda"
        width={48}
        height={48}
        className={`cursor-pointer absolute left-4 z-10 hidden sm:block lg:w-[38px] lg:h-[38px] ${
          selectedIndex === 0 ? "opacity-50 cursor-default" : ""
        }`}
        onClick={handleLeftClick}
      />

      {/* Contenedor de las tarjetas (responsive y scrollable en móvil) */}
      <div
        className="flex w-full sm:justify-center items-center p-4 gap-4  sm:gap-11 lg:gap-1 overflow-x-auto overflow-y-hidden sm:overflow-hidden snap-x snap-mandatory scroll-smooth scroll-hidden"
      >
        {premiosData.map((premio, index) => {
          return (
            <div
              key={index}
              className={`snap-center shrink-0 transition-transform duration-300 ${
                index === selectedIndex && "sm:scale-110 sm:z-10"
              }`}
              style={{
                width: "100%", // Ajuste para mostrar solo 1 card en móvil
                maxWidth: "328px", // Asegura el tamaño en móvil
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
        className={`cursor-pointer absolute right-16 z-10 hidden sm:block lg:w-[48px] lg:h-[48px] ${
          selectedIndex === premiosData.length - 1
            ? "opacity-50 cursor-default"
            : ""
        }`}
        onClick={handleRightClick}
      />
    </div>
  );
}