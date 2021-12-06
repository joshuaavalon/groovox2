import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Attachment",
  sourceType: {
    module: "@prisma/client",
    export: "Attachment"
  },
  definition(t) {
    t.id("_id", { resolve: root => `attachment:${root.id}` });
    t.uuid("id");
    t.nullable.uuid("tagId");
    t.nullable.uuid("tagCategoryId");
    t.string("type");
    t.string("description");
    t.dateTime("createdAt");
    t.nullable.field("tag", {
      type: "Tag",
      resolve: (root, _args, ctx) => {
        if (!root.tagId) {
          return null;
        }
        const { db } = ctx.fastify;
        return db.tag.findUnique({
          where: { id: root.tagId },
          rejectOnNotFound: true
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
