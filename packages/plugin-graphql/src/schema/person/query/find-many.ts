import { arg, list, nullable, queryField } from "nexus";

export const findMany = queryField("persons", {
  type: list("Person"),
  args: {
    where: nullable(arg({ type: "PersonFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "PersonOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.person.input.orderBy(args.orderBy);
    const where = transform.person.input.findMany(args.where);
    return db.person.findMany({ where, orderBy, ...pagination });
  }
});
