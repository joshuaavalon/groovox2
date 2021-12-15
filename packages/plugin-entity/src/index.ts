import fastifyPlugin from "fastify-plugin";

import { Validator } from "./ajv";
import { entitySchemas } from "./schema";

import type { Options as AjvOptions } from "ajv/dist/2020";

export interface Options {
  ajv?: AjvOptions;
  schema?: boolean;
}

const plugin = fastifyPlugin<Options>(
  async (fastify, opts) => {
    const { schema = true, ajv } = opts;
    fastify.decorate("entity", new Validator(ajv));
    if (schema) {
      entitySchemas.forEach(schema => {
        fastify.route({
          method: "GET",
          url: schema.$id,
          handler: (_req, res) => {
            res.send(schema);
          }
        });
      });
    }
  },
  {
    name: "@groovox/plugin-entity",
    fastify: "3.x"
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    entity: Validator;
  }
}

export type { EntityValidationSchemas } from "./schema";
