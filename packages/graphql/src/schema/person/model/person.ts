import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Person",
  sourceType: {
    module: "@prisma/client",
    export: "Person"
  },
  definition(t) {
    t.id("_id", { resolve: root => `person:${root.id}` });
    t.uuid("id");
    t.string("nameFirst");
    t.string("nameMiddle");
    t.string("nameLast");
    t.string("nameSort");
    t.string("description");
    t.nullable.date("birthDate");
    t.nullable.date("deathDate");
    t.string("sex");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.list.field("units", {
      type: "Unit",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.unit.findMany({
          where: { person: { some: { id: root.id } } }
        });
      }
    });
    t.list.field("tags", {
      type: "Tag",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.tag.findMany({
          where: { person: { some: { id: root.id } } }
        });
      }
    });
    t.list.field("attachments", {
      type: "Attachment",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.attachment.findMany({
          where: { person: { some: { id: root.id } } }
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
