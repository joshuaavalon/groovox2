import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "TagCategory",
  sourceType: {
    module: "@prisma/client",
    export: "TagCategory"
  },
  definition(t) {
    t.id("_id", { resolve: root => `tag-category:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.list.field("tags", {
      type: "Tag",
      resolve: (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.tag.findMany({ where: { categoryId: root.id } });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;
