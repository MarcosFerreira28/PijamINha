import '@fastify/jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      sub: number;
      name: string;
      username: string;
    };
  }
}