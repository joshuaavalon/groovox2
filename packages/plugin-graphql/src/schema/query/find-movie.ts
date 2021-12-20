import { arg, nullable, queryField } from "nexus";

import { adaptMovieFindOneInput } from "../adapter";

export const findMovie = queryField("findMovie", {
  type: nullable("Movie"),
  args: {
    where: arg({ type: "MovieFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptMovieFindOneInput(args.where);
    return await db.movie.findUnique({ where });
  }
});
