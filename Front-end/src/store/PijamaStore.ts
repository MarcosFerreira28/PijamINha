import { create } from "zustand";
import type { PijamaStore } from "../interfaces/PijamaStore.ts";


const usePijamaStore = create<PijamaStore>((set) => ({
    pijama: [],

    addToPijama: (item) =>
        set((state) => {
            const existente = state.pijama.find(
                (pj) => pj.pijama.id === item.pijama.id && pj.size === item.size
            );

            if (existente) {
                const novaQtd = existente.quantity + item.quantity;
                const estoque = item.pijama.pajamaSize.find((q) => q.size === item.size);

                if (estoque && novaQtd > estoque.stockQuantity) {
                    alert("Limite do Estoque!");
                    return state; // mantém o estado sem duplicar
                }

                return {
                    pijama: state.pijama.map((pj) =>
                        pj.pijama.id === item.pijama.id && pj.size === item.size
                            ? { ...pj, quantity: novaQtd }
                            : pj
                    ),
                };
            }

            alert("Pijama adicionado ao carrinho!");
            return { pijama: [...state.pijama, item] };
        }),

    removeFromPijama: (id, size) =>
        set((state) => ({
            pijama: state.pijama.filter(
                (pj) => !(pj.pijama.id === id && pj.size === size)
            ),
        })),

    aumentarQuantity: (id, size) =>
        set((state) => {
            const produto = state.pijama.find(
                (p) => p.pijama.id === id && p.size === size
            );
            if (!produto) return state;

            const estoque = produto.pijama.pajamaSize.find(
                (s) => s.size === size
            );
            if (estoque && produto.quantity < estoque.stockQuantity) {
                return {
                    pijama: state.pijama.map((p) =>
                        p.pijama.id === id && p.size === size
                            ? { ...p, quantity: p.quantity + 1 }
                            : p
                    ),
                };
            }
            return state;
        }),

    diminuirQuantity: (id, size) =>
        set((state) => {
            const produto = state.pijama.find(
                (p) => p.pijama.id === id && p.size === size
            );
            if (!produto) return state;

            if (produto.quantity > 1) {
                return {
                    pijama: state.pijama.map((p) =>
                        p.pijama.id === id && p.size === size
                            ? { ...p, quantity: p.quantity - 1 }
                            : p
                    ),
                };
            }

        }),
}));

export default usePijamaStore;



