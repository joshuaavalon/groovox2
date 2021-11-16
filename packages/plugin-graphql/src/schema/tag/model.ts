import { objectType } from "nexus";

const tag = objectType({
  name: "Tag",
  sourceType: {
    module: "@prisma/client",
    export: "Tag"
  },
  definition(t) {
    t.id("_id", { resolve: root => root.id });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.uuid("categoryId");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.nonNull.field("category", {
      type: "TagCategory",
      resolve: (tag, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.tagCategory.findUnique({
          where: { id: tag.categoryId },
          rejectOnNotFound: true
        });
      }
    });
    t.nonNull.list.nonNull.field("attachments", {
      type: "Attachment",
      resolve: (tag, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.attachment.findMany({
          where: { tag: { every: { id: tag.id } } }
        });
      }
    });
  }
});

export const models = [tag];
