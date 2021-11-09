import fastifyPlugin from "fastify-plugin";
import mercurius from "mercurius";
import altairFastifyPlugin from "altair-fastify-plugin";

import { createSchema } from "./schema";

import type {} from "@groovox/plugin-api";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    // altair-fastify-plugin
    const schema = createSchema();
    fastify.register(mercurius, {
      schema,
      path: "/graphql",
      graphiql: false,
      context: (request, reply) => ({
        fastify,
        request,
        reply
      })
    });
    fastify.register(altairFastifyPlugin);
  },
  {
    name: "@groovox/plugin-graphql",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-api"]
  }
);

export default plugin;
