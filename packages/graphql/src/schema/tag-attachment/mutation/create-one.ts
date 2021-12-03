import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createTagAttachment", {
  type: "TagAttachment",
  args: {
    data: arg({ type: "TagAttachmentCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.tagAttachment.input.createOne(args.data);
    return db.tagAttachment.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
