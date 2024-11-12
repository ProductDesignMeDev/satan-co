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
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : premiosData.length - 1));
  };

  const handleRightClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex < premiosData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="w-full max-w-[1194px] h-[458px] sm:w-[1194px] mx-auto flex justify-center items-center rounded-lg relative p-4">
      <Image
        src={FlechaIzque}
        alt="Flecha izquierda"
        width={36}
        height={36}
        className="cursor-pointer absolute left-4 z-10 hidden sm:block sm:w-[48px] sm:h-[48px]"
        onClick={handleLeftClick}
      />
      <div className="flex overflow-x-scroll sm:overflow-visible w-full justify-center items-center">
        {premiosData.map((premio, index) => {
          const isLeftCard = index < selectedIndex;
          const isRightCard = index > selectedIndex;

          return (
            <div
              key={index}
              className={`transition-transform duration-300 transform ${
                index === selectedIndex
                  ? "scale-110 sm:scale-125 z-10"
                  : "scale-100"
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
        width={36}
        height={36}
        className="cursor-pointer absolute right-4 z-10 hidden sm:block sm:w-[48px] sm:h-[48px]"
        onClick={handleRightClick}
      />
    </div>
  );
};