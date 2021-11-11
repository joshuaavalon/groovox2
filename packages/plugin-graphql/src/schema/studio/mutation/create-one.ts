import { arg, mutationField } from "nexus";

export const createOne = mutationField("createStudio", {
  type: "Studio",
  args: {
    data: arg({ type: "StudioCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const data = transform.studio.input.createOne(args.data);
    return db.studio.create({ data });
  }
});
