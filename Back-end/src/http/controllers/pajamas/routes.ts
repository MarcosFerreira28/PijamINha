import { FastifyInstance } from "fastify";
import { createPajama } from "./create-pajamas";
import { deletePajama } from "./delete-pajamas";
import { update } from "../users/update";
import { UpdatePajamaUseCase } from "@/use-cases/pajamas/updatePajama-use-case";
import { FavoritesPajamaUseCase } from "@/use-cases/pajamas/favoritePajama-use-case";
import { listPajamas } from "./list-pajama";
import { getPajama } from "./get-pajamas";




export async function pajamasRoutes(app: FastifyInstance) {
    
    app.post('/posts', createPajama)
    app.delete('/pajamas/pajamaId', deletePajama)
    app.get('/pajama', listPajamas)
    app.get('/pajama/pajamaId', getPajama)
    app.patch('/pajama/pajamaId', updatePajama)
}
    
