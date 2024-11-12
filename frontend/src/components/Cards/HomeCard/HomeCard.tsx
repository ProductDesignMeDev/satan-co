import React from "react";
import Image from "next/image";

interface HomeCardProps {
  imageSrc: string;
  title: string;
  isZoomed?: boolean;
}

export default function HomeCard({ imageSrc, title, isZoomed }: HomeCardProps) {
  return (
    <main className="flex flex-col items-center lg:w-[375px] lg:h-[370px] lg:mb-28 lg:mt-14">
      <div
        className={`flex justify-center lg:w-[375px] ${
          isZoomed ? "lg:h-[390px] lg:mt-[-45px] mt-0" : "lg:h-[310px]"
        } w-[328px] h-[213px]`}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={328}
          height={213}
          className="rounded-[20px] border-2 border-[#e05bff] object-cover lg:w-[375px] lg:h-full"
        />
      </div>
      <div className="text-[#e05bff] text-2xl font-medium leading-9 text-center mt-5 mb-8">
        {title}
      </div>
    </main>
  );
}
