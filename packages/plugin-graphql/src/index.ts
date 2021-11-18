import fastifyPlugin from "fastify-plugin";
import mercurius from "mercurius";
import altairPlugin from "@groovox/plugin-altair";

import { schemas as jsonSchemas } from "./schema";
import { createSchema } from "./create-schema";
import { graphqlUtil } from "./util";

import type {} from "@groovox/plugin-api";

export type { nexus } from "./create-schema";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
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
    jsonSchemas.forEach(schema => fastify.addSchema(schema));
    fastify.register(altairPlugin);
    fastify.decorate("graphqlUtil", graphqlUtil);
  },
  {
    name: "@groovox/plugin-graphql",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-api", "plugin-ajv"]
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    graphqlUtil: typeof graphqlUtil;
  }
}
