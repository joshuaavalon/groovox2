import type { FastifyInstance } from "fastify";

import * as studio from "./studio";

export interface GroovoxApi {
  studio: ReturnType<typeof studio.fn>;
}

export const createApi = (fastify: FastifyInstance): GroovoxApi => ({
  studio: studio.fn(fastify)
});
