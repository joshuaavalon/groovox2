import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createUnit", {
  type: "Unit",
  args: {
    data: arg({ type: "UnitCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.unit.input.createOne(args.data);
    return db.unit.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
