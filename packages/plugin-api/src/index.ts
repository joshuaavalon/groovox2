import fastifyPlugin from "fastify-plugin";
import { registerApi } from "./func";
import { registerLoader } from "./loader";

import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    await registerApi(fastify);
    await registerLoader(fastify);
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
    loader: GroovoxLoader;
  }

  interface GroovoxApi {}
  interface GroovoxLoader {}
}
