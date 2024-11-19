"use client"

import { DetailProps } from "@/types"
import { recommendingProduct, getSeed } from "@/utils/productServices"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { ProductProps } from "@/types";
import { Wrapper } from "@/components";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";

export default function DetailIdProductSatan(props: DetailProps) {

    const [product, setProduct] = useState<ProductProps[] | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<ProductProps[] | null>(null);

    useEffect(() => {
        const data = getSeed(props.params.id);
        setProduct(data);
    }, [props.params.id]);  // Add `id` as a dependency to re-fetch when it changes

    useEffect(() => {
        if (product && product.length > 0) {
            const seedType = product[0].seed; // Consideramos `seed` de `product[0]`
            if (seedType) {
                const data1 = recommendingProduct(seedType);
                const data2 = recommendingProduct(seedType);
                setRelatedProducts([data1, data2]); // Evita múltiples llamadas redundantes

            }
        }
    }, [product]);



    if (!product) {
        return (
            <div>
                <h3 className="bg-white">Loading...</h3>
            </div>
        );
    }

    return (
        <Wrapper>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-4  bg-background  text-white font-poppins w-full h-full">
                <div className="col-span-4">
                    <h1 className="text-3xl font-poppins">{product[0].title}</h1>
                    <p className="font-poppins text-sm text-textColor3">{Array.isArray(product[0].seed) && product[0].seed.map((seeds) => seeds.toUpperCase()).join(", ")}</p>
                    <p className="text-sm font-poppins text-textColor2 ">SAT {product[0].THC} IND {product[0].CBD}% THC {product[0].THC}</p>
                </div>

                {/*Migas de pan */}
                <section className="hidden lg:block md:block container mx-auto mt-6 px-4 text-sm text-gray-400">
                    <span className="text-white">{product[0].title}</span>
                    <Link href="/Home" className="hover:text-white">Inicio</Link> {'>'}
                    <Link href="/Catalog" className="hover:text-white">Catálogo</Link> {'>'}
                </section>

                {/* Product Detail Section */}
                <main className="col-span-4 container mt-5 grid  ">
                    {/* Product Image */}
                    <section className="w-[328px] flex-shrink ">
                        <div className="relative w-[328px] h-[332px] overflow-hidden">
                            <Image
                                src={product[0].image || "/default-image.jpg"}
                                alt={product[0].title.toString()}
                                layout="fill"
                                className="object-cover rounded-lg border-4 border-textColor1"
                            />
                        </div>
                        <article className="mt-4">
                            <h3 className="text-lg">Detalle del producto</h3>
                            <p className="text-sm font-light mt-1">{product[0].description}</p>
                        </article>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-lg py-2 border-y-[3px] border-textColor1">Características</h2>
                        <ol className="space-y-1 text-sm">
                            <li className="grid grid-cols-[1fr_1fr] border-b-[1px] border-textColor1 py-2 pl-2 font-400">
                                <span >THC</span>
                                <span >{product[0].THC}</span>
                            </li>
                            <li className="grid grid-cols-[1fr_1fr] border-b-[1px] border-textColor1 py-2 pl-2">
                                <span >Semilla</span>
                                <span >{product[0].seed.map(seed => seed).join(", ")}</span>
                            </li>
                            <li className="grid grid-cols-[1fr_1fr] border-b-[1px] border-textColor1 py-2 pl-2">
                                <span >Aroma</span>
                                <span >{product[0].scent.map(scent => scent? scent : "Natural").join(", ")}</span>
                            </li>
                            <li className="grid grid-cols-[1fr_1fr] border-b-[1px] border-textColor1 py-2 pl-2">
                                <span >Efecto</span>
                                <span >{product[0].effect}</span>
                            </li>
                            <li className="grid grid-cols-[1fr_1fr] border-b-[1px] border-textColor1 py-2 pl-2">
                                <span >Lugar</span>
                                <span >{product[0].place.map(places => places).join("/")}</span>
                            </li>
                            <li className="grid grid-cols-[1fr_1fr] border-b-[1px] border-textColor1 py-2 pl-2">
                                <span>Semanas de floración</span>
                                <span>{product[0].weeks_of_flowering}</span>
                            </li>
                        </ol>
                    </section>


                    <section className="mt-6 mb-20 ">
                        <h2 className="text-2xl text-center font-freckle text-textColor1 ">También te puede interesar</h2>
                        <div className="flex justify-center gap-4 mt-5 h-[164px]">
                            {relatedProducts && relatedProducts.map((related, index) => (
                                <div key={index} >
                                    <ProductCard product={related} />
                                </div>
                            ))}
                        </div>
                    </section>

                </main>



            </div>
        </Wrapper>
    );
}