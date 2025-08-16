import 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    userId?: number
  }
}