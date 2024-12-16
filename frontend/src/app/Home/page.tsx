import { HomeCard, TestimonyCard, TestimonyCardCarousel } from "@/components";
import {
  HumoInicioIzquierda,
  HumoInicioDerecha,
  EllipseInicioDerecha,
  EllipseInicioIzquierda,
  BannerCopaDelMar,
  Testimonio1,
  Testimonio2,
  Testimonio3,
  Testimonio4,
} from "@/public";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explora el Mundo del Cannabis | Inicio",
  description:
    "Explora el mundo del cannabis con información confiable sobre variedades, beneficios, cultivo y más. Descubre un espacio educativo y responsable para usuarios interesados en el cannabis",
};

export default function HomePage() {
  const cardsData = [
    {
      imageSrc:
        "https://res.cloudinary.com/dp59p3lfo/image/upload/v1731532559/satanico-Semilla-foto-fem-Bud%C3%ADn-2.jpg",
      title: "Spicy Banana",
      link: "/Catalog/Detail/5?title=Spicy%20Banana&description=En%20esta%20cruza%20de%20un%20clon%20de%20Strawberry%20Banana%20seleccionado%20por%20un%20amigo%20cultivador%20uruguayo%20y%20la%20Gelatto%2033%2C%20podemos%20encontrar%20un%20inigualable%20olor%20a%20Banana%20Split%2C%20con%20toques%20picantes%20y%20cremosos%2C%20consiguiendo%20tanto%20en%20interior%20y%20exterior%20excelente%20rendimiento.%20Tiene%20excelente%20devolución%20en%20las%20diferentes%20técnicas%20de%20extracción%20sin%20solvente.&seed=Foto%252FFEM%2C%20High%2520THC",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dp59p3lfo/image/upload/v1733776592/Semilla-foto-fem-Bud%C3%ADn-1_e5qfva.jpg",
      title: "Budín",
      link: "/Catalog/Detail/9?title=Budín&description=Este%20cruce%20de%20nuestros%20dos%20cortes%20preferidos%20de%20Wedding%20Cake%2C%20nos%20entrega%20un%20exquisito%20aroma%20a%20Budín%20de%20limón%20y%20frutos%20secos%20con%20toques%20de%20frutos%20rojos%20y%20caramelo%20que%20perduran%20en%20nuestro%20paladar%20aún%20al%20tiempo%20de%20apagarla.%20Poseedora%20de%20una%20buena%20distancia%20internodal%2C%20lo%20que%20la%20hace%20nuestra%20compañera%20ideal%20para%20el%20cultivo%20exterior.&seed=Foto%252FFEM%2C%20High%2520THC",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dp59p3lfo/image/upload/v1733777873/SunsetFire_ivlhtg.jpg",
      title: "Sunset Fire",
      link: "/Catalog/Detail/6?title=Sunset%20Fire&description=Ananá%2C%20crema%2C%20manzana%2C%20caramelos%20y%20chicles%2C%20son%20sólo%20algunas%20de%20las%20palabras%20que%20se%20nos%20vienen%20a%20la%20mente%20cuando%20olemos%20y%20saboreamos%20una%20Sunset%20Fire.%20Este%20multipremiado%20cruce%20de%20Gelato%2033%20y%20Sunset%20Sherbet%20viene%20a%20sorprendernos%20con%20su%20impresionante%20vigor%2C%20excelente%20producción%20y%20mezcla%20de%20olores%20extremadamente%20complejo&seed=Foto%252FFEM%2C%20High%2520THC",
    },
  ];

  const testimonyData = [
    {
      image: Testimonio1,
      name: "Carlos Ramírez",
      testimonial:
        "“La web es intuitiva y me encanta poder explorar variedades y efectos de forma sencilla. ¡Muy útil y bien organizada!”",
    },
    {
      image: Testimonio2,
      name: "Luis Fernández",
      testimonial:
        "“Me transmite confianza con su diseño profesional y la información clara sobre cada variedad. Excelente para aprender.”",
    },
    {
      image: Testimonio3,
      name: "Andrés Martínez",
      testimonial:
        "“Las semillas germinaron rápidamente y las plantas crecieron fuertes; fue gratificante ver el proceso desde el inicio. ¡Muy recomendable!”",
    },
    {
      image: Testimonio4,
      name: "Javier Gómez",
      testimonial:
        "“Nunca pensé que cultivar sería tan fácil. Las semillas dieron plantas robustas y de calidad. Estoy muy satisfecho con el resultado.”",
    },
  ];

  return (
    <div className="flex flex-col max-w-[1366px] mx-auto">
      <div className="w-full lg:h-[579px] h-[255px] lg:pt-32 pt-16 text-center flex justify-center items-center">
        <Image
          src={BannerCopaDelMar}
          alt="BannerCopaDelMar"
          layout="responsive"
        />
      </div>

      <div className=" ml-4 mr-4 lg:ml-24 lg:mr-24">
        <div className="">
          <div>
            <Image
              src={HumoInicioIzquierda}
              alt="HumoInicioIzquierda"
              className="lg:w-[272px] lg:h-[479px] w-[120px] h-[230px] absolute lg:mt-28 mt-0  left-0 -z-50"
            />
          </div>
          <div>
            <Image
              src={HumoInicioDerecha}
              alt="HumoInicioDerecha"
              className="lg:w-[257px] lg:h-[540px] w-[167px] h-[350px] absolute lg:mt-28 mt-0  right-0 -z-50"
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
              link={card.link}
            />
          ))}
        </div>
      </div>
      <div className="lg:block hidden">
        <div>
          <Image
            src={EllipseInicioIzquierda}
            alt="HumoInicioIzquierda"
            className=" absolute lg:mt-[-200px]  left-0 -z-50 lg:w-[419px] lg:h-[419px]"
          />
        </div>
        <div>
          <Image
            src={EllipseInicioDerecha}
            alt="HumoInicioDerecha"
            className=" absolute lg:mt-28 mt-0  right-0 -z-50 lg:w-[419px] lg:h-[419px]"
          />
        </div>
      </div>
      <div className=" ml-4 mr-4 lg:ml-24 lg:mr-24 lg:mb-28 mb-20 ">
        <h1 className="text-[25px] text-[#ff31ff] lg:text-[40px] font-normal font-freckle leading-[60px] text-outline text-center mb-4">
          Testimonios de clientes
        </h1>
        {/* Carrusel para mobile */}
        <div className="lg:hidden flex items-center justify-center">
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
