import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import type {} from "@groovox/plugin-api";

export interface GraphqlContext {
  fastify: FastifyInstance;
  request: FastifyRequest;
  reply: FastifyReply;
}
