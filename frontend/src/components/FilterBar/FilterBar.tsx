"use client";

import AccordionFilter from "../Accordion/AccordionFilter";
import { SEED, SCENT, PLACE } from "@/types/product.model";
import { CestoBasura } from "@/public";
import Image from "next/image";
import { catalogState } from "@/types";
import { useState } from "react";

export default function FilterBar({ state, setState, filter, resetFilter, stateFilter }: catalogState) {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null); // Estado para controlar qué acordeón está abierto

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };


    return (
        <section>
            <h2 className="font-poppins text-3xl text-textColor3 border-b-[3px] border-borderpink pb-4 pl-1">
                Filtrar por
            </h2>
            <AccordionFilter title="Tipo de semilla" properties={Object.values(SEED)} state={state} setState={setState} isOpen={openAccordion === "Tipo de semilla"} toggleAccordion={() => toggleAccordion("Tipo de semilla")} />
            <AccordionFilter title="Aromas" properties={Object.values(SCENT)} state={state} setState={setState} isOpen={openAccordion === "Aromas"} toggleAccordion={() => toggleAccordion("Aromas")} />
            <AccordionFilter title="Lugar de cultivo" properties={Object.values(PLACE)} state={state} setState={setState} isOpen={openAccordion === "Lugar de cultivo"} toggleAccordion={() => toggleAccordion("Lugar de cultivo")}
 />

            <div className="flex flex-col">
                <button
                    onClick={filter}
                    className="font-poppins text-prymary1 text-xl bg-textColor3 py-[12px] rounded-3xl mb-5"
                >
                    Aplicar filtro
                </button>
                <button
                    onClick={resetFilter}
                    className={`flex flex-row justify-center p-2 items-center font-poppins text-xl py-[12px] border-2 border-textColor4 rounded-3xl mb-5
                        ${stateFilter.length > 0 ? 'text-prymary1 bg-textColor3 border-white' : 'text-textColor4 bg-transparent border-textColor4'}`}
                >
                    Borrar filtro
                    <Image
                        className="ml-5"
                        src={CestoBasura}
                        alt="Limpiar filtros"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </section>
    );
}