export enum SEED {
    LOW_THC = "Low THC",
    HIGH_THC = "High THC",
    FOTO_FEM = "Foto/FEM",
    DROP_SUNSET_FIRE = "Drop Sunset Fire",
    AUTOFLORECIENTES = "Autofloreciente",
    MIX_FEM_FOTO = "Mix Fem Fotoperiódico",
}

export enum SCENT {
    CITRICO = "Cítrico",
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

export enum PLACE {
    EXTERIOR = "Exterior",
    INTERIOR = "Interior"
}

export interface ProductProps {
    id: string;
    title: string | string[];
    seed: string | string[]; 
    scent: string[];
    THC: string;
    image: string;
    description: string;
    isAvailable: boolean;
    weeks_of_flowering: string;
    place: string[];
    effect?: string;
    CBD?: string;
    CBG?: string;
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


