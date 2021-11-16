import { arg, nullable, queryField } from "nexus";

export const findOne = queryField("attachment", {
  type: nullable("Attachment"),
  args: {
    where: arg({ type: "AttachmentFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const where = transform.attachment.input.findOne(args.where);
    return await db.attachment.findUnique({ where });
  }
});
