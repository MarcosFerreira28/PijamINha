interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    gender: string;
    type: string;
    season: string;
    favorite: boolean;
    on_sale: boolean;
    sale_percent: number;
    menor: boolean;
}

export function filtrarProdutos(
    products: Product[],
    filtroGenero: string,
    filtroTipo: string,
    filtroEstacao: string,
    termoPesquisa: string
): Product[] {
    let produtosFiltrados = products;

    if (filtroGenero !== 'Todos') {
        produtosFiltrados = produtosFiltrados.filter(p => p.gender === filtroGenero);
    }
    if (filtroTipo !== 'Todos') {
        produtosFiltrados = produtosFiltrados.filter(p => p.type === filtroTipo);
    }
    if (filtroEstacao !== 'Todos') {
        produtosFiltrados = produtosFiltrados.filter(p => p.season === filtroEstacao);
    }
    if (termoPesquisa) {
        produtosFiltrados = produtosFiltrados.filter(p =>
            p.name.toLowerCase().includes(termoPesquisa.toLowerCase())
        );
    }

    return produtosFiltrados;
}