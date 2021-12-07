import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("movieRole", {
  type: nullable("MovieRole"),
  args: {
    where: arg({ type: "MovieRoleFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.movieRole.input.findOne(args.where);
    return await db.movieRole.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
