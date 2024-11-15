import seeds from "@/utils/seeds.json"


export default function searchSeed(id: string) {
    const data = seeds.filter((seed) => seed.id.toString() === id.toString())
    console.log(data)
    return data
}