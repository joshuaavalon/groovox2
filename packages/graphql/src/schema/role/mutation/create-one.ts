import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createRole", {
  type: "Role",
  args: {
    data: arg({ type: "RoleCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.role.input.createOne(args.data);
    return db.role.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
