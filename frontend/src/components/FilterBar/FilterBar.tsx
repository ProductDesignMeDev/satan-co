"use client";

import AccordionFilter from "../Accordion/AccordionFilter";
import { SEED, SCENT, PLACE } from "@/types/product.model";
import { CestoBasura, CestoBasura2 } from "@/public";
import Image from "next/image";
import { catalogState } from "@/types";
import { useEffect, useState } from "react";

export default function FilterBar({ state, setState, filter, resetFilter, stateFilter }: catalogState) {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null); // Estado para controlar qué acordeón está abierto
    const [isDesktop, setIsDesktop] = useState<boolean>()

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    useEffect(() => {
        if (window.innerWidth > 600) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)
        }
    }, [])


    return (
        <section>
            <h2 className="font-poppins lg:text-3xl lg:px-4 text-xl text-textColor3 border-b-[3px] border-borderpink pb-4 px-5">
                Filtrar por
            </h2>
            <AccordionFilter title="Tipo de semilla" properties={Object.values(SEED)} state={state} setState={setState} isOpen={openAccordion === "Tipo de semilla"} toggleAccordion={() => toggleAccordion("Tipo de semilla")} />
            <AccordionFilter title="Aromas" properties={Object.values(SCENT)} state={state} setState={setState} isOpen={openAccordion === "Aromas"} toggleAccordion={() => toggleAccordion("Aromas")} />
            <AccordionFilter title="Lugar de cultivo" properties={Object.values(PLACE)} state={state} setState={setState} isOpen={openAccordion === "Lugar de cultivo"} toggleAccordion={() => toggleAccordion("Lugar de cultivo")}
            />

            <div className="flex lg:flex-col flex-row align-center justify-center gap-4 mt-5 lg:w-[100%]">
                <button
                    onClick={filter}
                    className="font-poppins md:order-1 order-2 lg:text-prymary1 lg:text-2xl font-normal text-base rounded-full bg-textColor3 lg:mb-5 mb-5 lg:w-full md:h-[55px] w-[147px] h-[40px]  "
                >
                    Aplicar filtro
                </button>

                <button
                    onClick={resetFilter}
                    className={`flex flex-row md:order-2 order-1 justify-center lg:p-2 items-center font-poppins lg:text-2xl font-normal text-base rounded-full border-2 mb-5 lg:w-full lg:h-[55px] w-[147px] h-[40px]
                        ${stateFilter.length > 0 || state.length > 0 ? 'text-textColor3  border-textColor3' : 'text-textColor4 border-textColor4'}`}
                >
                    Borrar filtro
                    {isDesktop && (
                        stateFilter.length > 0 || state.length > 0 ? <Image
                            className="ml-5"
                            src={CestoBasura}
                            alt="Limpiar filtros"
                            width={24}
                            height={24}
                        /> : <Image
                            className="ml-5"
                            src={CestoBasura2}
                            alt="Limpiar filtros"
                            width={24}
                            height={24}
                        />
                    )}
                </button>
            </div>

        </section>
    );
}