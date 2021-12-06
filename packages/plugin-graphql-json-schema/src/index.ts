import fastifyPlugin from "fastify-plugin";
import fastifyStatic from "fastify-static";

import { schemaIds, schemas } from "./schema";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    await fastify.register(fastifyStatic, {
      root: __dirname,
      prefix: "/schema/graphql/",
      allowedPath: pathname => pathname.endsWith(".schema.json"),
      decorateReply: false
    });
    fastify.decorate("graphqlJsonSchemas", schemas);
    fastify.decorate("graphqlJsonSchemaIds", schemaIds);
  },
  {
    name: "@groovox/plugin-graphql-json-schema",
    fastify: "3.x"
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    graphqlJsonSchemas: typeof schemas;
    graphqlJsonSchemaIds: typeof schemaIds;
  }
}

export { schemaIds, schemas } from "./schema";
