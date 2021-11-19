import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("studio", {
  type: nullable("Studio"),
  args: {
    where: arg({ type: "StudioFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.studio.input.findOne(args.where);
    return await db.studio.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
