import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("person", {
  type: nullable("Person"),
  args: {
    where: arg({ type: "PersonFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.person.input.findOne(args.where);
    return await db.person.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
