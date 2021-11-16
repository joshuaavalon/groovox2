import { arg, mutationField } from "nexus";

export const removeMany = mutationField("removeRoles", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "RoleFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.role.input.findMany(args.where);
    return db.role.deleteMany({ where });
  }
});
