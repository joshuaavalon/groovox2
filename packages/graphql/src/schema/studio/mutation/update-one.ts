import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";
import schema from "./update-one.schema.json";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateStudio", {
  type: "Studio",
  args: {
    where: arg({ type: "StudioFindOneInput" }),
    data: arg({ type: "StudioUpdateOneInput" })
  },
  schema: () => schema.$id,
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.studio.input.findOne(args.where);
    const data = transform.studio.input.updateOne(args.data);
    return db.studio.update({ data, where });
  }
});

const model: SchemaModel = {
  type,
  schema
};

export default model;
