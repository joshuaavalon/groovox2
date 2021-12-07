import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createShow", {
  type: "Show",
  args: {
    data: arg({ type: "ShowCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.show.input.createOne(args.data);
    return db.show.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
