import fastify from "fastify";
import apiPlugin from "@groovox/plugin-api";
import corePlugin from "@groovox/plugin-core";
import databasePlugin from "@groovox/plugin-database";
import graphqlPlugin from "@groovox/plugin-graphql";
import ajvPlugin from "@groovox/plugin-validate";
import entityPlugin from "@groovox/plugin-entity";

import type { FastifyInstance } from "fastify";

export const createApp = async (): Promise<FastifyInstance> => {
  const server = fastify();
  server.register(entityPlugin);
  server.register(ajvPlugin);
  server.register(databasePlugin);
  server.register(apiPlugin);
  server.register(graphqlPlugin);
  server.register(corePlugin);
  return server;
};
