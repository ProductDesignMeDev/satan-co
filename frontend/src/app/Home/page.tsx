import { HomeCard, TestimonyCard, TestimonyCardCarousel } from "@/components";
import {
  SpicyBanana,
  MoonCake,
  SunsetFire,
  HumoInicioIzquierda,
  HumoInicioDerecha,
  EllipseInicioDerecha,
  EllipseInicioIzquierda,
} from "@/public";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  const cardsData = [
    { imageSrc: MoonCake, title: "Spicy Banana" },
    { imageSrc: SpicyBanana, title: "Spicy Banana" },
    { imageSrc: SunsetFire, title: "Sunset Fire" },
  ];

  const testimonyData = [
    {
      image: "Imagen",
      name: "Emiliano Barrientos",
      testimonial:
        "“La web es intuitiva y me encanta poder explorar variedades y efectos de forma sencilla. ¡Muy útil y bien organizada!”",
    },
    {
      image: "Imagen",
      name: "Leandro Brangi",
      testimonial:
        "“Me transmite confianza con su diseño profesional y la información clara sobre cada variedad. Excelente para aprender.”",
    },
    {
      image: "Imagen",
      name: "Facundo Nuñez",
      testimonial:
        "“Las semillas germinaron rápidamente y las plantas crecieron fuertes; fue gratificante ver el proceso desde el inicio. ¡Muy recomendable!”",
    },
    {
      image: "Imagen",
      name: "Adrián Sánchez",
      testimonial:
        "“Nunca pensé que cultivar sería tan fácil. Las semillas dieron plantas robustas y de calidad. Estoy muy satisfecho con el resultado.”",
    },
  ];

  return (
    <div className="flex flex-col ">
      <div className="w-full lg:h-[579px] h-[255px] bg-slate-300 pt-24 text-center flex justify-center items-center">
        <p>Banner</p>
      </div>

      <div className=" ml-4 mr-4 lg:ml-24 lg:mr-24">
        <div className="">
          <div>
            <Image
              src={HumoInicioIzquierda}
              alt="HumoInicioIzquierda"
              width={120}
              height={330}
              className="lg:w-[272px] lg:h-[479px] absolute lg:mt-28 mt-0  left-0 -z-50"
            />
          </div>
          <div>
            <Image
              src={HumoInicioDerecha}
              alt="HumoInicioDerecha"
              width={167}
              height={350}
              className="lg:w-[257px] lg:h-[540px] absolute lg:mt-28 mt-0  right-0 -z-50"
            />
          </div>
        </div>

        <h1 className="text-[25px] text-[#ff31ff] lg:text-[40px] font-normal font-freckle leading-[60px] text-outline text-center lg:mt-28 lg:mb-4 mt-6 mb-3">
          Las más elegidas
        </h1>

        <div className="flex lg:flex-row lg:justify-between flex-col items-center z-10">
          {cardsData.map((card, index) => (
            <HomeCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              isZoomed={index === 1}
            />
          ))}
        </div>
      </div>
      <div className="lg:block hidden">
        <div>
          <Image
            src={EllipseInicioIzquierda}
            alt="HumoInicioIzquierda"
            width={120}
            height={330}
            className=" absolute lg:mt-[-200px]  left-0 -z-50 lg:w-[419px] lg:h-[419px]"
          />
        </div>
        <div>
          <Image
            src={EllipseInicioDerecha}
            alt="HumoInicioDerecha"
            width={167}
            height={350}
            className=" absolute lg:mt-28 mt-0  right-0 -z-50 lg:w-[419px] lg:h-[419px]"
          />
        </div>
      </div>
      <div className=" ml-4 mr-4 lg:ml-24 lg:mr-24 lg:mb-28 mb-20 ">
        <h1 className="text-[25px] text-[#ff31ff] lg:text-[40px] font-normal font-freckle leading-[60px] text-outline text-center mb-4">
          Testimonios de clientes
        </h1>
        {/* Carrusel para mobile */}
        <div className="lg:hidden">
          <TestimonyCardCarousel testimonies={testimonyData} />
        </div>

        {/* Contenedor sin scroll para desktop */}
        <div className="hidden lg:flex lg:justify-between z-10">
          {testimonyData.map((testimony, index) => (
            <TestimonyCard
              key={index}
              image={testimony.image}
              name={testimony.name}
              testimonial={testimony.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
