import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export interface GraphqlContext {
  fastify: FastifyInstance;
  request: FastifyRequest;
  reply: FastifyReply;
}
