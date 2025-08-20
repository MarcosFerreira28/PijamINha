import { FastifyInstance } from "fastify";
import { createPajama } from "./create-pajamas";
import { deletePajama } from "./delete-pajamas";
import { listPajamas } from "./list-pajama";
import { getPajama } from "./get-pajamas";
import { updatePajama } from "./update-pajamas";
import { favoritePajama } from "./favorite-pajama";



export async function pajamasRoutes(app: FastifyInstance) {
    
    app.post('/pajamas', createPajama)
    app.delete('/pajamas/:pajamaId', deletePajama)
    app.get('/pajamas', listPajamas)
    app.get('/pajamas/:id', getPajama)
    app.patch('/pajamas/:id', updatePajama)
    app.patch('/pajamas/:id/favorite', favoritePajama)
}

