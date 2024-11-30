"use client"

import Image from "next/image"
import { ProductCardProps } from "@/types"
import GoToDetail from "@/components/ui/GoToDetail"

export default function CatalogCard({ product }: ProductCardProps) {
    return (
        <GoToDetail id={product.id} title={product.title.toString()} description={product?.description || ""} seed={product?.seed || []}>
            <article
                id={product.id}
                className="flex flex-col text-align-left lg:w-[377px] lg:h-[417px] md:w-[275px] md:h-[320px] w-[156px] h-[164px] md:mx-6 lg:mx-0 text-left mb-4 font-poppins mt-4"
            >
                <div className="relative group  lg:rounded-3xl rounded-xl overflow-hidden sm:border-3 border-2 bg-borderpinkgradient bg-clip-border border-transparent group lg:mb-4 mb-1">
                    <Image
                        src={product.image}
                        alt={product.title?.toString()}
                        width={165}
                        height={133}
                        className="object-cover transition-opacity duration-300 group-hover:opacity-60 lg:w-[375px] lg:h-[360px] md:w-[275px] md:h-[220px] w-[156px] h-[133px] "
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-buttongradiant shadow-lg text-white text-xl py-2 px-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver detalle
                    </div>
                </div>
                <div className="p-0 mt-1">
                    <p className="text-textColor3 lg:text-2xl text-sm truncate font-normal">{product.title}</p>
                    <p className="text-textColor2 lg:text-xl text-sm font-normal truncate">{Array.isArray(product.seed) && product.seed.map((seed: string) => seed.toUpperCase()).join(", ")}</p>
                </div>
            </article>
        </GoToDetail>
    );
}