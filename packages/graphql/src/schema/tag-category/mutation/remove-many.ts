import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeTagCategories", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagCategoryFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tagCategory.input.findMany(args.where);
    return db.tagCategory.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
