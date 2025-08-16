import fastify from 'fastify'
import z, { ZodError } from 'zod'
import cors from '@fastify/cors'

export const app = fastify()

app.register(cors, {
    origin: true,
    allowedHeaders: ["POST", "GET", "PATCH", "DELETE", "PUT"]
})


app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({ message: 'erro de validação', issues: z.treeifyError(error) })
    }
    return reply.status(500).send({message: 'erro interno do servidor', error: error.message})

})