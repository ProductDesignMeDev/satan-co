import React from "react";
import Image from "next/image";
import { Plantita } from "@/public";

export default function HomeCard() {
  return (
    <main className="flex flex-col items-center lg:w-[375px] lg:h-[370px]">
      <div>
        <Image
          src={Plantita}
          alt="Banner"
          width={375}
          height={310}
          className="rounded-[20px] border-2 border-[#e05bff]"
        />
      </div>
      <div className="text-[#e05bff] text-2xl font-medium  leading-9 text-center mt-5">
        {" "}
        Spicy Banana
      </div>
    </main>
  );
}
