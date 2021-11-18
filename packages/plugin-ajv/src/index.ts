import fastifyPlugin from "fastify-plugin";
import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import type { Options } from "ajv/dist/2020";

const defaultAjvOptions = {
  coerceTypes: true,
  useDefaults: true,
  removeAdditional: true,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false,
  validateFormats: true
};
const plugin = fastifyPlugin<Options>(
  async (fastify, opts) => {
    const ajv = addFormats(new Ajv({ ...defaultAjvOptions, ...opts }));
    fastify.decorate("ajv", ajv);
  },
  {
    name: "@groovox/plugin-ajv",
    fastify: "3.x"
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    ajv: Ajv;
  }
}
