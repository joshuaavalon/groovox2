import { arg, list, nullable, objectType } from "nexus";

import { adaptTagOrderByInput } from "../adapter";
import { guardNilArray } from "../utils";

export const episode = objectType({
  name: "Episode",
  sourceType: {
    module: "@prisma/client",
    export: "Episode"
  },
  definition(t) {
    t.id("_id", { resolve: root => `episode:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("contentRating");
    t.nullable.date("airedDate");
    t.nullable.decimal("rating");
    t.string("description");
    t.int("episodeNo");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.list.field("tags", {
      type: "Tag",
      args: {
        orderBy: nullable(list(arg({ type: "TagOrderByInput" })))
      },
      resolve: async (root, args, ctx) => {
        const { db } = ctx.app;
        const orderBy = guardNilArray(adaptTagOrderByInput)(args.orderBy);
        return db.tag.findMany({
          where: { episode: { some: { id: { equals: root.id } } } },
          orderBy
        });
      }
    });
    t.list.field("roles", {
      type: "EpisodeRole",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.episodeRole.findMany({
          where: { episode: { id: root.id } },
          orderBy: [{ sequence: "asc" }]
        });
      }
    });
  }
});
