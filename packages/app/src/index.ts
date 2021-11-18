import fastify from "fastify";
import apiPlugin from "@groovox/plugin-api";
import corePlugin from "@groovox/plugin-core";
import databasePlugin from "@groovox/plugin-database";
import graphqlPlugin from "@groovox/plugin-graphql";
import ajvCompiler from "@groovox/ajv-compiler";

import type { FastifyInstance } from "fastify";

export const createApp = async (): Promise<FastifyInstance> => {
  // https://www.fastify.io/docs/latest/Server/#schemacontroller
  const server = fastify({
    schemaController: {
      compilersFactory: {
        buildValidator: ajvCompiler() as any
      }
    }
  });
  server.register(databasePlugin);
  server.register(apiPlugin);
  server.register(graphqlPlugin);
  server.register(corePlugin);
  return server;
};
