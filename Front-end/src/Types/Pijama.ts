export type Pijama = {
    //talvez inserir o id
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
    //Verificar se as outras colunas da tabela deveriam estar nesse tipo
    // eu acredito que não
}

export type CardPijama = Pick<Pijama, 'name' | 'price' | 'image' | 'favorite' | 'onSale' | 'salePercent'> & {
    menor: boolean
};

type Sizes ={
    id: number,
    size: string,
    stockQuantity: number,
    pajamaId: number
}