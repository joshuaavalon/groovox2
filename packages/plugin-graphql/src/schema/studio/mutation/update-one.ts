import { arg, mutationField } from "nexus";

export const updateOne = mutationField("updateStudio", {
  type: "Studio",
  args: {
    where: arg({ type: "StudioFindOneInput" }),
    data: arg({ type: "StudioUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.studio.input.findOne(args.where);
    const data = transform.studio.input.updateOne(args.data);
    return db.studio.update({ data, where });
  }
});
