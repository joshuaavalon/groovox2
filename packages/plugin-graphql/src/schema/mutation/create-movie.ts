import { arg, mutationField } from "nexus";

import { adaptMovieCreateOneInput } from "../adapter";

export const createMovie = mutationField("createMovie", {
  type: "Movie",
  args: {
    data: arg({ type: "MovieCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const data = adaptMovieCreateOneInput(args.data);
    return db.movie.create({ data });
  }
});
