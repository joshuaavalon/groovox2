import { arg, mutationField } from "nexus";

export const removeMany = mutationField("removeStudios", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "StudioFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.studio.input.findMany(args.where);
    return db.studio.deleteMany({ where });
  }
});
