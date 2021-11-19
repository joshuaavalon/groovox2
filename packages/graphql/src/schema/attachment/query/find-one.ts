import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("attachment", {
  type: nullable("Attachment"),
  args: {
    where: arg({ type: "AttachmentFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.attachment.input.findOne(args.where);
    return await db.attachment.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
