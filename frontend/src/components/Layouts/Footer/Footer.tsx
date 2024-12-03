"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Logo,
  IconInstagram,
  HumoFooterDerechaPNG,
  HumoFooterIzquierdaPNG,
  Fuegofooter300Pgn,
} from "@/public";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname(); // Obtiene la ruta actual
  const isFaqPage = pathname === "/Faq"; // Verifica si estamos en la página de FAQ's

  return (
    <footer
      role="contentinfo"
      className={`${
        isFaqPage ? "bg-transparent" : "bg-transparent"
      } text-white w-full relative lg:h-[478px] h-[294px] items-center text-center justify-center flex transition-all duration-300 font-poppins`}
    >
      {/* Humos */}
      <div className="flex flex-row justify-between items-end h-full">
        <div className="flex bottom-0 left-0 absolute">
          <Image
            src={HumoFooterIzquierdaPNG}
            alt="Logo"
            className="lg:w-[398px] lg:h-[301px] w-[130px] h-[93px]"
          />
        </div>
        <div className="flex bottom-0 right-0 absolute">
          <Image
            src={HumoFooterDerechaPNG}
            alt="Logo"
            className="lg:w-[398px] lg:h-[301px] w-[130px] h-[93px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 items-center text-center justify-center">
        <div className="flex flex-col items-center text-center justify-center mb-[40px] lg:mb-0">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              className="lg:w-[236px] lg:h-[209px] w-[110px] h-[98px] lg:mb-[19px] mb-0"
            />
          </div>
          <div>
            <p className="text-white font-medium lg:text-lg lg:leading-[27px] text-[15px] leading-snug lg:mb-[5px] mb-0">
              Redes Sociales
            </p>
          </div>
          <Link
            href="https://www.instagram.com/satanyco.genetics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row lg:space-x-1 lg:mb-[30px] mb-[15px] items-center">
              <Image
                src={IconInstagram}
                alt="Logo"
                className="w-[25px] h-[25px]"
              />
              <p className="text-white lg:text-[15px] font-normal lg:leading-snug text-xs leading-[18px]">
                satanyco.genetics
              </p>
            </div>
          </Link>
          <div>
            <p className="text-white lg:text-sm font-normal lg:leading-[21px] text-[10px] leading-[15px] lg:mb-[17px] mb-0">
              © 2024 Satan&Co X Product Design Me
            </p>
          </div>
        </div>
        <Image
          src={Fuegofooter300Pgn}
          alt="Logo"
          className="lg:w-[1366px] lg:h-[138px]"
        />
      </div>
    </footer>
  );
}
