import { useEffect, useState } from 'react';
import styles from './styles.module.css';

import menos from '../../Assets/Diminuir.png';
import mais from '../../Assets/Aumentar.png';
import coracao from '../../Assets/Favorito-cinza.png';
import coracaofavoritado from '../../Assets/Favoritado.png';
import Desfavoritar from '../../Functions/Desfavoritar';
import Favoritar from '../../Functions/Favoritar';
import { useLoaderData } from 'react-router-dom';
import type { Pijama } from '../../Types/Pijama';


export default function InfoPijamaIndividual() {
    const produto = useLoaderData() as Pijama;

    const [qtdSelecionada, setQtdSelecionada] = useState(1);

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(null);
    
    useEffect(() => {
        if (!tamanhoSelecionado && produto.sizes.length > 0) {
            setTamanhoSelecionado(produto.sizes[0].size);
        }
    }, [produto.sizes, tamanhoSelecionado]);
    
    const quantidadeEstoque = tamanhoSelecionado ? produto.sizes.find(t => t.size === tamanhoSelecionado)?.stock_quantity ?? 0 : 0

    useEffect(() => {
        if (qtdSelecionada > quantidadeEstoque) {
            setQtdSelecionada(quantidadeEstoque);
        }
    }, [tamanhoSelecionado, quantidadeEstoque]);


    const diminuir = () => {
        if (qtdSelecionada > 1) {
            setQtdSelecionada(qtdSelecionada - 1);
        }
    };
    const aumentar = () => {
        if (qtdSelecionada < quantidadeEstoque) {
            setQtdSelecionada(qtdSelecionada + 1);
        }
    };

    const [favorited, setFavorited] = useState(produto.favorite);
    
    function handleFavorite() {
        setFavorited(!favorited);
        if (favorited) {
            Favoritar();//passar a informação necessária aqui
        } else {
            Desfavoritar();//passar a informação necessária aqui
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.tituloContainer}>
                <h1>{produto.name}</h1>
                <p>Ref: #{produto.id}</p>
            </div>

            <div className={styles.priceContainer}>
                <div style={{width: '39.9vw', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <h1>R$ {produto.price.toFixed(2)}</h1>
                    <p>6x de <strong>R$ {(produto.price / 6).toFixed(2)}</strong></p>
                </div>
                <p>Ou por <strong style={{fontStyle: 'italic'}}>R${(produto.price * 15 / 100).toFixed(2)}</strong> no PIX</p>
            </div>

            <div className={styles.tamanhoContainer}>
                <h2>Tamanhos:</h2>
                <div className={styles.tamanhos}>
                    {produto.sizes.map((tamanho) => (
                        <button
                            key={tamanho.size}
                            className={`${tamanhoSelecionado === tamanho.size ? styles.tamanhoSelecionado : styles.tamanho}`}
                            onClick={() => (setTamanhoSelecionado(tamanho.size))}
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
                        onClick={() => diminuir()}
                        className={styles.botao}
                        disabled={qtdSelecionada <= 1}
                    >
                        <img src={menos} alt="-" />
                    </button>
                    <span className={styles.valor}>{qtdSelecionada}</span>
                    <button
                        onClick={() => aumentar()}
                        className={styles.botao}
                        disabled={qtdSelecionada >= quantidadeEstoque}
                    >
                        <img src={mais} alt="+" />
                    </button>
                </div>
            </div>

            <div className={styles.botoesContainer}>
                <button style={{cursor: "pointer"}}>ADICIONAR AO CARRINHO</button>
                {favorited ? (
                    <img src={coracaofavoritado} alt="coracao" className={styles.coracao} 
                    onClick={e => {
                        e.preventDefault();
                        handleFavorite();
                    }}/>
                ) : (
                    <img src={coracao} alt="coracao" className={styles.coracao} 
                    onClick={e => {
                        e.preventDefault();
                        handleFavorite();
                    }}/>
                )}
            </div>
        </div>
    )
}