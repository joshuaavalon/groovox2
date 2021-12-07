import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("show", {
  type: nullable("Show"),
  args: {
    where: arg({ type: "ShowFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.show.input.findOne(args.where);
    return await db.show.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
