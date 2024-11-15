import seeds from "@/utils/seeds.json"


export function searchSeed(id: string) {
    const data = seeds.filter((seed) => seed.id.toString() === id.toString())
    console.log(data)
    return data
}

//Esta funcionalidad lo que hace tomar el tipo de semilla que se esta renderizando en la vista
//y hacer un match por el tipo de sewmillas y traer una semilla random de la lista
export function recommendingProduct(typeSeed:string){
    const data = seeds.filter((seed)=> seed.seed === typeSeed)
    const ramdom = Math.floor(Math.random() * data.length)
    console.log(data[ramdom])
    return data[ramdom]
    

}
