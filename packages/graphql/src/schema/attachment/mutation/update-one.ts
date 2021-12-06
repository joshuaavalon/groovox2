import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateAttachment", {
  type: "Attachment",
  args: {
    where: arg({ type: "AttachmentFindOneInput" }),
    data: arg({ type: "AttachmentUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.attachment.input.findOne(args.where);
    const data = transform.attachment.input.updateOne(args.data);
    return db.attachment.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
