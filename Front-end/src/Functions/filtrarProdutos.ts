import type { Pijama } from "../Types/Pijama";

export function filtrarProdutos(
    products: Pijama[],
    filtroGenero: string,
    filtroTipo: string,
    filtroEstacao: string,
    termoPesquisa: string
): Pijama[] {
    let produtosFiltrados = products;

    if (filtroGenero !== 'Todos') {
        produtosFiltrados = produtosFiltrados.filter(p => p.gender.toLowerCase() === filtroGenero.toLowerCase());
    }
    if (filtroTipo !== 'Todos') {
        produtosFiltrados = produtosFiltrados.filter(p => p.type.toLowerCase() === filtroTipo.toLowerCase());
    }
    if (filtroEstacao !== 'Todos') {
        produtosFiltrados = produtosFiltrados.filter(p => p.season.toLowerCase() === filtroEstacao.toLowerCase());
    }
    if (termoPesquisa) {
        produtosFiltrados = produtosFiltrados.filter(p =>
            p.name.toLowerCase().includes(termoPesquisa.toLowerCase())
        );
    }

    return produtosFiltrados;
}