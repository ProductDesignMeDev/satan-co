"use client";

import { useState, useEffect } from "react";
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

  // Manejo del teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handleLeftClick();
      } else if (event.key === "ArrowRight") {
        handleRightClick();
      }
    };

    // Agregar el listener al cargar el componente
    window.addEventListener("keydown", handleKeyDown);

    // Eliminar el listener al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]); // Re-registrar el evento si selectedIndex cambia

  return (
    <div className="w-full max-w-[1194px] h-[458px] mx-auto flex flex-col sm:flex-row justify-center items-center rounded-lg relative p-4">
      {/* Flecha izquierda */}
      <Image
        src={FlechaIzque}
        alt="Flecha izquierda"
        width={48}
        height={48}
        className={`cursor-pointer absolute -ml-9 left-4 z-10 hidden sm:block md:left-6 lg:w-[38px] lg:h-[38px] ${
          selectedIndex === 0 ? "opacity-50 cursor-default" : ""
        }`}
        onClick={handleLeftClick}
      />

      {/* Contenedor de las tarjetas (responsive y scrollable en móvil) */}
      <div
        className="flex w-full sm:justify-center items-center p-4 gap-3 md:gap-4 lg:gap-4 overflow-x-auto overflow-y-hidden sm:overflow-hidden snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <style jsx>{`
          /* Ocultar scroll para navegadores basados en WebKit */
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
                  ? "sm:scale-110 sm:z-10 md:scale-105" // Tarjeta seleccionada en tablet
                  : "sm:backdrop-blur-sm sm:opacity-50 sm:scale-90 md:opacity-75" // Blur y opacidad en tablet
              }`}
              style={{
                width: "100%", // Ajuste para mostrar solo 1 card en móvil
                maxWidth: "328px", // Asegura el tamaño en móvil y tablet
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

      {/* Flecha derecha */}
      <Image
        src={Flechadere}
        alt="Flecha derecha"
        width={48}
        height={48}
        className={`cursor-pointer absolute  right-16 z-10 hidden sm:block md:right-6 lg:w-[48px] lg:h-[48px] ${
          selectedIndex === premiosData.length - 1
            ? "opacity-50 cursor-default"
            : ""
        }`}
        onClick={handleRightClick}
      />
    </div>
  );
}
