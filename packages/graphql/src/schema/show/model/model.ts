import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Show",
  sourceType: {
    module: "@prisma/client",
    export: "Show"
  },
  definition(t) {
    t.id("_id", { resolve: root => `show:${root.id}` });
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
    t.list.field("studio", {
      type: "Studio",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.studio.findMany({
          where: { show: { some: { id: { equals: root.id } } } }
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
