import fastifyPlugin from "fastify-plugin";

import { registerApi } from "./func";

import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    await registerApi(fastify);
  },
  {
    name: "@groovox/plugin-api",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-database"]
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    api: GroovoxApi;
  }

  interface GroovoxApi {}
}
