import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createTag", {
  type: "Tag",
  args: {
    data: arg({ type: "TagCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.tag.input.createOne(args.data);
    return db.tag.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
