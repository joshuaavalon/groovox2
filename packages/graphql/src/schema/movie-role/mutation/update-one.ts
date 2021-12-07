import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updateMovieRole", {
  type: "MovieRole",
  args: {
    where: arg({ type: "MovieRoleFindOneInput" }),
    data: arg({ type: "MovieRoleUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.movieRole.input.findOne(args.where);
    const data = transform.movieRole.input.updateOne(args.data);
    return db.movieRole.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;
