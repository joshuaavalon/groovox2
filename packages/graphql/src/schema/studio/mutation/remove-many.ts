import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeStudios", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "StudioFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.studio.input.findMany(args.where);
    return db.studio.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
