import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateRole", {
  type: "Role",
  args: {
    where: arg({ type: "RoleFindOneInput" }),
    data: arg({ type: "RoleUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.role.input.findOne(args.where);
    const data = transform.role.input.updateOne(args.data);
    return db.role.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
