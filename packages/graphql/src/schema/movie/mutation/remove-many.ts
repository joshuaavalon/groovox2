import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("removeMovies", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "MovieFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.movie.input.findMany(args.where);
    return db.movie.deleteMany({ where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
