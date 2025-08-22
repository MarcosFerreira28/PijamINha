import Header2 from "../../Components/Header-2";
import style from "./style.module.css";
import menos from "../../assets/Diminuir.png";
import mais from "../../assets/Aumentar.png";
import Modal1 from "../../Components/Modais/Modal1/modal1";
import { useState } from "react";
import usePijamaStore from "../../store/PijamaStore"; 
import x from "../../assets/X-preto.png"
import type { SalePajama } from "../../interfaces/SalePajama";


export default function Carrinho() {
    const produtos = usePijamaStore((s) => s.pijama); 
    const { aumentarQuantity, diminuirQuantity } = usePijamaStore();
    const removeFromPijama = usePijamaStore((s) => s.removeFromPijama);

    const totalGeral = produtos.reduce((acc, item) => {
        const precoFinal = item.pijama.onSale
            ? item.pijama.price * (1 - (item.pijama.salePercent ?? 0) / 100)
            : item.pijama.price;
        return acc + precoFinal * item.quantity;
    }, 0);

    const salePajama: SalePajama[] = produtos.map((produto) => {
        const precoUnitario = produto.pijama.onSale
            ? produto.pijama.price * (1 - (produto.pijama.salePercent ?? 0) / 100)
            : produto.pijama.price;
        
        return {
            pajamaId: produto.pijama.id,
            quantity: produto.quantity,
            price: precoUnitario
        };
    });

    const [abrirModal, setAbrirModal] = useState(false);

    return (
        <>
            <Header2 />
            <main className={style.total}>
                {produtos.map((produto) => {
                    const precoUnitario = produto.pijama.onSale
                        ? produto.pijama.price * (1 - (produto.pijama.salePercent ?? 0) / 100)
                        : produto.pijama.price;

                    return (
                        <div className={style.card} key={`${produto.pijama.id}-${produto.size}`}>
                            <div className={style.card1}>
                                <div className={style.imgT}>
                                    <img src={produto.pijama.image} alt={produto.pijama.name} className={style.img} />
                                </div>
                                <div className={style.elementos}>
                                    <div>
                                        <p className={style.nome}>{produto.pijama.name}</p>
                                        <p className={style.id}>Ref: #{produto.pijama.id}</p>
                                    </div>
                                    <div className={style.elementoBaixo}>
                                        <p>{produto.size}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.preco}>
                                <div className={style.quant}>
                                    <label>Quantidade:</label>
                                    <div className={style.botaototal}>
                                        <button
                                            onClick={() => diminuirQuantity(produto.pijama.id, produto.size)}
                                            className={style.botao}
                                            disabled={ produto.quantity==1}
                                        >
                                            <img src={menos} alt="-" />
                                        </button>
                                        <span className={style.valor}>{produto.quantity}</span>
                                        <button
                                            onClick={() => aumentarQuantity(produto.pijama.id, produto.size)}
                                            className={style.botao}
                                            disabled={
                                                produto.quantity >=
                                                (produto?.pijama.pajamaSize.find((p) => p.size === produto.size)?.stockQuantity ?? 0)
                                            }
                                        >
                                            <img src={mais} alt="+" />
                                        </button>
                                    </div>
                                    <p className={style.detalhes}>
                                        Não perca sua oportunidade! Há apenas mais <b>{(produto.pijama.pajamaSize.find((p) => p.size === produto.size)?.stockQuantity ?? 0) - produto.quantity}</b> peças disponíveis!
                                    </p>
                                </div>
                                <div className={style.detalhes}>
                                    {produto.pijama.onSale ? (
                                        <div className={style.comDesc}>
                                            <p
                                                className={style.precoAntigo}
                                                style={{ textDecoration: "line-through" }}
                                            >
                                                R$ {(produto.pijama.price * produto.quantity).toFixed(2)}
                                            </p>
                                            <p className={style.Vtotal}>
                                                R$ {(precoUnitario * produto.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className={style.semDesc}>
                                            <p className={style.Vtotal}>
                                                R$ {(produto.pijama.price * produto.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button className={style.x} onClick={() => removeFromPijama(produto.pijama.id, produto.size)}>
                            <img src={x} alt="x" />
                            </button>
                        </div>
                    );
                })}

                <div className={style.totalGeral}>
                    <p>Total</p>
                    <p className={style.totalValor}>R$ {totalGeral.toFixed(2)}</p>
                </div>

                <div className={style.comprarTudo}>
                    <button
                        onClick={() => setAbrirModal(true)}
                        className={style.BcomprarTudo}
                    disabled={totalGeral==0}>  
                        Compre Tudo
                    </button>
                </div>
            </main>

            {abrirModal && <Modal1 
                onClose={() => setAbrirModal(false)} 
                totalGeral={totalGeral}
                salePajamas={salePajama}
            />}
        </>
    );
}

//zustand