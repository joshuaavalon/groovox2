import fastifyPlugin from "fastify-plugin";

import { registerApi } from "./func";
import { apiUtil } from "./util";

import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    await registerApi(fastify);
    fastify.decorate("apiUtil", apiUtil);
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
    apiUtil: typeof apiUtil;
  }

  interface GroovoxApi {}
}
