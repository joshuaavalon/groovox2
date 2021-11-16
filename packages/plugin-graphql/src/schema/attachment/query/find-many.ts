import { arg, list, nullable, queryField } from "nexus";

export const findMany = queryField("attachments", {
  type: list("Attachment"),
  args: {
    where: nullable(arg({ type: "AttachmentFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "AttachmentOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.attachment.input.orderBy(args.orderBy);
    const where = transform.attachment.input.findMany(args.where);
    return db.attachment.findMany({ where, orderBy, ...pagination });
  }
});
