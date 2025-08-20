export type Pijama = {
    //talvez inserir o id
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    season: string;
    type: string | number;
    gender: string | number;
    favorite: boolean;
    on_sale: boolean;
    sale_percent?: number;
    //Verificar se as outras colunas da tabela deveriam estar nesse tipo
    // eu acredito que não
}

export type CardPijama = Pick<Pijama, 'name' | 'price' | 'image' | 'favorite' | 'on_sale' | 'sale_percent'> & {
    menor: boolean
};