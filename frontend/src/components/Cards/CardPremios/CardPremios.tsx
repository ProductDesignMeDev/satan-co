"use client"

import { useState } from "react";
import Image from "next/image";
import { PremioCard } from "./PremioCard";
import { CopaMar, CopaPocoHumo, FlechaIzquierd, FlechaDerecha } from "@/public";

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
      imageUrl: CopaPocoHumo,
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
    <div className="w-[1194px] h-[458px] mx-auto flex justify-center items-center rounded-lg relative p-4">
      <Image
        src={FlechaIzquierd}
        alt="Flecha izquierda"
        width={48}
        height={48}
        className="cursor-pointer absolute left-4 z-10"
        onClick={handleLeftClick}
      />
      <div className="flex">
        {premiosData.map((premio, index) => {
          const isLeftCard = index < selectedIndex;
          const isRightCard = index > selectedIndex;

          return (
            <div
              key={index}
              className={`transition-transform duration-300 transform ${
                index === selectedIndex
                  ? "scale-125 z-10"
                  : "scale-100"
              } ${isLeftCard ? "mr-11" : ""} ${isRightCard ? "ml-11" : ""}`}
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
        src={FlechaDerecha}
        alt="Flecha derecha"
        width={48}
        height={48}
        className="cursor-pointer absolute right-4 z-10"
        onClick={handleRightClick}
      />
    </div>
  );
};