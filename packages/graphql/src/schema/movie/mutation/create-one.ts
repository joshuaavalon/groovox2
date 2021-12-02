import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createMovie", {
  type: "Movie",
  args: {
    data: arg({ type: "MovieCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.movie.input.createOne(args.data);
    return db.movie.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;
