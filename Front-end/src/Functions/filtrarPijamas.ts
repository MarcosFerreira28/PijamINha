import type { Pijama } from '../Types/Pijama';

export function filtrarPijamas(
    pijamas: Pijama[],
    filtroGenero: string,
    filtroTipo: string,
    filtroEstacao: string,
    termoPesquisa: string
): Pijama[] {
    let pijamasFiltrados = pijamas;
    if (filtroGenero && filtroGenero !== 'Todos') { 
        const generoMinusculo = filtroGenero.toLowerCase();
        pijamasFiltrados = pijamasFiltrados.filter(pijama => pijama.gender.toLowerCase() === generoMinusculo);
    }
    if (filtroTipo && filtroTipo !== 'Todos') {
        const tipoMinusculo = filtroTipo.toLowerCase();
        pijamasFiltrados = pijamasFiltrados.filter(pijama => pijama.type.toLowerCase() === tipoMinusculo);
    }
    if (filtroEstacao && filtroEstacao !== 'Todos') {
        const estacaoMinuscula = filtroEstacao.toLowerCase();
        pijamasFiltrados = pijamasFiltrados.filter(pijama => pijama.season.toLowerCase() === estacaoMinuscula);
    }
    if (termoPesquisa) {
        pijamasFiltrados = pijamasFiltrados.filter(pijama =>
            pijama.name.toLowerCase().includes(termoPesquisa.toLowerCase())
        );
    }

    return pijamasFiltrados;
}