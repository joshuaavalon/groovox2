import fastifyPlugin from "fastify-plugin";

import { createApi, GroovoxApi } from "./api";

import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    fastify.decorate("api", createApi(fastify));
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
}
