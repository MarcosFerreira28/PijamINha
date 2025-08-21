import type { pijamaDados } from "./PijamaDados";

export interface PijamaStore {
    pijama: pijamaDados[];
    addToPijama: (p: pijamaDados) => void;
    removeFromPijama: (id: number, size: string | null) => void;
    aumentarQuantity: (id: number, size: string | null) => void;
    diminuirQuantity: (id: number, size: string | null) => void;
}