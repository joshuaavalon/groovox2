import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeTags", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tag.input.findMany(args.where);
    return db.tag.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
