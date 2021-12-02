import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateTagAttachment", {
  type: "TagAttachment",
  args: {
    where: arg({ type: "TagAttachmentFindOneInput" }),
    data: arg({ type: "TagAttachmentUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tagattachment.input.findOne(args.where);
    const data = transform.tagattachment.input.updateOne(args.data);
    return db.tagattachment.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
