"use client"

import AccordionFilter from "../Accordion/AccordionFilter"
import { SEED , SCENT } from "@/types/product.model"


console.log(Object.values(SEED))

export default function FilterBar() {
    return(
        <section className="">
            <h2 className="font-poppins text-2xl text-textColor3 border-b-2 border-borderpink pb-1 pl-1">Filtrar por</h2>
            <AccordionFilter title="Tipo de semilla" properties={Object.values(SEED)}/>
            <AccordionFilter title="Aromas" properties={Object.values(SCENT)}/>

            
        </section>
    )
}