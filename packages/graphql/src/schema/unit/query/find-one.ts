import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("unit", {
  type: nullable("Unit"),
  args: {
    where: arg({ type: "UnitFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.unit.input.findOne(args.where);
    return await db.unit.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
