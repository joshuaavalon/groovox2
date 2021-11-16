import { arg, nullable, queryField } from "nexus";

export const findOne = queryField("tagCategory", {
  type: nullable("TagCategory"),
  args: {
    where: arg({ type: "TagCategoryFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.tagCategory.input.findOne(args.where);
    return await db.tagCategory.findUnique({ where });
  }
});
