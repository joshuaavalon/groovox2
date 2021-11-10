import { studioApi } from "./studio";
import { createTagApi } from "./tag";
import { createVersionApi } from "./version";

import type { FastifyInstance } from "fastify";
import type { TagApi } from "./tag";
import type { VersionApi } from "./version";

export const registerApi = async (fastify: FastifyInstance): Promise<void> => {
  fastify.decorate("api", {});
  fastify.api.studio = studioApi;
  fastify.api.tag = createTagApi(fastify);
  fastify.api.version = createVersionApi(fastify);
};

declare module "fastify" {
  interface GroovoxApi {
    studio: typeof studioApi;
    tag: TagApi;
    version: VersionApi;
  }
}
