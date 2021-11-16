import { arg, mutationField } from "nexus";

export const removeMany = mutationField("removeAttachments", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "AttachmentFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.attachment.input.findMany(args.where);
    return db.attachment.deleteMany({ where });
  }
});
