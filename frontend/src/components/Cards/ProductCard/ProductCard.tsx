"use client"

import Image from "next/image"
import { ProductCardProps } from "@/types"
import GoToDetail from "@/components/ui/GoToDetail"

export default function CatalogCard({ product }: ProductCardProps) {
    return (
        <GoToDetail id={product.id}>
            <article id={product.id} className="flex flex-col text-align-left md:w-[100%] md:h-[417px] w-[156px] h-[164px] justify-center align-center gap-1 mb-4">

                <div className=" border-2 border-borderpink rounded-xl mb-4  overflow-hidden ">

                    <Image className="w-full h-full object-cover"
                        src={product.image}
                        alt={product.title}
                        width={375}
                        height={320}
                    />
                </div >
                <h2 className="text-textColor3 lg-text-base ">{product.title}</h2>
                <h3 className="text-textColor2">{product.seed.toUpperCase()}</h3>
            </article>
        </GoToDetail>

    )
}