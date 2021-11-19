import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createStudio", {
  type: "Studio",
  args: {
    data: arg({ type: "StudioCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.studio.input.createOne(args.data);
    return db.studio.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
