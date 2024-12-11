import { Accordion } from "@/components";
import React from "react";

import { FondoFaqsDerecha, FondoFaqsIzquierda } from "@/public";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Todo lo que Necesitas Saber sobre Cannabis",
  description:
    "Encuentra respuestas a las preguntas más frecuentes sobre cannabis. Todo lo que necesitas saber sobre usos, variedades, beneficios y más, explicado de forma clara y sencilla.",
};

export default function Faq() {
  return (
    <div className="relative mb-9 lg:mb-28">
      {/* Contenedor de fondo para las imágenes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={FondoFaqsDerecha}
          alt="Fondo Derecha"
          className="lg:w-[293px] lg:h-[1372px] w-[138.13px] h-[648px] mt-20 lg:mt-0 absolute top-0 right-0"
        />
        <Image
          src={FondoFaqsIzquierda}
          alt="Fondo Izquierda"
          className="lg:w-[293px] lg:h-[1372px] w-[138.13px] h-[648px] mt-20 lg:mt-0 absolute top-0 left-0"
        />
      </div>

      <div className=" pt-24 ml-4 mr-4 lg:ml-24 lg:mr-24 font-poppins z-50">
        <h1 className="lg:text-3xl text-xl text-white lg:mt-24 lg:mb-9 mt-5 mb-3">
          FAQ&apos;s
        </h1>
        <div className="lg:mb-8 mb-7">
          <h3 className="text-white lg:text-[22px] text-xs font-normal lg:font-medium leading-[18px] lg:leading-[33px] lg:mb-2">
            Generalidades sobre las Semillas de{" "}
            <br className="lg:hidden block" />
            Cannabis
          </h3>
          <Accordion
            title="¿Cómo debo almacenar las semillas de cannabis?"
            answer="Las semillas deben almacenarse en un lugar fresco, seco y oscuro, preferiblemente en un recipiente hermético y refrigerado para prolongar su viabilidad."
          />
          <Accordion
            title="¿Cuál es la diferencia entre semillas regulares, feminizadas y autoflorecientes?"
            answer="Las semillas regulares producen tanto plantas masculinas como femeninas; las feminizadas producen solo plantas femeninas, y las autoflorecientes florecen automáticamente sin necesidad de cambios en el fotoperiodo."
          />
          <Accordion
            title="¿Cuál es la tasa de germinación de las semillas?"
            answer="La tasa de germinación suele depender de la genética y el almacenamiento, pero con el cuidado adecuado, nuestras semillas tienen una alta tasa de éxito."
          />
          <Accordion
            title="¿Puedo cultivar cannabis a partir de estas semillas en interiores y exteriores?"
            answer="Sí, muchas de nuestras semillas son adecuadas tanto para cultivo interior como exterior. Consulta las descripciones específicas de cada semilla para conocer sus características."
          />
          <Accordion
            title="¿Cuánto tiempo tardan las plantas en florecer?"
            answer="Esto depende de la variedad. Las autoflorecientes suelen florecer en 8-12 semanas, mientras que las feminizadas pueden tardar entre 8 y 14 semanas, dependiendo de la genética."
          />
        </div>

        <div className="lg:mb-8 mb-7">
          <h3 className="text-white lg:text-[22px] text-xs font-normal lg:font-medium leading-[18px] lg:leading-[33px] lg:mb-2">
            Generalidades sobre el cuidado de <br className="lg:hidden block" />
            la planta
          </h3>
          <Accordion
            title="¿Qué nutrientes necesitan las plantas de cannabis?"
            answer="Las plantas requieren nitrógeno, fósforo y potasio, además de micronutrientes específicos en cada etapa de crecimiento."
          />
          <Accordion
            title="¿Cuánta agua necesita una planta de cannabis?"
            answer="Las plantas de cannabis necesitan suficiente agua para mantenerse hidratadas, pero es importante evitar el riego excesivo. Como regla general, riega solo cuando la capa superior del sustrato esté seca al tacto."
          />
          <Accordion
            title="¿Cuál es la mejor luz para cultivar cannabis?"
            answer="Para interiores, se recomienda usar luces LED o HPS con espectro completo. En exteriores, el cannabis prospera con al menos 6-8 horas de luz solar directa al día."
          />
          <Accordion
            title="¿Cuál es la temperatura y humedad ideal para el cultivo de cannabis?"
            answer="Durante la fase vegetativa, la temperatura ideal es de 20-28 °C y la humedad entre 50-70%. En floración, baja la humedad a 40-50% y mantén la temperatura en 18-26 °C."
          />
          <Accordion
            title="¿Por qué mis hojas se están poniendo amarillas?"
            answer="Las hojas amarillas pueden indicar deficiencias de nutrientes, riego excesivo o problemas de pH. Identifica el problema revisando la dieta de la planta y ajustando el pH o la frecuencia de riego según sea necesario."
          />
          <Accordion
            title="¿Qué tipo de nutrientes necesita una planta de cannabis en cada fase?"
            answer="Durante la fase vegetativa, se requiere más nitrógeno. En la fase de floración, aumenta el fósforo y el potasio mientras reduces el nitrógeno."
          />
        </div>

        <div className="lg:mb-8 mb-7">
          <h3 className="text-white lg:text-[22px] text-xs font-normal lg:font-medium leading-[18px] lg:leading-[33px] lg:mb-2">
            Tips útiles para el cuidado de la planta{" "}
            <br className="lg:hidden block" />
            de Cannabis
          </h3>
          <Accordion
            title="Controla el pH del agua y del sustrato"
            answer="Mantén el pH entre 6 y 7 en suelo y entre 5.5 y 6.5 en hidroponía para asegurar que la planta absorba los nutrientes de manera óptima."
          />
          <Accordion
            title="Evita el exceso de nutrientes"
            answer="El sobrealimentar a las plantas puede causar quemaduras en las hojas. Sigue las recomendaciones del fabricante de los fertilizantes y ajusta las cantidades gradualmente."
          />
          <Accordion
            title="Prevención de plagas"
            answer="Revisa las hojas regularmente para detectar posibles plagas, como ácaros o mosca blanca. Puedes utilizar jabón potásico o aceite de neem para controlarlas de manera natural."
          />
          <Accordion
            title="Ventilación adecuada"
            answer="En interiores, la ventilación ayuda a prevenir moho y hongos, además de fortalecer los tallos. Usa un ventilador para mantener el flujo de aire."
          />
          <Accordion
            title="Poda y entrenamiento de la planta"
            answer="La poda y técnicas como el LST (Low-Stress Training) permiten mejorar la distribución de luz y el flujo de aire, aumentando así el rendimiento de la planta."
          />
        </div>
      </div>
    </div>
  );
}
