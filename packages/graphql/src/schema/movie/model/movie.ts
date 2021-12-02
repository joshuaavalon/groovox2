import { objectType } from "nexus";

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
    t.field("studio", {
      type: "Studio",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.studio.findMany({
          where: { id: root.studioId }
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
