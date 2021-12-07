import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateShow", {
  type: "Show",
  args: {
    where: arg({ type: "ShowFindOneInput" }),
    data: arg({ type: "ShowUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.show.input.findOne(args.where);
    const data = transform.show.input.updateOne(args.data);
    return db.show.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
