import { arg, mutationField } from "nexus";

export const updateOne = mutationField("updatePerson", {
  type: "Person",
  args: {
    where: arg({ type: "PersonFindOneInput" }),
    data: arg({ type: "PersonUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.person.input.findOne(args.where);
    const data = transform.person.input.updateOne(args.data);
    return db.person.update({ data, where });
  }
});
