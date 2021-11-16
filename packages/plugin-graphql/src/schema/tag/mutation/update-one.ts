import { arg, mutationField } from "nexus";

export const updateOne = mutationField("updateTag", {
  type: "Tag",
  args: {
    where: arg({ type: "TagFindOneInput" }),
    data: arg({ type: "TagUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.tag.input.findOne(args.where);
    const data = transform.tag.input.updateOne(args.data);
    return db.tag.update({ data, where });
  }
});
