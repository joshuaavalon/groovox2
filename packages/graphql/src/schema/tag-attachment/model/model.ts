import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "TagAttachment",
  sourceType: {
    module: "@prisma/client",
    export: "TagAttachment"
  },
  definition(t) {
    t.id("_id", { resolve: root => `tag-attachment:${root.id}` });
    t.uuid("id");
    t.uuid("tagId");
    t.string("type");
    t.string("description");
    t.dateTime("createdAt");
    t.field("tag", {
      type: "Tag",
      resolve: (root, _args, ctx) => {
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
