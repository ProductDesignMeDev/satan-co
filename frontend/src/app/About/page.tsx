import Image from "next/image";
import { Metadata } from "next";
import { HumoQuienes1, HumoQuienes2 } from "@/public";
import { AboutSection } from "@/components";

export const metadata: Metadata = {
  title: "Conoce Nuestro Equipo | Expertos en el Mundo del Cannabis",
  description:
    "Conoce a nuestro equipo de expertos en cannabis. Profesionales apasionados y experimentados dedicados a brindar información confiable y de calidad sobre el mundo del cannabis.",
};

export default function About() {
  return (
      <div className="relative flex flex-col items-center justify-center space-y-12 mt-2 sm:mt-36 text-center py-12 px-4 sm:px-0">
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
          <h2 className="text-[24px] sm:text-[40px] font-freckle text-center text-primary4">
            ¿Quién es Satan&Co?
          </h2>
        </div>
        <div className="w-full max-w-[328px] sm:max-w-[888px] bg-[#e05bff]/15 rounded-3xl flex items-center justify-center p-4 sm:p-0 relative">
          <div className="w-full max-w-[281px] sm:max-w-[812px] rounded-lg p-4 sm:p-8 flex items-center sm:ml-8">
            <div className="text-white font-poppins text-[14px] sm:text-[20px] leading-relaxed sm:leading-[1.6]">
              <p className="mb-2 sm:mb-4">
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
        <AboutSection />
      </div>
  );
}