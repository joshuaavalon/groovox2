import { arg, mutationField } from "nexus";

import { adaptMovieFindOneInput, adaptMovieUpdateOneInput } from "../adapter";

export const updateMovie = mutationField("updateMovie", {
  type: "Movie",
  args: {
    where: arg({ type: "MovieFindOneInput" }),
    data: arg({ type: "MovieUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptMovieFindOneInput(args.where);
    const data = adaptMovieUpdateOneInput(args.data);
    return db.movie.update({ data, where });
  }
});
