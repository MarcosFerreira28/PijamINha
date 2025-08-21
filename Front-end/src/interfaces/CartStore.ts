import type { Pijama } from "../Types/Pijama";

export default interface CartStore {
    availablePijamas: Pijama[];
    cart: Pijama[];
    addToCart: (pijama: Pijama) => void;
    removeFromCart: (id: number) => void;
}