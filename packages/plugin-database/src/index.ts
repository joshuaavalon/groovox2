import fastifyPlugin from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

const plugin = fastifyPlugin(
  async (fastify, _opts) => {
    if (fastify.db) {
      throw new Error("@groovox/plugin-database has already registered");
    }
    const db = new PrismaClient();
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
