import { arg, nullable, queryField } from "nexus";

export const findOne = queryField("role", {
  type: nullable("Role"),
  args: {
    where: arg({ type: "RoleFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.role.input.findOne(args.where);
    return await db.role.findUnique({ where });
  }
});
