import { arg, mutationField } from "nexus";

export const createOne = mutationField("createTagCategory", {
  type: "TagCategory",
  args: {
    data: arg({ type: "TagCategoryCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const data = transform.tagCategory.input.createOne(args.data);
    return db.tagCategory.create({ data });
  }
});
