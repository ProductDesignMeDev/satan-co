"use client"

// import { Metadata } from "next";
import { Spinner, Wrapper } from "@/components";
import { ProductCard } from "@/components";
import { FilterBar } from "@/components";
import seeds from "@/utils/seeds.json";
import { filterByParameter } from "@/utils/productServices";
import { useState } from "react";
import { Dropdown } from "@/public";
import Image from "next/image";
import { x } from "@/public"




export default function CatalogComponent() {

    const [filter, setFilter] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<typeof seeds>([]);
    const [isVisible, setIsVisible] = useState(false)



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

        if (!filteredProducts) {
            return (
                <div className="flex items-center justify-center lg:w-[100%] lg:h-[768px] md:w-[100%] md:h-[768px] w-[100%] h-[800px]">
                    <Spinner size="100" colorText="#FAFAFA" />
                </div>
            );
        }
    return (
        < Wrapper >
            <div className="grid md:grid-cols-12 align-center gap-4 justify-center">

                <section id="filterDesktop" className="hidden lg:block md:block grid col-span-3 grid-cols-1 gap-4 justify-right lg:mt-36 z-10 sticky top-32 max-h-[80vh] overflow-y-auto">
                    <FilterBar state={filter} setState={setFilter} filter={filtrado} resetFilter={resetFilter} stateFilter={filteredProducts} />
                </section>

                <section id="filterMobile" className={`sm:hidden col-span-4 w-[330px] w-360px h-full ${isVisible ? "mb-[100%]" : "mb-2"}`}>

                    <button onClick={hiddenFilters} className=" ">
                        <div className=" flex gap-2">

                            <p className={`font-poppins text-textColor3 text-2xl ${isVisible ? "absolute right-4 mt-8 mr-4" : ""}`}> {isVisible ? <Image src={x} alt="Dropdown" width={26} height={26} /> : `Filtrar por`}</p>
                            {!isVisible && (<Image src={Dropdown} alt="Dropdown" width={20} height={20} className="object-contain" />)}
                        </div>

                    </button>
                    <div className="grid col-span-4 gap-4 justify-right mt-6 h-[100vh]" style={{ display: isVisible ? "block" : "none" }}>
                        <FilterBar state={filter} setState={setFilter} filter={filtrado} resetFilter={resetFilter} stateFilter={filteredProducts} />
                    </div>

                </section>
                <div className="absolute top-[100%] left w-[415px] h-[415px] -translate-x-1/2 -translate-y-1/2 rounded-[419px] bg-[rgba(118,0,171,0.4)] blur-[125px] hidden md:block"></div>

                <span className="col-span-1 hidden lg:block md:block "></span>

                <section className="lg:col-span-8 sm:cols-span-8 gap-4 col-span-4 justify-right text-4 lg:mt-24 " about="Catalogo de semillas -z-10">
                    <div className={`${isVisible ? "hidden" : ""}`}>
                        <h3 className="font-poppins text-base text-white lg:text-xl font-normal leading-[27px] md:pl-6 lg:pl-0">Catálogo de semillas</h3>
                        <div className="grid grid-cols-2 lg:mb-36 gap-4 mt-4 mb-4 ">


                            {filteredProducts.length > 0
                                ? filteredProducts.map((product) => (
                                    <div key={product.id}  >
                                        <ProductCard product={{ id: product.id, title: product.title, seed: product.seed, image: product.image, description: product.description}} />
                                    </div>
                                )
                                )
                                : seeds.map((product) => (
                                    <div key={product.id}  >
                                        <ProductCard product={{ id: product.id, title: product.title, seed: product.seed, image: product.image, description: product.description }} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="absolute right-[0px] lg:w-[415px] lg:h-[415px] w-[205px] h-[205px] -translate-x-2/2 -translate-y-3/6 rounded-[419px] bg-[rgba(118,0,171,0.4)] blur-[125px] -z-0"></div>
                    </section>

            </div>
        </Wrapper >

    )
}


