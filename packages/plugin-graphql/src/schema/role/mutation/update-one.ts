import { arg, mutationField } from "nexus";

export const updateOne = mutationField("updateRole", {
  type: "Role",
  args: {
    where: arg({ type: "RoleFindOneInput" }),
    data: arg({ type: "RoleUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.role.input.findOne(args.where);
    const data = transform.role.input.updateOne(args.data);
    return db.role.update({ data, where });
  }
});
