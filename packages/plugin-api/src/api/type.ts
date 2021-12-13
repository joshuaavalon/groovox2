import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export interface ApiContext {
  request: FastifyRequest;
  reply: FastifyReply;
}

export interface ApiFunction<I, O> {
  (fastify: FastifyInstance): (input: I, ctx?: ApiContext) => Promise<O>;
}
