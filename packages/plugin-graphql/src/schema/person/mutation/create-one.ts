import { arg, mutationField } from "nexus";

export const createOne = mutationField("createPerson", {
  type: "Person",
  args: {
    data: arg({ type: "PersonCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const data = transform.person.input.createOne(args.data);
    return db.person.create({ data });
  }
});
