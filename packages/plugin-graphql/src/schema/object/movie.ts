import { arg, list, nullable, objectType } from "nexus";

import { adaptStudioOrderByInput, adaptTagOrderByInput } from "../adapter";
import { guardNilArray } from "../utils";

export const movie = objectType({
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
        const { db } = ctx.app;
        const result = await db.movieAlias.findMany({
          where: { movieId: root.id },
          orderBy: [{ sequence: "asc" }]
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
        const { db } = ctx.app;
        const orderBy = guardNilArray(adaptStudioOrderByInput)(args.orderBy);
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
        const { db } = ctx.app;
        const orderBy = guardNilArray(adaptTagOrderByInput)(args.orderBy);
        return db.tag.findMany({
          where: { movie: { some: { id: { equals: root.id } } } },
          orderBy
        });
      }
    });
    t.list.field("roles", {
      type: "MovieRole",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.movieRole.findMany({
          where: { movie: { id: root.id } },
          orderBy: [{ sequence: "asc" }]
        });
      }
    });
  }
});
