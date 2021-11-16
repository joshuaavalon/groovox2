import { arg, mutationField } from "nexus";

export const createOne = mutationField("createAttachment", {
  type: "Attachment",
  args: {
    data: arg({ type: "AttachmentCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db, graphqlUtil } = ctx.fastify;
    const { transform } = graphqlUtil;
    const data = transform.attachment.input.createOne(args.data);
    // TODO: confirm upload
    // TODO: check parent. E.g. tagId
    return db.attachment.create({ data });
  }
});
