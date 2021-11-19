import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removePeople", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "PersonFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.person.input.findMany(args.where);
    return db.person.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
