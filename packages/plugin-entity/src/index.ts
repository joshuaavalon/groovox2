import fastifyPlugin from "fastify-plugin";

import { AjvValidator } from "./ajv";

import type { Options } from "ajv/dist/2020";

const plugin = fastifyPlugin<Options>(
  async (fastify, opts) => {
    const ajv = new AjvValidator(opts);
    fastify.decorate("entity", ajv);
  },
  {
    name: "@groovox/plugin-entity",
    fastify: "3.x"
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    entity: AjvValidator;
  }
}

export type { Schemas } from "./ajv";
