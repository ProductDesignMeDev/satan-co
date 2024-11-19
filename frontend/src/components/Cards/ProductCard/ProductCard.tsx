"use client"

import Image from "next/image"
import { ProductCardProps } from "@/types"
import GoToDetail from "@/components/ui/GoToDetail"

export default function CatalogCard({ product }: ProductCardProps) {
    return (
        <GoToDetail id={product.id}>
            <article
                id={product.id}
                className="flex flex-col text-align-left md:w-[377px] md:h-[417px] w-[156px] h-[164px] text-left mb-4 font-poppins"
            >
                <div className="relative mb-1 rounded-xl overflow-hidden border-2 border-borderpink group ">
                    <Image
                        src={product.image}
                        alt={product.title?.toString()}
                        width={156}
                        height={133}
                        className="object-cover transition-opacity duration-300 group-hover:opacity-75 lg:w-[375px] lg:h-[320px] md:w-relative md:h-relative w-[156px] h-[133px]"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-buttongradiant shadow-lg text-white text-xl py-2 px-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver detalle
                    </div>
                </div>
                <div className="p-0">
                    <p className="text-textColor3 lg:text-base text-sm truncate">{product.title}</p>
                    <p className="text-textColor2 text-sm truncate">{Array.isArray(product.seed) && product.seed.map((seed: string) => seed.toUpperCase()).join(", ")}</p>
                </div>
            </article>
        </GoToDetail>
    );
}