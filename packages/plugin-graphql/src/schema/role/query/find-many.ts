import { arg, list, nullable, queryField } from "nexus";

export const findMany = queryField("roles", {
  type: list("Role"),
  args: {
    where: nullable(arg({ type: "RoleFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "RoleOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.role.input.orderBy(args.orderBy);
    const where = transform.role.input.findMany(args.where);
    return db.role.findMany({ where, orderBy, ...pagination });
  }
});
