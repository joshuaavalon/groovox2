import { studioApi } from "./studio";

import type { FastifyInstance } from "fastify";

export const registerApi = async (fastify: FastifyInstance): Promise<void> => {
  fastify.decorate("api", {});
  fastify.api.studio = studioApi;
};

declare module "fastify" {
  interface GroovoxApi {
    studio: typeof studioApi;
  }
}
