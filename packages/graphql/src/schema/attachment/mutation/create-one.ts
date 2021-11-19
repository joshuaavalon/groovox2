import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createAttachment", {
  type: "Attachment",
  args: {
    data: arg({ type: "AttachmentCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.attachment.input.createOne(args.data);
    // TODO: confirm upload
    // TODO: check parent. E.g. tagId
    return db.attachment.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
