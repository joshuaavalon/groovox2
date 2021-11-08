import type { FastifyInstance } from "fastify";

export interface ApiFn<T> {
  (fastify: FastifyInstance): T;
}
