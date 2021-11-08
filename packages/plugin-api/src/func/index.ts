import { createTagApi, TagApi } from "./tag";
import { createVersionApi, VersionApi } from "./version";

import type { FastifyInstance } from "fastify";

export const registerApi = async (fastify: FastifyInstance): Promise<void> => {
  fastify.decorate("api", {});
  fastify.api.tag = createTagApi(fastify);
  fastify.api.version = createVersionApi(fastify);
};

declare module "fastify" {
  interface GroovoxApi {
    tag: TagApi;
    version: VersionApi;
  }
}
