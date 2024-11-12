import { Wrapper } from "@/components";
import { Premio } from "@/public";
import Image from "next/image";
import { CardPremios } from "@/components/Cards/CardPremios/CardPremios";

export default function Awards() {
  return (
    <Wrapper>
      <div className="text-center py-12">
        <h2 className="text-[40px] font-poppins text-white">Premios y Reconocimientos</h2>
        <p className="mt-4 text-[16px] font-poppins text-white max-w-[600px] mx-auto">
          En Satan&Co, cada semilla que producimos es el resultado de una cuidadosa investigación, pasión por la excelencia y compromiso con la innovación. Nos enorgullece haber sido reconocidos por diversas instituciones en el ambiente del cannabis, que han valorado la calidad, consistencia y diversidad de nuestras semillas.
        </p>
        <div className="my-8"></div>
        <p className="mt-4 text-[16px] font-poppins text-white max-w-[600px] mx-auto">
          Estos premios y condecoraciones reflejan nuestra dedicación a ofrecer productos de primera categoría a nuestros clientes y nuestra apuesta por la mejora continua en cada etapa del cultivo. ¡Gracias por ser parte de nuestro crecimiento y éxito!
        </p>
        <div className="mt-12">
          <div className="flex justify-center">
            <Image src={Premio} alt="Premio" width={50} height={105.56} />
          </div>
          <h2 className="mt-4 text-2xl font-freckle text-primary4" style={{ width: "359px", margin: "0 auto" }}>
            Premios por proyecto
          </h2>
          <div className="mt-8 flex justify-center">
            <CardPremios />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}