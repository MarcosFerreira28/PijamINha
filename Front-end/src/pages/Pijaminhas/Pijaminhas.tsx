import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import styles from './styles.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import { filtrarPijamas } from '../../Functions/filtrarPijamas.ts';
import { paginacaoPijamas } from '../../Functions/paginacaoPijamas.ts';
import setaesquerda from '../../assets/setaesquerda.svg';
import setadireita from '../../Assets/setadireita.svg';
import lupa from '../../assets/lupa.png';
import axios from 'axios';
import type { Pijama } from '../../Types/Pijama.ts';

export default function Pijaminhas() {
    const [searchParams] = useSearchParams();
    const [pijamasApi, setPijamasApi] = useState<Pijama[]>([]);
    const [pijamasExibidos, setPijamasExibidos] = useState<Pijama[]>([]);
    const [filtroGenero, setFiltroGenero] = useState('Todos');
    const [filtroTipo, setFiltroTipo] = useState('Todos');
    const [filtroEstacao, setFiltroEstacao] = useState('Todos');
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1);
    const cardsPorPagina = 12;

    useEffect(() => {
        axios.get("http://localhost:3333/pajamas")
            .then(response => {
                setPijamasApi(response.data);
                setPijamasExibidos(response.data);
            })
            .catch(error => console.error("Erro ao buscar pijamas:", error));
    }, []);

    useEffect(() => {
        const generoNaUrl = searchParams.get('gender');
        const tipoNaUrl = searchParams.get('type');

        setFiltroGenero(generoNaUrl || 'Todos');
        setFiltroTipo(tipoNaUrl || 'Todos');
        setPaginaAtual(1);
    }, [searchParams]);

    useEffect(() => {
        const pijamasFiltrados = filtrarPijamas(
            pijamasApi, 
            filtroGenero,
            filtroTipo,
            filtroEstacao,
            termoPesquisa
        );
        
        setPijamasExibidos(pijamasFiltrados);
        setPaginaAtual(1);
    }, [filtroGenero, filtroTipo, filtroEstacao, termoPesquisa, pijamasApi]);

    const { items: pijamasPaginados, totalPaginas } = paginacaoPijamas(
        pijamasExibidos,
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
                        <option value="Todos">Gênero:Todos</option>
                        <option value="unissex">Unissex</option>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="family">Família</option>
                    </select>

                    <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
                        <option value="Todos">Tipo: Todos</option>
                        <option value="adult">Adulto</option>
                        <option value="child">Infantil</option>
                    </select>
                
                    <select value={filtroEstacao} onChange={(e) => setFiltroEstacao(e.target.value)}>
                        <option value="Todos">Estação: Todos</option>
                        <option value="winter">Inverno</option>
                        <option value="summer">Verão</option>
                    </select>
                </div>
            </div>

            <div className={styles.listagem}>
                {pijamasPaginados.length > 0 ? (
                    pijamasPaginados.map(pijama => ( 
                        <Link 
                            key={pijama.id}
                            to={`/individual/${pijama.id}`}
                            style={{ cursor: "pointer", textDecoration: "none" }}
                        >
                            <Card id={pijama.id} name={pijama.name} price={pijama.price} image={pijama.image} favorite={pijama.favorite} onSale={pijama.onSale} salePercent={pijama.salePercent} menor={false}/>
                        </Link>
                    ))
                ) : (
                    <p className={styles.semPijama}>Nenhum pijama encontrado.</p>
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