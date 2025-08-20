import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import styles from './styles.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import { filtrarProdutos } from '../../Functions/filtrarProdutos';
import { paginacaoProdutos } from '../../Functions/paginacaoProdutos';
import setaesquerda from '../../assets/setaesquerda.svg';
import setadireita from '../../Assets/setadireita.svg';
import pijamaPoa from '../../assets/FUNDOCARDTESTE.png';
import lupa from '../../assets/lupa.png';

// criei vários cards aleatórios para testar a paginação e os filtros, dps a gente tira quando integrar com o back
const todosOsProdutos = [
    { id: 1, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 2, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 3, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 4, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 5, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 6, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 7, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 8, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 9, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 10, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 11, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 12, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 13, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 14, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 15, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 16, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 17, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 18, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 19, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 20, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 21, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 22, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 23, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 24, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 25, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 26, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 27, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 28, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 29, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 30, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 31, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 32, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 33, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 34, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 35, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 36, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 37, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 38, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 39, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 40, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 41, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 42, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 43, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 44, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 45, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 46, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 47, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 48, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 49, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 50, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 51, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 52, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 53, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 54, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 55, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 56, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 57, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Família', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 58, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 59, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 60, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 61, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Unissex', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 62, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Masculino', type: 'Adulto', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 63, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Infantil', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 64, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Infantil', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 65, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Infantil', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 66, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Masculino', type: 'Infantil', season: 'Inverno', favorite: true, on_sale: true, sale_percent: 10, menor: false },
    { id: 67, name: "Pijama feminino longo - estampa poá", price: 78.90, image: pijamaPoa, gender: 'Feminino', type: 'Infantil', season: 'Verão', favorite: true, on_sale: true, sale_percent: 10, menor: false },
];

export default function Pijaminhas() {
    const [searchParams] = useSearchParams();

    const [produtosExibidos, setProdutosExibidos] = useState(todosOsProdutos);
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
            todosOsProdutos,
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
                            to={`/cardInfo/${produto.id}`}
                            style={{ cursor: "pointer", textDecoration: "none" }}
                        >
                            <Card {...produto} />
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