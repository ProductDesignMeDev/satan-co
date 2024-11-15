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
    <div className="w-full max-w-[1194px] h-auto sm:h-[458px] sm:w-[1194px] mx-auto flex justify-center items-center rounded-lg relative p-4">
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
      <div className="flex overflow-x-scroll sm:overflow-visible w-full justify-center items-center">
        {premiosData.map((premio, index) => {
          const isLeftCard = index < selectedIndex;
          const isRightCard = index > selectedIndex;

          return (
            <div
              key={index}
              className={`transition-transform duration-300 ${
                index === selectedIndex ? "sm:scale-125 z-10" : ""
              } ${isLeftCard ? "mr-6 sm:mr-11" : ""} ${isRightCard ? "ml-6 sm:ml-11" : ""}`}
              style={{ width: "275px", height: "335px" }}
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