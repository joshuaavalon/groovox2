import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateMovie", {
  type: "Movie",
  args: {
    where: arg({ type: "MovieFindOneInput" }),
    data: arg({ type: "MovieUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.movie.input.findOne(args.where);
    const data = transform.movie.input.updateOne(args.data);
    return db.movie.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
