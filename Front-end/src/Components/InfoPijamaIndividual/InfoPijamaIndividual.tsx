import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import menos from '../../Assets/Diminuir.png';
import mais from '../../Assets/Aumentar.png';
import coracao from '../../Assets/Favorito-cinza.png';
import coracaofavoritado from '../../Assets/Favoritado.png';
import { useLoaderData } from 'react-router-dom';
import type { Pijama } from '../../Types/Pijama';
import usePijamaStore from '../../store/PijamaStore';
import handleFavorites from '../../Functions/handleFavorites';
import type { pijamaDados } from '../../interfaces/PijamaDados';


export default function InfoPijamaIndividual() {
    const pijama = useLoaderData() as Pijama;

    const [qtdSelecionada, setQtdSelecionada] = useState(1);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(null);
    
    useEffect(() => {
        if (!tamanhoSelecionado && pijama.pajamaSize.length > 0) {
            setTamanhoSelecionado(pijama.pajamaSize[0].size);
        }
    }, [pijama.pajamaSize, tamanhoSelecionado]);
    
    const quantidadeEstoque = tamanhoSelecionado 
        ? pijama.pajamaSize.find(t => t.size === tamanhoSelecionado)?.stockQuantity ?? 0 
        : 0;

    useEffect(() => {
        if (qtdSelecionada > quantidadeEstoque) {
            setQtdSelecionada(quantidadeEstoque);
        }
    }, [tamanhoSelecionado, quantidadeEstoque]);

    const diminuir = () => {
        if (qtdSelecionada > 0) {
            setQtdSelecionada(qtdSelecionada - 1);
        }
    };
    const aumentar = () => {
        if (qtdSelecionada < quantidadeEstoque) setQtdSelecionada(qtdSelecionada + 1);
    };

    const [favorited, setFavorited] = useState(pijama.favorite);
    
    function handleFavorite() {
        if (!favorited) {
            handleFavorites(pijama.id);
            setFavorited(!favorited);
        } else {
            handleFavorites(pijama.id);
            setFavorited(!favorited);
        }
    }

    const addToPijama = usePijamaStore((s) => s.addToPijama);

    const handleAddToCarrinho = () => {
        if (!tamanhoSelecionado) return;
        if (!qtdSelecionada) return;
        const item : pijamaDados={
                pijama:pijama,
                size:tamanhoSelecionado,
                quantity:qtdSelecionada
        }
        addToPijama(item);
        alert("Pijama adicionado ao carrinho!");
    };

    return (
        <div className={styles.container}>
            <div className={styles.tituloContainer}>
                <h1>{pijama.name}</h1>
                <p>Ref: #{pijama.id}</p>
            </div>

            <div className={styles.priceContainer}>
                <div style={{width: '39.9vw', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <h1>R$ {pijama.price.toFixed(2)}</h1>
                    <p>6x de <strong>R$ {(pijama.price / 6).toFixed(2)}</strong></p>
                </div>
                <p>Ou por <strong style={{fontStyle: 'italic'}}>R${(pijama.price - (pijama.price * 15 / 100)).toFixed(2)}</strong> no PIX</p>
            </div>

            <div className={styles.tamanhoContainer}>
                <h2>Tamanhos:</h2>
                <div className={styles.tamanhos}>
                    {pijama.pajamaSize.map((tamanho) => (
                        <button
                            key={tamanho.size}
                            className={`${tamanhoSelecionado === tamanho.size ? styles.tamanhoSelecionado : styles.tamanho}`}
                            onClick={() => setTamanhoSelecionado(tamanho.size)}
                        >
                            {tamanho.size}
                        </button>
                    ))}
                </div>
                <p>Ainda temos <strong style={{fontWeight: "800", fontStyle: "italic"}}>{quantidadeEstoque}</strong> peças do tamanho escolhido em nosso estoque!</p>
            </div>

            <div className={styles.quantidadeContainer}>
                <h2>Quantidade:</h2>
                <div className={styles.botaoTotal}>
                    <button
                        onClick={diminuir}
                        className={styles.botao}
                        disabled={qtdSelecionada <= 0}
                    >
                        <img src={menos} alt="-" />
                    </button>
                    <span className={styles.valor}>{qtdSelecionada}</span>
                    <button
                        onClick={aumentar}
                        className={styles.botao}
                        disabled={qtdSelecionada >= quantidadeEstoque}
                    >
                        <img src={mais} alt="+" />
                    </button>
                </div>
            </div>

            <div className={styles.botoesContainer}>
                <button style={{cursor: "pointer"}} onClick={handleAddToCarrinho}>
                    ADICIONAR AO CARRINHO
                </button>

                {favorited ? (
                    <img src={coracaofavoritado} alt="coracao" className={styles.coracao} 
                        onClick={e => { e.preventDefault(); handleFavorite(); }}/>
                ) : (
                    <img src={coracao} alt="coracao" className={styles.coracao} 
                        onClick={e => { e.preventDefault(); handleFavorite(); }}/>
                )}
            </div>
        </div>
    );
}
