import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HomeCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  isZoomed?: boolean;
  link: string;
}

export default function HomeCard({ imageSrc, title, isZoomed, link }: HomeCardProps) {
  return (
    <main className="relative flex flex-col items-center lg:w-[375px] lg:h-[370px] lg:mb-28 lg:mt-14 font-poppins group">
      <div
        className={`relative flex justify-center lg:w-[375px] ${
          isZoomed
            ? " lg:h-[400px] lg:mt-[-50px] lg:mb-[-20px] mt-0"
            : "lg:h-[310px]"
        } w-[328px] h-[213px] overflow-hidden rounded-[20px] border-2 border-[#e05bff]`}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={328}
          height={213}
          className="object-cover lg:w-[375px] lg:h-full transition-opacity duration-300 group-hover:opacity-60"
        />
        <Link href={link}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-buttongradiant shadow-lg text-white text-xl py-2 px-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver detalle
        </div>
        </Link>
      </div>
      <div className="text-[#e05bff] lg:text-2xl font-medium text-base leading-normal lg:leading-9 text-center lg:mt-5 mt-[10px] mb-8">
        {title}
      </div>
    </main>
  );
}
