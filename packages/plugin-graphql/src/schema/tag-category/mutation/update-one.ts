import { arg, mutationField } from "nexus";

export const updateOne = mutationField("updateTagCategory", {
  type: "TagCategory",
  args: {
    where: arg({ type: "TagCategoryFindOneInput" }),
    data: arg({ type: "TagCategoryUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.tagCategory.input.findOne(args.where);
    const data = transform.tagCategory.input.updateOne(args.data);
    return db.tagCategory.update({ data, where });
  }
});
