import { Wrapper } from "@/components";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import seeds from "@/utils/seeds.json";

export default function Catalog() {

    return (
        <Wrapper>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-4 gap-4 p-4 align-center justify-center">
                
                <section className="hidden lg:block md:block grid col-span-3 grid-cols-1 gap-4 justify-right bg-white ">

                </section>
                <span className="col-span-1 hidden lg:block md:block "></span>

                <section about="Catalogo de semillas" className="grid lg:col-span-8 md:col-span-8  sm:col-span-4 justify-right">
                    <h3 className="text-xl text-white">Catalogo de semillas</h3>
                    <div className="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-4 gap-4 items-center justify-right">

                        {seeds && seeds.map((product) => (

                            <ProductCard key={product.id} product={{ id: product.id, title: product.title, seed:product.seed , image: product.image }} />
                        )

                        )}
                    </div>
                </section>
            </div>
        </Wrapper >

    )
}


