import axios from "axios";
import { create } from "zustand";
import type CartStore from "../interfaces/CartStore";

const pijamas = await axios.get("http://localhost:3001/pijamas");

const useCartStore = create<CartStore>((set) => (
    {
        availablePijamas: pijamas.data,
        cart: [],

        addToCart: (pijama) => set((state) => ({ cart: [...state.cart, pijama]})), //ver como adicionar a quantidade
        
        removeFromCart: (id) => set((state) => {
            const index = state.cart.findIndex((pijama) => pijama.id === id);
            if (index === -1) return { cart: state.cart };
            return {
                cart: [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index + 1)
                ]
            };
        })
    }
))

export default useCartStore;