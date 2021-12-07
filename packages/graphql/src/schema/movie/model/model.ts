import { arg, list, nullable, objectType } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Movie",
  sourceType: {
    module: "@prisma/client",
    export: "Movie"
  },
  definition(t) {
    t.id("_id", { resolve: root => `movie:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("nameSort");
    t.string("contentRating");
    t.nullable.date("airedDate");
    t.string("tagline");
    t.nullable.decimal("rating");
    t.string("description");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.list.string("alias", {
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        const result = await db.movieAlias.findMany({
          where: { movieId: root.id },
          orderBy: { sequence: "asc" }
        });
        return result.map(a => a.alias);
      }
    });
    t.list.field("studios", {
      type: "Studio",
      args: {
        orderBy: nullable(list(arg({ type: "StudioOrderByInput" })))
      },
      resolve: async (root, args, ctx) => {
        const { db } = ctx.fastify;
        const orderBy = transform.studio.input.orderBy(args.orderBy);
        return db.studio.findMany({
          where: { movie: { some: { id: { equals: root.id } } } },
          orderBy
        });
      }
    });
    t.list.field("tags", {
      type: "Tag",
      args: {
        orderBy: nullable(list(arg({ type: "TagOrderByInput" })))
      },
      resolve: async (root, args, ctx) => {
        const { db } = ctx.fastify;
        const orderBy = transform.tag.input.orderBy(args.orderBy);
        return db.tag.findMany({
          where: { movie: { some: { id: { equals: root.id } } } },
          orderBy
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
