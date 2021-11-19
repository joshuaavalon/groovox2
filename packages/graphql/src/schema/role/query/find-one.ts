import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("role", {
  type: nullable("Role"),
  args: {
    where: arg({ type: "RoleFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.role.input.findOne(args.where);
    return await db.role.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
