import fastifyPlugin from "fastify-plugin";
import mercurius from "mercurius";
import mercuriusUpload from "mercurius-upload";
import altairPlugin from "@groovox/plugin-altair";
import graphqlJsonSchemaPlugin, {
  schemas
} from "@groovox/plugin-graphql-json-schema";
import { createGraphqlSchema } from "@groovox/graphql";
import type {} from "@groovox/plugin-api";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    const graphqlSchema = createGraphqlSchema();
    fastify.register(graphqlJsonSchemaPlugin);
    fastify.register(mercuriusUpload);
    fastify.register(mercurius, {
      schema: graphqlSchema,
      path: "/graphql",
      graphiql: false,
      context: (request, reply) => ({
        fastify,
        request,
        reply
      })
    });
    fastify.register(altairPlugin);
    fastify.addHook("onReady", async () => {
      schemas.forEach(schema => fastify.validate.addSchema(schema));
    });
  },
  {
    name: "@groovox/plugin-graphql",
    fastify: "3.x",
    dependencies: ["@groovox/plugin-api", "@groovox/plugin-validate"]
  }
);

export default plugin;
