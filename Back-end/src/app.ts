import fastify from 'fastify'
import { ZodError } from 'zod'
import cors from '@fastify/cors'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import { usersRoutes } from './http/controllers/users/routes'
import { feedbacksRoutes } from './http/controllers/feedbacks/routes'
import { pajamasRoutes } from './http/controllers/pajamas/routes'
import { pajamaSizeRoutes } from './http/controllers/pajamasSize/routes'

export const app = fastify()

app.register(cors, {
    origin: true,
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"]
})

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
})

app.register(usersRoutes)

app.register(feedbacksRoutes)
app.register(pajamasRoutes)

app.register(pajamaSizeRoutes)


app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({ message: 'Erro de validação.', issues: error.format() })
    }
    if (env.NODE_ENV !== 'production') {
        console.error(error)
    }
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
})