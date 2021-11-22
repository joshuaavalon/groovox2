import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeUnits", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "UnitFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.unit.input.findMany(args.where);
    return db.unit.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
