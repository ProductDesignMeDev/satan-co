"use client"

import AccordionFilter from "../Accordion/AccordionFilter"
import { SEED, SCENT, PLACE } from "@/types/product.model"
import { CestoBasura } from "@/public";
import Image from "next/image";


console.log(Object.values(SEED))

export default function FilterBar() {
    return (
        <section className="">
            <h2 className="font-poppins text-3xl text-textColor3 border-b-[3px] border-borderpink pb-4 pl-1">Filtrar por</h2>
            <AccordionFilter title="Tipo de semilla" properties={Object.values(SEED)} />
            <AccordionFilter title="Aromas" properties={Object.values(SCENT)} />
            <AccordionFilter title="Lugar de cultivo" properties={Object.values(PLACE)} />

            <div className="flex flex-col">
                <button className="font-poppins text-prymary1 text-xl bg-textColor3 py-[12px] rounded-3xl mb-5">Aplicar filtro</button>
                <button className="flex flex-row justify-center p-2 items-center font-poppins text-textColor4 text-xl bg-transparent border-2 border-textColor4 py-[12px] rounded-3xl mb-5">Borrar filtro<Image className="ml-5" src={CestoBasura} alt="Limpiar filtros" width={20} height={20} /></button>
                
            </div>

        </section>
    )
}