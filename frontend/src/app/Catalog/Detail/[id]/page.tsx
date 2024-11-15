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
            const data1 = recommendingProduct(product[0].seed);
            const data2 = recommendingProduct(product[0].seed);
            setRelatedProducts(prevState => prevState ? [...prevState, data1] : [data1]);
            setRelatedProducts(prevState => prevState ? [...prevState, data2] : [data2])
        };
    }, [product]);  // Add `id` as a dependency to re-fetch when it changes



    if (!product) {
        return (
            <div>
                <h3 className="bg-white">Loading...</h3>
            </div>
        );
    }

    return (
        <Wrapper>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-4  bg-background  text-white font-poppins">
                <div className="col-span-4">
                    <h1 className="text-3xl font-poppins">{product[0].title}</h1>
                    <p className="font-poppins text-sm text-textColor3">{product[0].seed.toUpperCase()}</p>
                    <p className="text-sm font-poppins text-textColor2 ">SAT {product[0].THC}% IND {product[0].CBD}% THC {product[0].THC}%</p>
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
                    <section className="  ">
                        <Image
                            src={product[0].image || "opcion de imagen por defecto"}
                            alt={product[0].title}
                            width={328}
                            height={332}
                            className="w-328 h-332 object-cover object-cover rounded-lg border-4 border-textColor1 overflow-hidden"
                        />
                        <section />
                        <article className="mt-4">
                            <h3 className="text-lg">Detalle del producto</h3>
                            <p className="text-sm mt-1">{product[0].description}</p>
                        </article>

                    </section>

                    <section className="mt-6">
                        <h2 className="text-lg py-2 border-y-[3px] border-textColor1">Características</h2>
                        <ol className="space-y-1 text-sm">
                            <li className="border-b-[1px] border-textColor1 py-2 aling-center justify-center"><span className="font-semibold">THC:</span> {product[0].THC}%</li>
                            <li className="border-b-[1px] border-textColor1 py-2 aling-center justify-center"><span className="font-semibold">Semilla:</span> {product[0].seed}</li>
                            <li className="border-b-[1px] border-textColor1 py-2 aling-center justify-center"><span className="font-semibold">Aroma:</span> {product[0].scent}</li>
                            <li className="border-b-[1px] border-textColor1 py-2 aling-center justify-center"><span className="font-semibold">Efecto:</span> {product[0].effect}</li>
                            <li className="border-b-[1px] border-textColor1 py-2 aling-center justify-center"><span className="font-semibold">Lugar:</span> {product[0].place}</li>
                            <li className="border-b-[1px] border-textColor1 py-2 aling-center justify-center"><span className="font-semibold">Semanas de floración:</span> {product[0].weeks_of_flowering}</li>
                        </ol>
                    </section>



                    <section className="mt-6">
                        <h2 className="text-2xl text-center font-freckle text-textColor1 ">También te puede interesar</h2>
                        {relatedProducts && relatedProducts.map((related, index) => (
                            <div key={index}>
                                <ProductCard key={index} product={{ id: related.id, title: related.title, seed: related.seed, image: related.image }} />
                            </div>
                        ))}
                    </section>

                </main>



            </div>
        </Wrapper>
    );
}