import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("tagCategory", {
  type: nullable("TagCategory"),
  args: {
    where: arg({ type: "TagCategoryFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tagCategory.input.findOne(args.where);
    return await db.tagCategory.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
