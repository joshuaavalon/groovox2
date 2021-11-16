import { arg, list, nullable, queryField } from "nexus";

export const findMany = queryField("tagCategories", {
  type: list("TagCategory"),
  args: {
    where: nullable(arg({ type: "TagCategoryFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "TagCategoryOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.tagCategory.input.orderBy(args.orderBy);
    const where = transform.tagCategory.input.findMany(args.where);
    console.log({ where });
    return db.tagCategory.findMany({ where, orderBy, ...pagination });
  }
});
