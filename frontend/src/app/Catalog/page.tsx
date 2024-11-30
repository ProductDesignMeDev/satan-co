import { CatalogComponent } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Catálogo | Productos y Variedades de Cannabis",
    description:
        "Descubre nuestro catálogo de productos y variedades de cannabis. Encuentra descripciones detalladas y selecciona la opción ideal según tus necesidades y preferencias.",
    keywords: [ "Catálogo de cannabis", "Productos de cannabis", "Variedades de cannabis" ]

    };


export default function Catalog() {
    return (
        <CatalogComponent />
    )
}