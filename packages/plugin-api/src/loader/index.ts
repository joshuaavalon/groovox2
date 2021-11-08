import { createTagLoader, TagLoader } from "./tag";

import type { FastifyInstance } from "fastify";

export const registerLoader = async (
  fastify: FastifyInstance
): Promise<void> => {
  fastify.decorate("loader", {});
  fastify.loader.tag = createTagLoader(fastify);
};

declare module "fastify" {
  interface GroovoxLoader {
    tag: TagLoader;
  }
}
