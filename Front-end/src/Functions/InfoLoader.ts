import type { LoaderFunctionArgs } from "react-router-dom";
import axios from "axios";

export default async function InfoLoader({ params } : LoaderFunctionArgs) {
    const { pijamaId } = params;

    if (!pijamaId) {
        throw new Response("Pijama não encontrado", { status: 404 });
    }

    try {
        const response = await axios.get(`http://localhost:3001/pijamas/${pijamaId}`);
        const pijama = response.data;

        return pijama;

    } catch (error) {
        throw new Response("Erro ao buscar pijama", { status: 500 });
    }
}