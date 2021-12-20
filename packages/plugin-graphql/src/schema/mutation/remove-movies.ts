import { arg, mutationField } from "nexus";

import { adaptMovieFindManyInput } from "../adapter";

export const removeMovies = mutationField("removeMovies", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "MovieFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptMovieFindManyInput(args.where);
    return db.movie.deleteMany({ where });
  }
});
