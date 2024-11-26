"use client"

import { Wrapper } from "@/components";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import FilterBar from "@/components/FilterBar/FilterBar";
import seeds from "@/utils/seeds.json";
import { filterByParameter } from "@/utils/productServices";
import { useState } from "react";
import { Dropdown } from "@/public";
import Image from "next/image";
import x from "@/public/x.svg"
// import {metadata} from "@/utils/metadata/metaCatalog"



export default function Catalog() {
    
    const [filter, setFilter] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<typeof seeds>([]);
    const [isVisible, setIsVisible] = useState(false)
    


    console.log(filter, filteredProducts)

    const filtrado = () => {
        if (window.innerWidth > 600) {
            const result = filterByParameter(filter); // Filtrar los productos según el estado
            setFilteredProducts(result); // Actualizar el estado con los productos filtrados

        } else {
            const result = filterByParameter(filter); // Filtrar los productos según el estado
            setFilteredProducts(result); // Actualizar el estado con los productos filtrados
            hiddenFilters()
        }
    };

    const resetFilter = () => {
        if (window.innerWidth > 600) {
            setFilteredProducts([]);
            setFilter([])
        } else {
            setFilteredProducts([]);
            setFilter([])
            hiddenFilters()
        }
    }



    const hiddenFilters = () => {
        setIsVisible(!isVisible)
    }
    return (
        < Wrapper >
            <div className="grid md:grid-cols-12 align-center gap-4 justify-center">

                <section id="filterDesktop" className="hidden lg:block md:block grid col-span-3 grid-cols-1 gap-4 justify-right lg:mt-36 ">
                    <FilterBar state={filter} setState={setFilter} filter={filtrado} resetFilter={resetFilter} stateFilter={filteredProducts} />
                </section>

                <section id="filterMobile" className={`sm:hidden col-span-4 w-[330px] w-360px h-full ${isVisible ? "mb-[100%]" : "mb-2"}`}>

                    <button onClick={hiddenFilters} className=" ">
                        <div className=" flex gap-2">

                            <p className={`font-poppins text-textColor3 text-2xl ${isVisible ? "absolute right-4 mt-8 mr-4" : ""}`}> {isVisible ? <Image src={x} alt="Dropdown" width={26} height={26} /> : `Filtrar por`}</p>
                            {!isVisible && (<Image src={Dropdown} alt="Dropdown" width={20} height={20} className="object-contain" />)}
                        </div>

                    </button>
                    <div className="grid col-span-4 gap-4 justify-right mt-6 h-[100vh] " style={{ display: isVisible ? "block" : "none" }}>
                        <FilterBar state={filter} setState={setFilter} filter={filtrado} resetFilter={resetFilter} stateFilter={filteredProducts} />
                    </div>

                </section>

                <span className="col-span-1 hidden lg:block md:block "></span>

                <section className="lg:col-span-8 sm:cols-span-8 gap-4 col-span-4 justify-right text-4 lg:mt-24 " about="Catalogo de semillas">
                    <div className={`${isVisible ? "hidden" : ""}`}>
                        <h3 className="font-poppins text-base text-white lg:text-xl font-normal leading-[27px] md:pl-6 lg:pl-0">Catálogo de semillas</h3>
                        <div className="grid grid-cols-2 lg:mb-36 gap-4 mt-4 mb-4 ">


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
                    </div>
                </section>
            </div>
        </Wrapper >

    )
}


