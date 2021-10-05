import fastifyPlugin from "fastify-plugin";
import { createDatabase } from "@groovox/database";

import type { PrismaClient } from "@prisma/client";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    if (fastify.db) {
      throw new Error("@groovox/plugin-database has already registered");
    }
    fastify.decorate("db", createDatabase());
  },
  {
    name: "@groovox/plugin-database",
    fastify: "3.x"
  }
);

export default plugin;

declare module "fastify" {
  interface FastifyInstance {
    db: PrismaClient;
  }
}
