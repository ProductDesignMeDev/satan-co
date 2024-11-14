import { PropertyDetailProduct } from "@/types";


export default function DetailProduct({ product }: PropertyDetailProduct) {

    return (
        <>
            <h1>{product.title}</h1>
            <h2>{product.seed}</h2>
            <h2>{product.scent}</h2>
            
        </>
    )
}