import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createTagCategory", {
  type: "TagCategory",
  args: {
    data: arg({ type: "TagCategoryCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.tagCategory.input.createOne(args.data);
    return db.tagCategory.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
