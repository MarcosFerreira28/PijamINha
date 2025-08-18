import Header2 from "../../Components/Header-2";
import style from "./style.module.css";
import { useState } from "react";
import menos from "../../assets/Diminuir.png";
import mais from "../../assets/Aumentar.png";
import Modal1 from "../../Components/Modais/Modal1/modal1";

export default function Carrinho() {
    const [produtos, setProdutos] = useState([
        {
        id: 1,
        nome: "PIJAMA FEMENINO LONGO - ESTAMPA POÁ",
        ref: "#123456",
        tamanho: "M",
        preco: 78.9,
        quantidade: 1,
        img: "https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg",
        },
        {
        id: 2,
        nome: "PIJAMA FEMENINO LONGO - ESTAMPA POÁ",
        ref: "#654321",
        tamanho: "GG",
        preco: 78.9,
        quantidade: 1,
        img: "https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg",
        },
    ]);

    const diminuir = (id: number) => {
        setProdutos((prev) =>
        prev.map((p) =>
            p.id === id && p.quantidade > 1
            ? { ...p, quantidade: p.quantidade - 1 }
            : p
        )
        );
    };

    const aumentar = (id: number) => {
        setProdutos((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantidade: p.quantidade + 1 } : p))
        );
    };

    const totalGeral = produtos.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
    );

    const [abrirModal, setAbrirModal] = useState(false);

    return (
        <>
        <Header2 />
        <main className={style.total}>
            {produtos.map((produto) => (
            <div className={style.card} key={produto.id}>
                <div className={style.card1}>
                <div className={style.imgT}>
                    <img src={produto.img} alt="" className={style.img} />
                </div>
                <div className={style.elementos}>
                    <div>
                    <p className={style.nome}>{produto.nome}</p>
                    <p className={style.id}>Ref:{produto.ref}</p>
                    </div>
                    <div className={style.elementoBaixo}>
                    <p>{produto.tamanho}</p>
                    </div>
                </div>
                </div>
                <div className={style.preco}>
                <div className={style.quant}>
                    <label>Quantidade:</label>
                    <div className={style.botaototal}>
                        <button onClick={() => diminuir(produto.id)} className={style.botao}>
                            <img src={menos} alt="-" />
                        </button>
                        <span className={style.valor}>{produto.quantidade}</span>
                        <button onClick={() => aumentar(produto.id)} className={style.botao}>
                            <img src={mais} alt="+" />
                        </button>
                    </div>
                    <p className={style.detalhes}>Não perca sua oportunidade! Há apenas mais <b>12</b> peças disponíveis!</p>
                </div>
                <p className={style.Vtotal}>
                    R$ {(produto.preco * produto.quantidade).toFixed(2)}
                </p>
                </div>
            </div>
            ))}

            <div className={style.totalGeral}>
                <p>Total</p>
                <p className={style.totalValor}>R$ {totalGeral.toFixed(2)}</p>
            </div>

            <div className={style.comprarTudo}>
            <button
                onClick={() => setAbrirModal(true)}
                className={style.BcomprarTudo}
            >
                Compre Tudo
            </button>
            </div>
        </main>

        {abrirModal && <Modal1 onClose={() => setAbrirModal(false)} />}
        </>
    );
}

//zustand