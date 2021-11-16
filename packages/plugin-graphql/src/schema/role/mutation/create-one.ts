import { arg, mutationField } from "nexus";

export const createOne = mutationField("createRole", {
  type: "Role",
  args: {
    data: arg({ type: "RoleCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const data = transform.role.input.createOne(args.data);
    return db.role.create({ data });
  }
});
