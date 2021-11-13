import { arg, list, nullable, queryField } from "nexus";

export const findMany = queryField("studios", {
  type: list("Studio"),
  args: {
    where: nullable(arg({ type: "StudioFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "StudioOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.studio.input.orderBy(args.orderBy);
    const where = transform.studio.input.findMany(args.where);
    console.log({ where });
    return db.studio.findMany({ where, orderBy, ...pagination });
  }
});
