import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeShows", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "ShowFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.show.input.findMany(args.where);
    return db.show.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
