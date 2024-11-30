import { DetailComponent } from "@/components"
import { DetailProps } from "@/types"
import { Metadata } from "next"


export async function generateMetadata(props : DetailProps): Promise<Metadata> {
    

    console.log(props)
    const productTitle = props?.searchParams?.title; // Ajusta según tu lógica para obtener el título
    const productDescription = props?.searchParams?.description;
    const productSeed = props?.searchParams?.seed
    ? Array.isArray(props.searchParams.seed)
      ? props.searchParams.seed.map((seed: string) => (seed as string).replace(/%20/g, " ")).join(", ")
      : typeof props.searchParams.seed === "string"
        ? (props.searchParams.seed as string).replace(/%20/g, " ")
        : ""
    : "";

    return {
        title: `${productTitle} | Todo sobre ${productSeed}`,
        description: productDescription,
        keywords: [`${productTitle} cannabis, Variedad ${productSeed}, ${productTitle} características`],

    };
}

export default function DetailProduct(props: DetailProps) {

    console.log(props)
    
    return (
        
        <DetailComponent {...props} />
    )
}
