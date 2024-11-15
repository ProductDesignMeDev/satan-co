import seeds from "@/utils/seeds.json"

//Trae un producto mediante el uso de su id
export function getSeed(id: string) {
    const data = seeds.filter((seed) => seed.id.toString() === id.toString())
    console.log(data)
    return data
}

//Esta funcionalidad lo que hace tomar el tipo de semilla que se esta renderizando en la vista
//y hacer un match por el tipo de sewmillas y traer una semilla random de la lista
export function recommendingProduct(typeSeed: string) {
    const data = seeds.filter((seed) => seed.seed === typeSeed)
    const ramdom = Math.floor(Math.random() * data.length)
    console.log(data[ramdom])
    return data[ramdom]


}

//Esta función va a recibir un array de parametros que mirará a la lista completa de semillas
//Estas semillas filtradas se guardaran en un array de objetos paralelo que será el que se renderice
//El filtrado tiene que tener la posibilidad de poder ir eliminando los parametros a medida 
//que se van deseleccionando (extrayendo del array).
export function filterByParameter(parameters: string[]) {
    if (!parameters || parameters.length === 0) {
        console.log("no hay parametros");
        return seeds;
    }

    const filteredSeeds = seeds.filter(seed =>
        parameters.every(param =>
            seed.seed?.includes(param) ||  // Compara con la propiedad `seed`
            seed.scent?.includes(param) || // Compara con la propiedad `scent`
            seed.place?.includes(param)    // Compara con la propiedad `place`
        )
    );

    console.log(filteredSeeds); // Muestra el resultado filtrado
    return filteredSeeds;
}