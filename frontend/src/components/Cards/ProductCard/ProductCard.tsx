"use client"

import Image from "next/image"
import { ProductCardProps } from "@/types"
import GoToDetail from "@/components/ui/GoToDetail"

export default function CatalogCard({ product }: ProductCardProps) {
    return (
        <GoToDetail id={product.id}>
            <article
                id={product.id}
                className="flex flex-col text-align-left lg:w-[377px] lg:h-[417px] md:w-[275px] md:h-[320px] w-[156px] h-[164px] md:mx-6 lg:mx-0 text-left mb-4 font-poppins mt-4"
            >
                <div className="relative mb-1 rounded-xl overflow-hidden border-2 border-borderpink group ">
                    <Image
                        src={product.image}
                        alt={product.title?.toString()}
                        width={165}
                        height={133}
                        className="object-cover transition-opacity duration-300 group-hover:opacity-75 lg:w-[375px] lg:h-[320px]  md:w-[275px] md:h-[220px] w-[156px] h-[133px]"
                    />
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-buttongradiant shadow-lg text-white text-xl py-2 px-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver detalle
                    </div>
                </div>
                <div className="p-0 lg:mt-5 mt-1">
                    <p className="text-textColor3 lg:text-2xl text-sm truncate">{product.title}</p>
                    <p className="text-textColor2 lg:text-xl text-sm truncate">{Array.isArray(product.seed) && product.seed.map((seed: string) => seed.toUpperCase()).join(", ")}</p>
                </div>
            </article>
        </GoToDetail>
    );
}