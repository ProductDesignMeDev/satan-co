import { Accordion } from "@/components";
import React from "react";

import { FondoFaqsDerecha, FondoFaqsIzquierda } from "@/public";
import Image from "next/image";

export default function Faq() {
  return (
    <div className="relative">
      {/* Contenedor de fondo para las imágenes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={FondoFaqsDerecha}
          alt="Fondo Derecha"
          className="lg:w-[293px] lg:h-[1372px] w-[130px] h-[93px] absolute top-0 right-0"
        />
        <Image
          src={FondoFaqsIzquierda}
          alt="Fondo Izquierda"
          className="lg:w-[293px] lg:h-[1372px] w-[130px] h-[93px] absolute top-0 left-0"
        />
      </div>

      <div className=" pt-24 ml-4 mr-4 lg:ml-24 lg:mr-24 font-poppins z-50">
        <h1 className="lg:text-3xl text-xl text-white lg:mt-24 lg:mb-9 mt-5 mb-3">
          FAQ&apos;s
        </h1>
        <div className="lg:mb-52 mb-7">
          <h3 className="text-white lg:text-[22px] text-[15px] font-medium leading-[33px] lg:mb-2">
            Generalidades sobre las Semillas de Cannabis
          </h3>
          <Accordion
            title="¿Cómo debo almacenar las semillas de cannabis?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
        </div>

        <div className="lg:mb-8 mb-7">
          <h3 className="text-white lg:text-[22px] text-[15px] font-medium leading-[33px] lg:mb-2">
            Guía para el Cultivo
          </h3>
          <Accordion
            title="¿Cómo germinar correctamente mis semillas de cannabis?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
          <Accordion
            title="¿Qué condiciones de luz y temperatura son ideales para el cultivo?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
          <Accordion
            title="¿Cuánto tiempo tarda en crecer una planta de cannabis desde la semilla?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
        </div>

        <div className="lg:mb-8 mb-7">
          <h3 className="text-white lg:text-[22px] text-[15px] font-medium leading-[33px] lg:mb-2">
            Cuidados y mantenimiento
          </h3>
          <Accordion
            title="¿Cómo prevenir plagas y enfermedades en mis plantas?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
          <Accordion
            title="¿Cuánta agua necesitan las plantas de cannabis?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
          <Accordion
            title="¿Qué tipo de fertilizantes debo usar para el cannabis?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
        </div>

        <div className="lg:mb-8 mb-7">
          <h3 className="text-white lg:text-[22px] text-[15px] font-medium leading-[33px] lg:mb-2">
            Preguntas sobre la Genética de las Semillas
          </h3>
          <Accordion
            title="¿Cómo elijo la mejor genética para mis necesidades (recreativas o medicinales)?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
          <Accordion
            title="¿Qué diferencia hay entre una cepa indica, sativa y híbrida?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
        </div>
        <div className="">
          <h3 className="text-white lg:text-[22px] text-[15px] font-medium leading-[33px] lg:mb-2">
            Cuidados y mantenimiento
          </h3>
          <Accordion
            title="¿Qué equipo básico necesito para empezar a cultivar cannabis?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
          <Accordion
            title="¿Cuáles son los errores más comunes al cultivar cannabis por primera vez?"
            answer="¿Qué miras curioso? Todavía no estan las respuestas. Jaja salu2."
          />
        </div>
      </div>
    </div>
  );
}
