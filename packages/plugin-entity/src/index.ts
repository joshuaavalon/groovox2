import fastifyStatic from "fastify-static";
import fastifyPlugin from "fastify-plugin";
import path from "path";

import { AjvValidator } from "./ajv";

import type { Options as AjvOptions } from "ajv/dist/2020";

export interface Options {
  ajv?: AjvOptions;
  schema?: boolean;
}

const plugin = fastifyPlugin<Options>(
  async (fastify, opts) => {
    const { schema = true, ajv } = opts;
    fastify.decorate("entity", new AjvValidator(ajv));
    if (schema) {
      await fastify.register(fastifyStatic, {
        root: path.join(__dirname, "schema"),
        prefix: "/schema/",
        allowedPath: pathname => pathname.endsWith(".schema.json"),
        decorateReply: false
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
    entity: AjvValidator;
  }
}

export type { Schemas } from "./ajv";
