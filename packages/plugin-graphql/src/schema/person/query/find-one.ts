import { arg, nullable, queryField } from "nexus";

export const findOne = queryField("person", {
  type: nullable("Person"),
  args: {
    where: arg({ type: "PersonFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.person.input.findOne(args.where);
    return await db.person.findUnique({ where });
  }
});
