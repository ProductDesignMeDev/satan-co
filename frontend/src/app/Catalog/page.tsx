"use client"

import { Wrapper } from "@/components";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import FilterBar from "@/components/FilterBar/FilterBar";
import seeds from "@/utils/seeds.json";
import { filterByParameter } from "@/utils/productServices";
import { useState } from "react";




export default function Catalog() {

    const [filter, setFilter] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<typeof seeds>([]);


    console.log(filter, filteredProducts)

    const filtrado = () => {
        const result = filterByParameter(filter); // Filtrar los productos según el estado
        setFilteredProducts(result); // Actualizar el estado con los productos filtrados
    };

    const resetFilter = () => {
        setFilteredProducts([]);
    }

    return (
        <Wrapper>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-4  align-center gap-2 justify-center">

                <section className="hidden lg:block md:block grid col-span-3 grid-cols-1 gap-4 justify-right mt-6">
                    <FilterBar state={filter} setState={setFilter} filter={filtrado} resetFilter={resetFilter} stateFilter={filteredProducts} />
                </section>

                <span className="col-span-1 hidden lg:block md:block "></span>

                <section about="Catalogo de semillas"
                    className="grid lg:col-span-8 md:cols-span-8 md:cols-span-8 col-span-4 justify-right">
                    <h3 className="font-poppins text-base text-white text-lg font-medium leading-[27px]">Catalogo de semillas</h3>
                    <div className="grid grid-cols-2 gap-2 mt-4">


                        {filteredProducts.length > 0
                            ? filteredProducts.map((product) => (
                                <div key={product.id}  >
                                    <ProductCard product={{ id: product.id, title: product.title, seed: product.seed, image: product.image }} />
                                </div>
                            )
                            )
                            : seeds.map((product) => (
                                <div key={product.id}  >
                                    <ProductCard product={{ id: product.id, title: product.title, seed: product.seed, image: product.image }} />
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </Wrapper >

    )
}


