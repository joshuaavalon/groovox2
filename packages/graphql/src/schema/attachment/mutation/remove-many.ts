import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeAttachments", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "AttachmentFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.attachment.input.findMany(args.where);
    return db.attachment.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
