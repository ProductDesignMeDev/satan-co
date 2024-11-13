import React from "react";
import Image from "next/image";

import {
  Logo,
  IconInstagram,
  HumoFooterDerechaPNG,
  HumoFooterIzquierdaPNG,
  FuegoFooterPNG,
} from "@/public";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-background text-white w-full relative lg:h-[478px] h-[294px] items-center text-center justify-center flex"
    >
      {/* Humos */}
      <div className="flex flex-row justify-between items-end h-full">
        <div className="flex bottom-0 left-0 absolute">
          <Image
            src={HumoFooterIzquierdaPNG}
            alt="Logo"
            width={130}
            height={93}
            className="lg:w-[398px] lg:h-[301px]"
          />
        </div>
        <div className="flex bottom-0 right-0 absolute">
          <Image
            src={HumoFooterDerechaPNG}
            alt="Logo"
            width={130}
            height={93}
            className="lg:w-[398px] lg:h-[301px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 items-center text-center justify-center">
        <div className="flex flex-col items-center text-center justify-center space-y-3 mb-[40px] lg:mb-0">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={110}
              height={98}
              className="lg:w-[236px] lg:h-[209px]"
            />
          </div>
          <div>
            <p className="text-white font-medium lg:text-lg lg:leading-[27px] text-[15px] leading-snug">
              Redes Sociales
            </p>
          </div>
          <div className="flex flex-row lg:space-x-2">
            <Image src={IconInstagram} alt="Logo" width={20} height={20} />
            <p className="text-white lg:text-[15px] font-normal lg:leading-snug text-xs leading-[18px]">
              satanyco.genetics
            </p>
          </div>
          <div>
            <p className="text-white lg:text-sm font-normal lg:leading-[21px] text-[10px] leading-[15px]">
              © 2024 Satan&Co X Product Design Me
            </p>
          </div>
        </div>
        <Image
          src={FuegoFooterPNG}
          alt="Logo"
          width={360}
          height={41}
          className="lg:w-full lg:h-[138px]"
        />
      </div>
    </footer>
  );
}
