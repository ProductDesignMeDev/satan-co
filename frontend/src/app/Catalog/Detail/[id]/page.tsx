import { DetailProps } from "@/types"
import  searchSeed from "@/utils/productServices"


export default function DetailIdProductSatan(props: DetailProps) {

            /////// Ahora toca hacer una busqueda en el array en base al id recibido por params y traer todas sus propiedades
    console.log(props.params.id)
    const id = props.params.id
    searchSeed(id)

    return (
       <div className="container"></div>
    );

}