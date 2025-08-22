import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import styles from './styles.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import { filtrarProdutos } from '../../Functions/filtrarProdutos';
import { paginacaoProdutos } from '../../Functions/paginacaoProdutos';
import setaesquerda from '../../assets/setaesquerda.svg';
import setadireita from '../../Assets/setadireita.svg';
import lupa from '../../assets/lupa.png';
import type { Pijama } from '../../Types/Pijama';
import axios from 'axios';


export default function Pijaminhas() {
    const [searchParams] = useSearchParams();
    const [pijamas, setPijamas] = useState<Pijama[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3333/pajamas")
        .then(response => setPijamas(response.data))
        .catch((error => console.error("Erro ao buscar pijamas:", error)))
    }, []);


    const [produtosExibidos, setProdutosExibidos] = useState(pijamas);
    const [filtroGenero, setFiltroGenero] = useState('Todos');
    const [filtroTipo, setFiltroTipo] = useState('Todos');
    const [filtroEstacao, setFiltroEstacao] = useState('Todos');
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1);
    const cardsPorPagina = 12;

    useEffect(() => {
        const generoNaUrl = searchParams.get('gender');
        const tipoNaUrl = searchParams.get('type');

        setFiltroGenero(generoNaUrl || 'Todos');
        setFiltroTipo(tipoNaUrl || 'Todos');
        setPaginaAtual(1);
    }, [searchParams]);

    useEffect(() => {
        const produtosFiltrados = filtrarProdutos(
            pijamas,
            filtroGenero,
            filtroTipo,
            filtroEstacao,
            termoPesquisa
        );
        
        setProdutosExibidos(produtosFiltrados);
        setPaginaAtual(1);
    }, [filtroGenero, filtroTipo, filtroEstacao, termoPesquisa]);

    const { items: produtosPaginados, totalPaginas } = paginacaoProdutos(
        produtosExibidos,
        paginaAtual,
        cardsPorPagina
    );
    
    const handleNextPage = () => {
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const handlePrevPage = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    const renderizarPaginas = () => {
        const paginasVisiveis = new Set<number>();
        const maximoVisivel = 5;

        if (totalPaginas <= maximoVisivel) {
            for (let i = 1; i <= totalPaginas; i++) {
                paginasVisiveis.add(i);
            }
        } else {
            paginasVisiveis.add(1);
            paginasVisiveis.add(2);
            for (let i = paginaAtual - 1; i <= paginaAtual + 1; i++) {
                if (i > 0 && i <= totalPaginas) {
                    paginasVisiveis.add(i);
                }
            }
            paginasVisiveis.add(totalPaginas - 1);
            paginasVisiveis.add(totalPaginas);
        }
        
        const paginasOrdenadas = Array.from(paginasVisiveis).sort((a, b) => a - b);
        
        const elementosPagina = [];
        let ultimoItem = 0;
        
        for (const pagina of paginasOrdenadas) {
            if (pagina > ultimoItem + 1) {
                elementosPagina.push(
                    <span key={`ellipsis-${ultimoItem}`} className={styles.ellipsis}>...</span>
                );
            }
            elementosPagina.push(
                <button
                    key={pagina}
                    onClick={() => setPaginaAtual(pagina)}
                    className={`${styles.botaoPagina} ${pagina === paginaAtual ? styles.botaoAtivo : ''}`}
                >
                    {pagina}
                </button>
            );
            ultimoItem = pagina;
        }
        return elementosPagina;
    };

    return (
        <div className={styles.pagina}>
            <div className={styles.filtrosContainer}>
                <div className={styles.filtroPesquisa}>
                    <input
                        type="text"
                        placeholder="Faça uma pesquisa..."
                        value={termoPesquisa}
                        onChange={(e) => setTermoPesquisa(e.target.value)}
                    />
                    <img src={lupa} alt="Lupa" className={styles.iconeLupa} />
                </div>
                <div className={styles.filtroOpcoes}>
                    <select value={filtroGenero} onChange={(e) => setFiltroGenero(e.target.value)}>
                        <option value="Todos">Gênero: Todos</option>
                        <option value="Unissex">Unissex</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Família">Família</option>
                    </select>

                    <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
                        <option value="Todos">Tipo: Todos</option>
                        <option value="Adulto">Adulto</option>
                        <option value="Infantil">Infantil</option>
                    </select>
                
                    <select value={filtroEstacao} onChange={(e) => setFiltroEstacao(e.target.value)}>
                        <option value="Todos">Estação: Todos</option>
                        <option value="Inverno">Inverno</option>
                        <option value="Verão">Verão</option>
                    </select>
                </div>
            </div>

            <div className={styles.listagem}>
                {produtosPaginados.length > 0 ? (
                    produtosPaginados.map(produto => (
                        <Link
                            key={produto.id}
                            to={`/individual/${produto.id}`}
                            style={{ cursor: "pointer", textDecoration: "none" }}
                        >
                            <Card {...produto} menor={false} />
                        </Link>
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>

            {totalPaginas > 1 && (
                <div className={styles.paginacao}>
                    <img
                        src={setaesquerda}
                        alt="Anterior"
                        className={`${styles.seta} ${paginaAtual === 1 ? styles.setaDesabilitada : ''}`}
                        onClick={handlePrevPage}
                    />
                    {renderizarPaginas()}
                    <img
                        src={setadireita}
                        alt="Próxima"
                        className={`${styles.seta} ${paginaAtual === totalPaginas ? styles.setaDesabilitada : ''}`}
                        onClick={handleNextPage}
                    />
                </div>
            )}
        </div>
    );
}