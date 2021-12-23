import { arg, nullable, queryField } from "nexus";

import { adaptMovieRoleFindOneInput } from "../adapter";

export const findMovieRole = queryField("findMovieRole", {
  type: nullable("MovieRole"),
  args: {
    where: arg({ type: "MovieRoleFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptMovieRoleFindOneInput(args.where);
    return await db.movieRole.findUnique({ where });
  }
});
