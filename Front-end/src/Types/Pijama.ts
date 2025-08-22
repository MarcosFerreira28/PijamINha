export type Pijama = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    season: string;
    type: string;
    gender: string;
    pajamaSize: Sizes[];
    favorite: boolean;
    onSale: boolean;
    salePercent?: number;
}

export type CardPijama = Pick<Pijama, 'id' | 'name' | 'price' | 'image' | 'favorite' | 'onSale' | 'salePercent'> & {
    menor: boolean
};

type Sizes ={
    id: number,
    size: string,
    stockQuantity: number,
    pajamaId: number
}