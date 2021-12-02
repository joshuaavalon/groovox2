import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeTagAttachments", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagAttachmentFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tagattachment.input.findMany(args.where);
    return db.tagattachment.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
