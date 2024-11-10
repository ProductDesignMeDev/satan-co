import React from "react";
import Image from "next/image";
import {
  FuegoFooter,
  Logo,
  NubeFooterDerecha,
  NubeFooterIzquierda,
} from "@/public";

export default function Footer() {
  return (
    <main className="bg-background text-white relative lg:h-[478px] h-auto mt-[-1px]">
      {/* Contenido del footer */}
      <div className="flex flex-col items-center h-full">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={110}
            height={98}
            className="lg:w-[294px] lg:h-[210px]"
          />
        </div>
        <div className="flex flex-col items-center lg:mt-[-50px] mt-[-20px]">
          <p className="text-white text-[15px] font-medium font-['Poppins'] leading-snug lg:text-lg lg:leading-[27px]">
            Redes Sociales
          </p>
          <p className="text-white text-xs font-normal font-['Poppins'] leading-[18px] lg:text-[15px] lg:leading-snug">
            satanyco.genetics
          </p>
          <p className="text-white text-[10px] font-normal font-['Poppins'] leading-[15px] mt-8 lg:text-sm lg:leading-[21px]">
            © 2024 Satan&Co X Product Design Me
          </p>
        </div>
      </div>

      {/* Imagen fija en el fondo del footer */}
      <div className="absolute bottom-0 w-full h-auto z-10">
        <Image
          src={FuegoFooter}
          alt="FuegoFooter"
          layout="responsive"
          width={360}
          height={41.82}
          className="lg:w-[1366px] lg:h-[138px] object-cover"
        />
      </div>

      {/* Nubes en el fondo del footer */}
      <div className="flex flex-row justify-between absolute bottom-0 w-full h-auto">
        <Image
          src={NubeFooterIzquierda}
          alt="NubeFooterIzquierda"
          width={130}
          height={93}
          className="lg:w-[429px] lg:h-[307px]"
        />
        <Image
          src={NubeFooterDerecha}
          alt="NubeFooterDerecha"
          width={122}
          height={91}
          className="lg:w-[398px] lg:h-[301px]"
        />
      </div>
    </main>
  );
}
