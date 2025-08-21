import type { Pijama } from "../Types/Pijama";

export default interface PijamaStore {
    availablePijamas: Pijama[];
    cart: Pijama[];
    addToCart: (pijama: Pijama) => void;
    removeFromCart: (id: number) => void;
}