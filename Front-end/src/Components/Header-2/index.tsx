import compras from "../../assets/Compras.png"
import comprasC from"../../assets/Compras-cinza.png"
import { Link } from "react-router-dom";
import favoritoC from "../../assets/Favorito-cinza.png"
import favorito from "../../assets/Favoritado.png"
import style from"./style.module.css";


export default function Header2(){
    return(
        <>
        <header className={style.header}>
                <div className={style.links}>
                    <Link to='/carrinho' className={`${style.car} ${location.pathname === "/carrinho" ? style.ativo : ""}`}><img src={location.pathname === "/carrinho" ? compras : comprasC}alt="carrinho-vermelho" />Carrinho</Link>
                    <Link to='/fav' className={`${style.link} ${location.pathname === "/fav" ? style.ativo : ""}`}>
                        <img src={location.pathname === "/fav" ? favorito : favoritoC} alt="carrinho-vermelho" />
                        Favorito
                    </Link>
                </div>
            </header>
            <nav>
                <Link to="/carrinho"></Link>
                <Link to="/fav"></Link>
            </nav>
        </>
    )
}