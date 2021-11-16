import { arg, mutationField } from "nexus";

export const removeMany = mutationField("removeTags", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.tag.input.findMany(args.where);
    return db.tag.deleteMany({ where });
  }
});
