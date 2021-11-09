import fastify from "fastify";
import apiPlugin from "@groovox/plugin-api";
import corePlugin from "@groovox/plugin-core";
import databasePlugin from "@groovox/plugin-database";
import graphqlPlugin from "@groovox/plugin-graphql";

export const main = async (): Promise<void> => {
  const server = fastify();
  server.register(databasePlugin);
  server.register(apiPlugin);
  server.register(graphqlPlugin);
  server.register(corePlugin);

  server.listen(3000);
};
