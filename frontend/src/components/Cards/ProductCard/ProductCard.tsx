import Image from "next/image"
import { ProductCardProps } from "@/types"

export default function CatalogCard({ product }: ProductCardProps) {
    return (
        <article id = {product.id} className = "flex flex-col text-align-left my-10 w-full h-full object-cover lg:col-span-4 md:col-span-4 sm:col-span-2">
            <div className="lg:w-[375px] lg:h-[320px] sm:w-[156px] sm:h-[164px] border-2 border-borderpink rounded-xl mb-5 overflow-hidden ">
                <Image className="w-full h-full object-cover" src={product.image} alt={product.title} width={375} height={320} />
            </div >
            <h2 className="text-textColor3 lg-text-base sm-text-xs line-height">{product.title}</h2>
            <h3 className="text-textColor2">{product.seed.toUpperCase()}</h3>
        </article>

    )
}