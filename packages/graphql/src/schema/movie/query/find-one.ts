import { arg, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

export const type = queryField("movie", {
  type: nullable("Movie"),
  args: {
    where: arg({ type: "MovieFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.movie.input.findOne(args.where);
    return await db.movie.findUnique({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
