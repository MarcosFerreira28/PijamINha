import axios from "axios";


export default function handleFavorites(pajamaId: number) {

    axios.patch(`http://localhost:3333/pajamas/${pajamaId}/favorite`)
    .then(response => {
        console.log("Pijama favoritado com sucesso:", response.data);
    })
    .catch(error => {
        console.error("Erro ao favoritar pijama:", error);
    });

    return;
}