import { objectType } from "nexus";

export const unit = objectType({
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
    t.list.field("members", {
      type: "Person",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.person.findMany({
          where: { unit: { some: { id: root.id } } }
        });
      }
    });
    t.list.field("tags", {
      type: "Tag",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.tag.findMany({
          where: { unit: { some: { id: root.id } } }
        });
      }
    });
  }
});
