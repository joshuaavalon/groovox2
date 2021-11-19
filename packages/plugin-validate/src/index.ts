import fastifyPlugin from "fastify-plugin";

import { AjvValidator } from "./ajv";

import type { Validator } from "./type";

export interface Options {
  validate?: Validator;
}

const plugin = fastifyPlugin<Options>(
  async (fastify, opts) => {
    let { validate } = opts;
    if (!validate) {
      validate = new AjvValidator();
    }
    fastify.decorate("validate", validate);
  },
  {
    name: "@groovox/plugin-validate",
    fastify: "3.x"
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    validate: Validator;
  }
}
