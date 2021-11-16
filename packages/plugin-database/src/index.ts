import fastifyPlugin from "fastify-plugin";
import { PrismaClient } from "@prisma/client";
import type { Prisma } from "@prisma/client";

export interface Options {
  url?: string;
}

const plugin = fastifyPlugin<Options>(
  async (fastify, opts = {}) => {
    if (fastify.db) {
      throw new Error("@groovox/plugin-database has already registered");
    }
    const { url } = opts;
    let datasources: Prisma.Datasources | undefined = undefined;
    if (url) {
      datasources = { db: { url } };
    }
    const db = new PrismaClient({ datasources });
    fastify.decorate("db", db);
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
