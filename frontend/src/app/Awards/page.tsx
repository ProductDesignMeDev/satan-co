import { Metadata } from "next";
import { HumoInicioIzquierda, HumoInicioDerecha, Copa, EllipseInicioIzquierda, EllipseInicioDerecha } from "@/public";
import Image from "next/image";
import { AwardsCards } from "@/components";

export const metadata: Metadata = {
  title: "Premios y Logros | Calidad Certificada en Cannabis",
  description:
    "Descubre nuestros premios y logros que certifican la calidad en el mundo del cannabis. Un reconocimiento a nuestro compromiso con la excelencia y la innovación.",
};

export default function Awards() {
  return (
    <div className="relative text-center py-12 px-4 sm:px-0 mt-12 sm:mt-36">
      <div className="ml-4 mr-4 lg:ml-24 lg:mr-24">
        <div>
          <div>
            <Image
              src={HumoInicioIzquierda}
              alt="Fondo izquierda"
              className="lg:w-[272px] lg:h-[479px] w-[120px] h-[230px] absolute lg:mt-28 mt-72 sm:mt-12 left-0 -z-50"
            />
          </div>
          <div>
            <Image
              src={HumoInicioDerecha}
              alt="Fondo derecha"
              className="lg:w-[257px] lg:h-[479px] w-[120px] h-[230px] absolute lg:mt-28 mt-72 sm:mt-12 right-0 -z-50"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[574px] h-auto sm:h-[60px] mx-auto mt-2 sm:mt-[108px]">
        <h2 className="text-[28px] sm:text-[40px] font-poppins text-white">
          Premios y Reconocimientos
        </h2>
      </div>
      <div className="w-full sm:w-[768px] h-auto sm:h-[196px] mx-auto mt-[32px] sm:mt-0">
        <p className="mt-4 text-[14px] sm:text-[16px] font-poppins text-white max-w-full sm:max-w-[680px] mx-auto leading-[1.6]">
          En Satan&Co, cada semilla que producimos es el resultado de una
          cuidadosa investigación, pasión por la excelencia y compromiso con la
          innovación. Nos enorgullece haber sido reconocidos por diversas
          instituciones en el ambiente del cannabis, que han valorado la
          calidad, consistencia y diversidad de nuestras semillas.
        </p>
        <div className="my-4 sm:my-8"></div>
        <p className="mt-4 text-[14px] sm:text-[16px] font-poppins text-white max-w-full sm:max-w-[680px] mx-auto leading-[1.6]">
          Estos premios y condecoraciones reflejan nuestra dedicación a ofrecer
          productos de primera categoría a nuestros clientes y nuestra apuesta
          por la mejora continua en cada etapa del cultivo. ¡Gracias por ser
          parte de nuestro crecimiento y éxito!
        </p>
      </div>
      <div className="mt-[60px] sm:mt-28">
        <div className="flex justify-center">
          <Image
            src={Copa}
            alt="Premio"
            width={40}
            height={85}
            className="sm:w-[50px] sm:h-[105.56px]"
          />
        </div>
        <h2 className="mt-4 text-xl sm:text-2xl font-freckle text-primary4 w-full max-w-[359px] mx-auto">
          Premios por proyecto
        </h2>
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
        <div className="mt-8 sm:mt-12 flex justify-center">
          <AwardsCards />
        </div>
      </div>
    </div>
  );
}