export type CardPijama = {
    //talvez inserir o id
    name: string;
    price: number;
    image: string;
    favorite: boolean;
    on_sale: boolean;
    sale_percent: number;
    menor: boolean;
    //Verificar se as outras colunas da tabela deveriam estar nesse tipo(como descrição e etc)
    // eu acredito que não mas para outras páginas talvez seja necessário. 
    // Nesse caso pode criar um tipo Pijama com tudo
}