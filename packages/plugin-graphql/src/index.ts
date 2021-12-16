import fastifyPlugin from "fastify-plugin";
import mercurius from "mercurius";
import mercuriusUpload from "mercurius-upload";
import altairPlugin from "@groovox/plugin-altair";

import { createSchema } from "./schema";

import type {} from "@groovox/plugin-database";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    const graphqlSchema = createSchema();
    await fastify.register(mercuriusUpload);
    await fastify.register(mercurius, {
      schema: graphqlSchema,
      path: "/graphql",
      graphiql: false
    });
    await fastify.register(altairPlugin);
  },
  {
    name: "@groovox/plugin-graphql",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-database", "@groovox/plugin-validate"]
  }
);

export default plugin;
