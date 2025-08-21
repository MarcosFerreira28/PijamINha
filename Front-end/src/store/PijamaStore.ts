import { create } from "zustand";
import type { Pijama } from "../Types/Pijama.ts";


export interface pijamaDados{
    pijama:Pijama,
    size:string,
    quantity:number
}
export interface PijamaStore {
    pijama: pijamaDados[];
    addToPijama: (p: pijamaDados) => void;
    removeFromPijama: (id: number, size: string | null) => void;
}

const usePijamaStore = create<PijamaStore>((set) => ({
    pijama: [],

    addToPijama: (item) =>
        set((state) => {
            const existente = state.pijama.find(
                (pj) => pj.pijama.id === item.pijama.id && pj.size === item.size
            );

            if (existente) {
                const novaQtd = existente.quantity + item.quantity;
                const estoque = item.pijama.pajamaSize.find((quant)=>quant.size==item.size)
                if(estoque && novaQtd >estoque.stockQuantity){
                    alert("Limite do Estoque!")
                }
            }
                return {
                    pijama: state.pijama.map((pj) =>
                        pj.pijama.id === item.pijama.id && pj.size === item.size
                            ? { ...pj, quantity:item.quantity}
                            : pj
                    ),
                };
            }
        ),

    removeFromPijama: (id, size) =>
        set((state) => ({
            pijama: state.pijama.filter(
                (pj) => !(pj.pijama.id === id && pj.size === size)
            ),
        })),
}));

export default usePijamaStore;


