import { arg, nullable, queryField } from "nexus";

export const findOne = queryField("studio", {
  type: nullable("Studio"),
  args: {
    where: arg({ type: "StudioFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.studio.input.findOne(args.where);
    return await db.studio.findUnique({ where });
  }
});
