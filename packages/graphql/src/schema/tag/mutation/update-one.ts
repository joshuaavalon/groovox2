import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateTag", {
  type: "Tag",
  args: {
    where: arg({ type: "TagFindOneInput" }),
    data: arg({ type: "TagUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.tag.input.findOne(args.where);
    const data = transform.tag.input.updateOne(args.data);
    return db.tag.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
