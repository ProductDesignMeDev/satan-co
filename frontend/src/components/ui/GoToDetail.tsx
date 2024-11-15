
import { toDetailProps } from "@/types";
// import {useRouter} from "next/router";

export default function GoToDetail({ id, children }: toDetailProps) {

    // const router = useRouter() 

    const goDetail = () => {
        window.location.href = `Catalog/Detail/${id}`
        // router.push(`Catalog/Detail/${id}`)
    }

    return (
        <button onClick={() => goDetail()} >
            <p>Ver Detalles</p>
            {children}
        </button>
    )
}
