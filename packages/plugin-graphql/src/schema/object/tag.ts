import { objectType } from "nexus";

export const tag = objectType({
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
        const { db } = ctx.app;
        return db.tagCategory.findUnique({
          where: { id: root.categoryId },
          rejectOnNotFound: true
        });
      }
    });
  }
});
