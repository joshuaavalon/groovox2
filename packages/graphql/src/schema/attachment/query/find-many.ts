import { arg, list, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = queryField("attachments", {
  type: list("Attachment"),
  args: {
    where: nullable(arg({ type: "AttachmentFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "AttachmentOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.attachment.input.orderBy(args.orderBy);
    const where = transform.attachment.input.findMany(args.where);
    return db.attachment.findMany({ where, orderBy, ...pagination });
  }
});

const model: SchemaModel = {
  type
};

export default model;
