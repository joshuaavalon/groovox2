import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeRoles", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "RoleFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.role.input.findMany(args.where);
    return db.role.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
