import fastifyPlugin from "fastify-plugin";
import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    fastify.decorate("api", {});
  },
  {
    name: "@groovox/plugin-core",
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
