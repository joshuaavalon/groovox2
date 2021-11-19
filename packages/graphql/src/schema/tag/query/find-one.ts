import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("tag", {
  type: nullable("Tag"),
  args: {
    where: arg({ type: "TagFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tag.input.findOne(args.where);
    return await db.tag.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
