import type { FastifyInstance } from "fastify";

export interface RegisterFn {
  (fastify: FastifyInstance): Promise<void>;
}

export interface ApiFn<T> {
  (fastify: FastifyInstance): Promise<T>;
}
