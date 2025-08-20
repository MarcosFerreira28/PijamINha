import { useState } from 'react';
import styles from './styles.module.css';

import menos from '../../Assets/Diminuir.png';
import mais from '../../Assets/Aumentar.png';
import coracao from '../../Assets/coracao.svg';
import favoritado from '../../Assets/favoritado.svg';

export default function InfoPijamaIndividual() {
    const produto = {
        id: 1,
        nome: "PIJAMA FEMENINO LONGO - ESTAMPA POÁ",
        ref: "#123456",
        tamanho: "M",
        preco: 78.9,
        img: "https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg",
        estoque: 8,
    }

    const [qtdSelecionada, setQtdSelecionada] = useState(1);

    const diminuir = () => {
        if (qtdSelecionada > 1) {
            setQtdSelecionada(qtdSelecionada - 1);
        }
    };

    const aumentar = () => {
        if (qtdSelecionada < produto.estoque) {
            setQtdSelecionada(qtdSelecionada + 1);
        }
    };

    
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(null);

    const tamanhos = ['PP', 'P', 'M', 'G', 'GG'];


    return (
        <div className={styles.container}>
            <div className={styles.tituloContainer}>
                <h1>Titulo do pijama um pouco mairo para poder testar o tamanho</h1>
                <p>Ref: #id</p>
            </div>

            <div className={styles.priceContainer}>
                <div style={{width: '39.9vw', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                    <h1>R$ 99,90</h1>
                    <p>6x de <strong>R$ 13,45</strong></p>
                </div>
                <p>Ou por <strong style={{fontStyle: 'italic'}}>R$67,06</strong> no PIX</p>
            </div>

            <div className={styles.tamanhoContainer}>
                <h2>Tamanhos:</h2>
                <div className={styles.tamanhos}>
                    {tamanhos.map((tamanho) => (
                        <button
                            key={tamanho}
                            className={`${tamanhoSelecionado === tamanho ? styles.tamanhoSelecionado : styles.tamanho}`}
                            onClick={() => setTamanhoSelecionado(tamanho)}
                        >
                            {tamanho}
                        </button>
                    ))}
                </div>
                <p>Ainda temos <strong style={{fontWeight: "800", fontStyle: "italic"}}>8</strong> peças do tamanho escolhido em nosso estoque!</p>
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
                        disabled={qtdSelecionada >= produto.estoque}
                    >
                        <img src={mais} alt="+" />
                    </button>
                </div>
            </div>

            <div className={styles.botoesContainer}>
                <button>ADICIONAR AO CARRINHO</button>
                <img src={coracao} alt="" />
            </div>
        </div>
    )
}