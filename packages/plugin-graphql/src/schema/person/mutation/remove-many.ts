import { arg, mutationField } from "nexus";

export const removeMany = mutationField("removePeople", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "PersonFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.person.input.findMany(args.where);
    return db.person.deleteMany({ where });
  }
});
