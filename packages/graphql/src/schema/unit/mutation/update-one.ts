import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateUnit", {
  type: "Unit",
  args: {
    where: arg({ type: "UnitFindOneInput" }),
    data: arg({ type: "UnitUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.unit.input.findOne(args.where);
    const data = transform.unit.input.updateOne(args.data);
    return db.unit.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
