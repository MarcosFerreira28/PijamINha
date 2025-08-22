interface PaginatedResult<T> {
    items: T[];
    totalPaginas: number;
}

export function paginacaoPijamas<T>(
    items: T[],
    paginaAtual: number,
    cardsPorPagina: number
): PaginatedResult<T> {
    const totalPaginas = Math.ceil(items.length / cardsPorPagina);
    const indiceFinal = paginaAtual * cardsPorPagina;
    const indiceInicial = indiceFinal - cardsPorPagina;
    const itemsPaginados = items.slice(indiceInicial, indiceFinal);

    return {
        items: itemsPaginados,
        totalPaginas: totalPaginas
    };
}