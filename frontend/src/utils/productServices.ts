import seeds from "@/utils/seeds.json"

//Trae un producto mediante el uso de su id
export function getSeed(id: string) {
    const data = seeds.filter((seed) => seed.id === id)
    return data
}

//Esta funcionalidad lo que hace tomar el tipo de semilla que se esta renderizando en la vista
//y hacer un match por el tipo de sewmillas y traer una semilla random de la lista
export function recommendingProductBySeed(typeSeed: string | string[]) {
    const data = seeds.filter((seed) => {
        // Asegúrate de que `seed.seed` sea un array antes de compararlo
        if (Array.isArray(seed.seed) && Array.isArray(typeSeed)) {
            return typeSeed.every((param) => seed.seed.includes(param)); // Todos los valores de `typeSeed` deben estar en `seed.seed`
        }
        if (typeof seed.seed === "string" && typeof typeSeed === "string") {
            return seed.seed === typeSeed; // Comparación directa para strings
        }
        return false;
    });

    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

export function recommendingProductByScent(typeScent: string | string[]) {
    const data = seeds.filter((scent) => {
        // Asegúrate de que `seed.seed` sea un array antes de compararlo
        if (Array.isArray(scent.scent) && Array.isArray(typeScent)) {
            return typeScent.every((param) => scent.scent.includes(param)); // Todos los valores de `typeSeed` deben estar en `seed.seed`
        }
        if (typeof scent.scent === "string" && typeof typeScent === "string") {
            return scent.scent === typeScent; // Comparación directa para strings
        }
        return false;
    });

    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

//Esta función va a recibir un array de parametros que mirará a la lista completa de semillas
//Estas semillas filtradas se guardaran en un array de objetos paralelo que será el que se renderice
//El filtrado tiene que tener la posibilidad de poder ir eliminando los parametros a medida 
//que se van deseleccionando (extrayendo del array).
export function filterByParameter(parameters: string[]) {
    if (!parameters || parameters.length === 0) {
        return seeds;
    }

    const filteredSeeds = seeds.filter(seed =>
        parameters.some(param =>
            seed.seed?.includes(param) ||  // Compara con la propiedad `seed`
            seed.scent?.includes(param) || // Compara con la propiedad `scent`
            seed.place?.includes(param)    // Compara con la propiedad `place`
        )
    );

    return filteredSeeds;
}