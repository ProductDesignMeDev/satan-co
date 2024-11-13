export enum SEED {
    LOW_THC = "Low THC",
    HIGH_THC = "High THC",
    FOTO_FEM = "Foto Fem",
    DROP_SUNSET_FIRE = "Drop Sunset Fire",
    AUTOFLORECIENTES = "Autoflorecientes",
    MIX_FEM_FOTO = "Mix Fem Foto",
}

export enum SCENT {
    CITRICO = "Cítrino",
    BANANA_SPLIT = "Banana Split",
    CREMA = "Crema",
    LIMON = "Limón",
    FRUTAL = "Frutal",
    CARAMELO = "Caramelo",
    HASH = "Hash",
    CITRONELA = "Citronela",
    FLORAL = "Floral",
    BUDIN = "Budín",
    CHOCOLATE = "Chocolate",
    FRAMBUESA = "Frambuesa",
    DULCE = "Dulce",
    KUSH = "Kush"
}

export enum WEEKS_OF_FLOWERING {
    EXTERIOR = "Exterior",
    INTERIOR = "Interior"
}

export interface ProductProps {
    id: string;
    title: string;
    seed: string;
    scent: string[];
    THC: string;
    image: string;
    description: string;
    isAvalible: boolean;
    weeks_of_flowering: string;
    place: string[];
    effect: string;

}

export interface ProductListprops {
    products: ProductProps[]
}


export interface ProductCardProps {
    product: Pick<ProductProps, 'id' | 'title' | 'seed' | 'image'>
}


export interface PropertyDetailProduct {
    product: ProductProps;
}

