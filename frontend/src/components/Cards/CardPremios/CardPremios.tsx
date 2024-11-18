"use client";

import { useState } from "react";
import Image from "next/image";
import { PremioCard } from "./PremioCard";
import { CopaMar, CopaHumo, Flechadere, FlechaIzque } from "@/public";

export const CardPremios = () => {
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
    <div className="w-full max-w-[1194px] mx-auto flex flex-col sm:flex-row justify-center items-center rounded-lg relative p-4">
      <Image
        src={FlechaIzque}
        alt="Flecha izquierda"
        width={48}
        height={48}
        className={`cursor-pointer absolute left-4 z-10 hidden sm:block sm:w-[48px] sm:h-[48px] ${
          selectedIndex === 0 ? "opacity-50 cursor-default" : ""
        }`}
        onClick={handleLeftClick}
      />

      {/* Contenedor de las tarjetas (responsive y scrollable en móvil) */}
      <div className="flex w-full sm:justify-center items-center p-4 gap-4 sm:gap-11 overflow-x-auto overflow-y-hidden sm:overflow-hidden snap-x snap-mandatory scroll-smooth">
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
              <PremioCard
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
        className={`cursor-pointer absolute right-4 z-10 hidden sm:block sm:w-[48px] sm:h-[48px] ${
          selectedIndex === premiosData.length - 1 ? "opacity-50 cursor-default" : ""
        }`}
        onClick={handleRightClick}
      />
    </div>
  );
};

{/*
 "use client"
import { useState } from "react";
import Image from "next/image";
import { PremioCard } from "./PremioCard";
import { CopaMar, CopaHumo, Flechadere, FlechaIzque } from "@/public";

export const CardPremios = () => {
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
    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center relative">
      <div className="relative w-full flex justify-center items-center overflow-x-auto sm:overflow-visible">
        
        <Image
          src={FlechaIzque}
          alt="Flecha izquierda"
          width={48}
          height={48}
          className={`absolute left-2 sm:left-6 z-10 cursor-pointer transition-opacity ${
            selectedIndex === 0 ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
          onClick={handleLeftClick}
        />
     
        <div
          className="flex gap-6 sm:gap-8 items-center transition-transform duration-300"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {premiosData.map((premio, index) => (
            <div
              key={index}
              className="w-[328px] h-[335px] flex-shrink-0 snap-center"
            >
              <PremioCard
                title={premio.title}
                position={premio.position}
                seedName={premio.seedName}
                growerInfo={premio.growerInfo}
                imageUrl={premio.imageUrl}
              />
            </div>
          ))}
        </div>
        <Image
          src={Flechadere}
          alt="Flecha derecha"
          width={48}
          height={48}
          className={`absolute right-2 sm:right-6 z-10 cursor-pointer transition-opacity ${
            selectedIndex === premiosData.length - 1
              ? "opacity-50 pointer-events-none"
              : "opacity-100"
          }`}
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
}; 
   
*/}
