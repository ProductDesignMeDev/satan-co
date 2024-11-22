import Image from "next/image";
import { Metadata } from "next";
import { HumoQuienes1, HumoQuienes2, EllipseInicioIzquierda, EllipseInicioDerecha } from "@/public";
import { AboutSection } from "@/components";

export const metadata: Metadata = {
  title: "Conoce Nuestro Equipo | Expertos en el Mundo del Cannabis",
  description:
    "Conoce a nuestro equipo de expertos en cannabis. Profesionales apasionados y experimentados dedicados a brindar información confiable y de calidad sobre el mundo del cannabis.",
};

export default function About() {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-7 mt-2 sm:mt-36 text-center py-12 px-4 sm:px-0">
      <div className="ml-4 mr-4 lg:ml-24 lg:mr-24">
        <div>
          <div>
            <Image
              src={HumoQuienes1}
              alt="Fuego izquierda"
              className="lg:w-[266px] lg:h-[610px] w-[120px] h-[230px] absolute lg:mt-28 mt-96 sm:mt-48 left-0 -z-50"
            />
          </div>
          <div>
            <Image
              src={HumoQuienes2}
              alt="Fuego derecha"
              className="lg:w-[255px] lg:h-[572px] w-[120px] h-[230px] absolute lg:mt-28 mt-96 sm:mt-48 right-0 -z-50"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-[25px] sm:text-[40px] font-freckle text-center text-outline text-primary4">
          ¿Quién es Satan&Co?
        </h2>
      </div>
      {/* Ajuste de margen entre título y bloque de texto solo en móviles */}
      <div className="w-full max-w-[328px] sm:max-w-[888px] border-2 border-borderpink bg-[#e05bff]/15 rounded-3xl flex items-center justify-center p-4 sm:p-0 relative mt-[10px] sm:mt-12">
        <div className="w-full max-w-[281px] sm:max-w-[812px] rounded-lg p-4 sm:p-8 flex items-center sm:ml-8">
          <div className="text-white font-poppins text-[12px] sm:text-[20px] leading-relaxed sm:leading-[1.4] tracking-wide">
            <p className="mb-4 sm:mb-6">
              Somos un equipo de familia y amigos cuya pasión por el Cannabis nos
              llevó a iniciar este proyecto con el afán de acercar a los
              cultivadores variedades de primerísimo nivel a un precio accesible,
              socializar la información sobre prácticas y productos para el
              cultivo profesional.
            </p>
            <p>
              Contamos con una amplia trayectoria comprobable en la producción de
              semillas a gran escala, cultivos a gran escala con experiencias
              nacionales e internacionales.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div>
          <Image
            src={EllipseInicioIzquierda}
            alt="HumoInicioIzquierda"
            className="absolute lg:mt-[100px] left-0 -z-50 lg:w-[419px] lg:h-[419px]"
          />
        </div>
        <div>
          <Image
            src={EllipseInicioDerecha}
            alt="HumoInicioDerecha"
            className="absolute lg:mt-96 mt-0 right-0 -z-50 lg:w-[419px] lg:h-[419px]"
          />
        </div>
      </div>
      <AboutSection />
    </div>
  );
}