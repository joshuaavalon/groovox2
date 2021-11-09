import fastifyPlugin from "fastify-plugin";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    process.on("SIGINT", () => fastify.close());
    process.on("SIGTERM", () => fastify.close());
  },
  {
    name: "@groovox/plugin-shutdown",
    fastify: "3.x"
  }
);

export default plugin;
