import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("tagattachment", {
  type: nullable("TagAttachment"),
  args: {
    where: arg({ type: "TagAttachmentFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tagattachment.input.findOne(args.where);
    return await db.tagattachment.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
