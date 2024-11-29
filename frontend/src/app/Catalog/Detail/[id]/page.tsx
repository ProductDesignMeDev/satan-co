import { DetailComponent } from "@/components"
import { DetailProps } from "@/types"




export default function DetailProduct(props: DetailProps) {

    console.log(props)
    
    return (
        <DetailComponent {...props} />
    )
}
