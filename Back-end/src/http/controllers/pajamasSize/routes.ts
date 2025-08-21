import { FastifyInstance } from "fastify";
import { createPajamaSize } from "./create-pajamaSize";
import { updatePajamaSize } from "./update-pajamaSize";


export async function pajamaSizeRoutes(app: FastifyInstance) {

    app.post('/pajamaSize', createPajamaSize)
    app.patch('/pajamaSize/:id', updatePajamaSize)
}