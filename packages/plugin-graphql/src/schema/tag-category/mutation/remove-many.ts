import { arg, mutationField } from "nexus";

export const removeMany = mutationField("removeTagCategories", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagCategoryFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.tagCategory.input.findMany(args.where);
    return db.tagCategory.deleteMany({ where });
  }
});
