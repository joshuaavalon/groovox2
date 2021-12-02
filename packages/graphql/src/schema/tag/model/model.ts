import { arg, list, nullable, objectType } from "nexus";
import { transform } from "@groovox/graphql-util";

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
      type: "TagAttachment",
      args: {
        orderBy: nullable(list(arg({ type: "TagAttachmentOrderByInput" })))
      },
      resolve: (root, args, ctx) => {
        const { db } = ctx.fastify;
        const orderBy = transform.tag.input.orderBy(args.orderBy);
        return db.tagAttachment.findMany({
          where: { tagId: root.id },
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
