import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Tag",
  sourceType: {
    module: "@prisma/client",
    export: "Tag"
  },
  definition(t) {
    t.id("_id", { resolve: root => `tag:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.uuid("categoryId");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.field("category", {
      type: "TagCategory",
      resolve: (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.tagCategory.findUnique({
          where: { id: root.categoryId },
          rejectOnNotFound: true
        });
      }
    });
    t.list.field("attachments", {
      type: "Attachment",
      resolve: (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.attachment.findMany({
          where: { tag: { every: { id: root.id } } }
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
