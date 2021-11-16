import { arg, nullable, queryField } from "nexus";

export const findOne = queryField("tag", {
  type: nullable("Tag"),
  args: {
    where: arg({ type: "TagFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.tag.input.findOne(args.where);
    return await db.tag.findUnique({ where });
  }
});
