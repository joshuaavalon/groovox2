import fastifyPlugin from "fastify-plugin";
import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (_fastify, _opts) => {
    // TODO
  },
  {
    name: "@groovox/plugin-core",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-database"]
  }
);

export default plugin;
