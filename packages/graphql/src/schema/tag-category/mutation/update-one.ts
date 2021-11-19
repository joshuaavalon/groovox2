import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateTagCategory", {
  type: "TagCategory",
  args: {
    where: arg({ type: "TagCategoryFindOneInput" }),
    data: arg({ type: "TagCategoryUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tagCategory.input.findOne(args.where);
    const data = transform.tagCategory.input.updateOne(args.data);
    return db.tagCategory.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
