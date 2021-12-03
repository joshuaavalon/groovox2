import { arg, list, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = queryField("tagAttachments", {
  type: list("TagAttachment"),
  args: {
    where: nullable(arg({ type: "TagAttachmentFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "TagAttachmentOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.tagAttachment.input.orderBy(args.orderBy);
    const where = transform.tagAttachment.input.findMany(args.where);
    return db.tagAttachment.findMany({ where, orderBy, ...pagination });
  }
});

const model: SchemaModel = {
  type
};

export default model;
