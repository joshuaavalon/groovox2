import { arg, mutationField } from "nexus";

export const createOne = mutationField("createTag", {
  type: "Tag",
  args: {
    data: arg({ type: "TagCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const data = transform.tag.input.createOne(args.data);
    return db.tag.create({ data });
  }
});
