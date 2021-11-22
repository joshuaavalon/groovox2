import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Unit",
  sourceType: {
    module: "@prisma/client",
    export: "Unit"
  },
  definition(t) {
    t.id("_id", { resolve: root => `unit:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.list.field("member", {
      type: "Person",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.person.findMany({
          where: { unit: { some: { id: root.id } } }
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
