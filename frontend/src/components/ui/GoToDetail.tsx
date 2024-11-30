
import { toDetailProps } from "@/types";
// import {useRouter} from "next/router";

export default function GoToDetail({ id, title, description, children, seed }: toDetailProps) {

    // const router = useRouter() 

    const goDetail = () => {
        const currentPath = window.location.pathname;
        
        const targetPath = `/Catalog/Detail/${id}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&seed=${encodeURIComponent(seed.map((s) => encodeURIComponent(s)).join(", "))}`;

        // Verificar si la ruta actual ya contiene "Detail" y si el id es diferente
        if (currentPath.includes("Detail")) {
            // Si el id es diferente, solo cambia el id
            const currentId = currentPath.split("/").pop(); // Obtiene el id actual de la ruta
            if (currentId !== id) {
                console.log("contenía detail diferente id")
                window.location.href = targetPath;
            }
        } else {
            // Si no estamos en una ruta de detalles, redirige al path completo
            console.log("No estaba en el detalle")
            window.location.href = targetPath;

        }
    }

    return (
        <button  onClick={() => goDetail()} >
            {children}
        </button>
    )
}
